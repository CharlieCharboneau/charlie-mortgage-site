import { Resend } from 'resend';
import { LeadNotificationEmail } from './email-templates/lead-notification';
import { LeadConfirmationEmail } from './email-templates/lead-confirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

interface Lead {
  name: string;
  email: string;
  phone: string;
  loan_type: string;
  property_value?: string;
  current_loan_amount?: string;
  timeline?: string;
  comments?: string;
}

export async function sendLeadNotification(lead: Lead) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Charlie Charboneau - Mortgage Expert <notifications@charliecharboneau.mortgage>',
      to: ['charlie@gorascal.com'],
      subject: `🎉 New Lead: ${lead.name} - ${lead.loan_type}`,
      react: LeadNotificationEmail({ lead }),
    });

    if (error) {
      console.error('Error sending notification email:', error);
      throw new Error('Failed to send notification email');
    }

    console.log('Notification email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Notification email service error:', error);
    throw error;
  }
}

export async function sendLeadConfirmation(lead: Lead) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Charlie Charboneau <notifications@charliecharboneau.mortgage>',
      to: [lead.email],
      subject: 'Thank\'s for reaching out! - Charlie Charboneau',
      react: LeadConfirmationEmail({ lead }),
    });

    if (error) {
      console.error('Error sending confirmation email:', error);
      throw new Error('Failed to send confirmation email');
    }

    console.log('Confirmation email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Confirmation email service error:', error);
    throw error;
  }
}

export async function sendBothEmails(lead: Lead) {
  try {
    // Send both emails concurrently for better performance
    const [notificationResult, confirmationResult] = await Promise.allSettled([
      sendLeadNotification(lead),
      sendLeadConfirmation(lead)
    ]);

    const results = {
      notification: notificationResult.status === 'fulfilled' ? notificationResult.value : null,
      confirmation: confirmationResult.status === 'fulfilled' ? confirmationResult.value : null,
      errors: {
        notification: notificationResult.status === 'rejected' ? notificationResult.reason : null,
        confirmation: confirmationResult.status === 'rejected' ? confirmationResult.reason : null,
      }
    };

    // Log any errors but don't fail the entire operation
    if (results.errors.notification) {
      console.error('Notification email failed:', results.errors.notification);
    }
    if (results.errors.confirmation) {
      console.error('Confirmation email failed:', results.errors.confirmation);
    }

    return results;
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
}