import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { sendBothEmails } from '@/lib/email-services'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, phone, loanType } = body
    if (!name || !email || !phone || !loanType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create the lead object for database
    const leadData = {
      name,
      email,
      phone,
      loan_type: loanType,
      property_value: body.propertyValue || null,
      current_loan_amount: body.currentLoanAmount || null,
      timeline: body.timeline || null,
      comments: body.comments || null,
      status: 'new',
      created_at: new Date().toISOString()
    }

    // Insert lead into Supabase
    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert([leadData])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      )
    }

    const savedLead = data[0]
    console.log('Lead saved to database:', savedLead.id)

    // Send emails (notification to Charlie + confirmation to lead)
    try {
      const emailResults = await sendBothEmails({
        name: savedLead.name,
        email: savedLead.email,
        phone: savedLead.phone,
        loan_type: savedLead.loan_type,
        property_value: savedLead.property_value,
        current_loan_amount: savedLead.current_loan_amount,
        timeline: savedLead.timeline,
        comments: savedLead.comments,
      })

      // Log email results
      if (emailResults.notification) {
        console.log('Notification email sent successfully')
      }
      if (emailResults.confirmation) {
        console.log('Confirmation email sent successfully')
      }

      // Even if emails fail, we still return success since the lead was saved
      return NextResponse.json(
        { 
          message: 'Lead submitted successfully', 
          leadId: savedLead.id,
          emailStatus: {
            notification: !!emailResults.notification,
            confirmation: !!emailResults.confirmation
          }
        },
        { status: 200 }
      )

    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      
      // Still return success since the lead was saved, but log the email failure
      return NextResponse.json(
        { 
          message: 'Lead submitted successfully, but email notifications may have failed', 
          leadId: savedLead.id,
          emailStatus: {
            notification: false,
            confirmation: false
          }
        },
        { status: 200 }
      )
    }

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}