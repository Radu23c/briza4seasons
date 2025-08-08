import { NextRequest, NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nume, email, telefon, mesaj } = body

    // Validate required fields
    if (!nume || !email || !telefon || !mesaj) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Create email content
    const msg = {
      to: process.env.SENDGRID_TO_EMAIL!, // Recipient email
      from: process.env.SENDGRID_FROM_EMAIL!, // Verified sender email
      replyTo: email, // User's email for easy reply
      subject: `New Contact Form Submission from ${nume}`,
      text: `
New contact form submission:

Name: ${nume}
Email: ${email}
Phone: ${telefon}

Message:
${mesaj}

---
This message was sent from your website contact form.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${nume}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #f59e0b;">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${telefon}" style="color: #f59e0b;">${telefon}</a></p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${mesaj.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This message was sent from your website contact form.</p>
            <p>You can reply directly to this email to respond to ${nume}.</p>
          </div>
        </div>
      `,
    }

    // Send email
    await sgMail.send(msg)

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('SendGrid error:', error)

    // Handle specific SendGrid errors
    if (error && typeof error === 'object' && 'response' in error) {
      const sgError = error as any
      console.error('SendGrid error details:', sgError.response?.body)

      return NextResponse.json(
        { error: 'Failed to send email. Please check your SendGrid configuration.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
