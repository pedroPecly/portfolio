import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const normalize = (value: string) => value.trim();

export async function POST(request: Request) {
  console.info("[contact] Request received");
  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] Missing RESEND_API_KEY");
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY." },
      { status: 500 }
    );
  }

  if (!process.env.CONTACT_RECEIVER) {
    console.error("[contact] Missing CONTACT_RECEIVER");
    return NextResponse.json(
      { error: "Missing CONTACT_RECEIVER." },
      { status: 500 }
    );
  }

  if (!process.env.CONTACT_SENDER) {
    console.error("[contact] Missing CONTACT_SENDER");
    return NextResponse.json(
      { error: "Missing CONTACT_SENDER." },
      { status: 500 }
    );
  }

  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.error("[contact] Missing TURNSTILE_SECRET_KEY");
    return NextResponse.json(
      { error: "Missing TURNSTILE_SECRET_KEY." },
      { status: 500 }
    );
  }

  let payload: {
    name?: string;
    email?: string;
    message?: string;
    website?: string;
    turnstileToken?: string;
  };

  try {
    payload = await request.json();
  } catch {
    console.error("[contact] Invalid JSON payload");
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const name = normalize(String(payload.name ?? ""));
  const email = normalize(String(payload.email ?? ""));
  const message = normalize(String(payload.message ?? ""));
  const website = normalize(String(payload.website ?? ""));
  const turnstileToken = normalize(String(payload.turnstileToken ?? ""));

  console.info("[contact] Payload parsed", {
    nameLength: name.length,
    emailLength: email.length,
    messageLength: message.length,
    websiteLength: website.length,
  });

  if (website) {
    console.warn("[contact] Honeypot triggered");
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    console.warn("[contact] Missing required fields", {
      name: Boolean(name),
      email: Boolean(email),
      message: Boolean(message),
    });
    return NextResponse.json(
      { error: "Required fields are missing." },
      { status: 400 }
    );
  }

  if (!emailRegex.test(email)) {
    console.warn("[contact] Invalid email format");
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  if (message.length < 10) {
    console.warn("[contact] Message too short", {
      messageLength: message.length,
    });
    return NextResponse.json(
      { error: "Message is too short." },
      { status: 400 }
    );
  }

  if (!turnstileToken) {
    console.warn("[contact] Missing turnstile token");
    return NextResponse.json(
      { error: "Missing turnstile token." },
      { status: 400 }
    );
  }

  try {
    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const verifyData = (await verifyResponse.json()) as {
      success: boolean;
      "error-codes"?: string[];
    };

    if (!verifyResponse.ok || !verifyData.success) {
      console.warn("[contact] Turnstile verification failed", verifyData);
      return NextResponse.json(
        { error: "Anti-spam validation failed." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("[contact] Turnstile verification error", error);
    return NextResponse.json(
      { error: "Anti-spam validation failed." },
      { status: 502 }
    );
  }

  const receiver = process.env.CONTACT_RECEIVER;
  const sender = process.env.CONTACT_SENDER;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    console.info("[contact] Sending email", { receiver, sender });
    const { data, error } = await resend.emails.send({
      from: sender,
      to: [receiver],
      replyTo: email,
      subject: `Contato pelo portfolio - ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend API error", error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 502 }
      );
    }

    console.info("[contact] Email sent", { id: data?.id });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend error", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
