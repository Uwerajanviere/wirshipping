import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { firstName, lastName, email, subject, message } = formData;

    // Configure your email transport using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587', 10),
      secure: process.env.EMAIL_SERVER_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Define email content
    const mailOptions = {
      from: process.env.EMAIL_SERVER_USER, // Sender address
      to: process.env.CONTACT_EMAIL_RECIPIENT, // Recipient email address (your email)
      subject: `New message from ${firstName} ${lastName}: ${subject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong> ${message}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully!');

    return NextResponse.json({ message: 'Your message has been sent!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
} 