import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

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

    // Insert lead into Supabase
    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert([
        {
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
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      )
    }

    // TODO: Send email notification
    console.log('New lead submitted:', data[0])

    return NextResponse.json(
      { message: 'Lead submitted successfully', leadId: data[0].id },
      { status: 200 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}