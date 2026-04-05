import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { Resend } from 'resend';

const STORAGE_DIR = path.join(process.cwd(), 'data');
const STORAGE_FILE = path.join(STORAGE_DIR, 'contact-submissions.jsonl');

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function saveSubmission(entry: Record<string, unknown>) {
  await fs.mkdir(STORAGE_DIR, { recursive: true });
  await fs.appendFile(STORAGE_FILE, `${JSON.stringify(entry)}\n`, 'utf8');
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
    return { sent: false, reason: 'missing_env' as const };
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

  return { sent: true };
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
      userAgent: request.headers.get('user-agent') || '',
      forwardedFor: request.headers.get('x-forwarded-for') || '',
    };

    await saveSubmission(entry);

    let emailStatus: 'sent' | 'skipped' | 'failed' = 'skipped';
    let emailReason = '';

    try {
      const result = await sendNotificationEmail({
        createdAt: entry.createdAt,
        name: entry.name,
        email: entry.email,
        inquiryType: entry.inquiryType,
        subject: entry.subject,
        message: entry.message,
        source: entry.source,
      });

      emailStatus = result.sent ? 'sent' : 'skipped';
      if (!result.sent) emailReason = result.reason;
    } catch (emailError) {
      emailStatus = 'failed';
      emailReason = emailError instanceof Error ? emailError.message : 'unknown_email_error';
      console.error('Contact notification email failed:', emailError);
    }

    return NextResponse.json({
      ok: true,
      emailStatus,
      emailReason,
    });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return NextResponse.json(
      { ok: false, error: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}
