import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, jobDescription } = body

    // Validate required fields
    if (!name || !email || !phone || !jobDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In a production environment, you would:
    // 1. Send email using SiteGround's PHP mail or SMTP
    // 2. Store the request in a database
    // 3. Send notifications to administrators
    
    // For now, we'll simulate a successful submission
    // In production, replace this with actual email sending logic:
    // Example using nodemailer or similar:
    /*
    const transporter = nodemailer.createTransport({
      host: 'your-siteground-smtp-host',
      port: 587,
      secure: false,
      auth: {
        user: 'your-email@flexusnet.com',
        pass: 'your-password'
      }
    })

    await transporter.sendMail({
      from: 'service@flexusnet.com',
      to: 'service@flexusnet.com',
      subject: `New Service Request`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Job Description:</strong></p>
        <p>${jobDescription}</p>
      `
    })
    */

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json(
      { message: 'Request submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

