import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { nume, email, telefon, mesaj } = await request.json()

    // Validate required fields
    if (!nume || !email || !telefon || !mesaj) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use Resend's default sender for now
      to: ['blissimobiliare@briza4seasons.ro'],
      subject: `New contact form submission from ${nume}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D4B896; border-bottom: 2px solid #D4B896; padding-bottom: 10px;">
            New Contact Form Submission - Torga45
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Details:</h3>
            <p><strong>Nume:</strong> ${nume}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefon:</strong> <a href="tel:${telefon}">${telefon}</a></p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #D4B896; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${mesaj}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>This message was sent from the Torga45 contact form.</p>
            <p>Reply directly to this email to respond to ${nume}.</p>
          </div>
        </div>
      `,
      // Set reply-to to the form submitter's email
      replyTo: email,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        data: data,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
