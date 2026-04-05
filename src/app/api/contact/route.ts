import { NextResponse } from 'next/server';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body?.name || '').trim();
    const email = String(body?.email || '').trim();
    const subject = String(body?.subject || '').trim();
    const message = String(body?.message || '').trim();

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

    return NextResponse.json(
      {
        ok: false,
        code: 'contact_temporarily_unavailable',
        error:
          'The contact form is temporarily unavailable. Please contact us again shortly after email delivery is configured.',
      },
      { status: 503 }
    );
  } catch (error) {
    console.error('Contact form request parsing failed:', error);
    return NextResponse.json(
      {
        ok: false,
        code: 'invalid_request',
        error: 'Invalid request. Please try again.',
      },
      { status: 400 }
    );
  }
}
