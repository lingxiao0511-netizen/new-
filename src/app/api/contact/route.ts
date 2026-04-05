import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendNotificationEmail(entry: {
  name: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
  source: string;
  createdAt: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

  if (!apiKey || !to) {
    return {
      ok: false,
      code: 'missing_email_config' as const,
      message: 'Email notification is not configured yet.',
    };
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from,
    to,
    replyTo: entry.email,
    subject: `[Contact] ${entry.subject}`,
    text: [
      `New contact submission received.`,
      ``,
      `Submitted at: ${entry.createdAt}`,
      `Name: ${entry.name}`,
      `Email: ${entry.email}`,
      `Inquiry type: ${entry.inquiryType}`,
      `Source: ${entry.source}`,
      ``,
      `Message:`,
      entry.message,
    ].join('\n'),
  });

  return {
    ok: true,
    code: 'email_sent' as const,
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body?.name || '').trim();
    const email = String(body?.email || '').trim();
    const inquiryType = String(body?.inquiryType || '').trim();
    const subject = String(body?.subject || '').trim();
    const message = String(body?.message || '').trim();
    const source = String(body?.source || 'contact-page').trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const entry = {
      createdAt: new Date().toISOString(),
      name,
      email,
      inquiryType,
      subject,
      message,
      source,
    };

    const result = await sendNotificationEmail(entry);

    if (!result.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Contact form is temporarily unavailable. Please try again shortly or contact us by email once configured.',
          code: result.code,
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      ok: true,
      code: result.code,
    });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}
