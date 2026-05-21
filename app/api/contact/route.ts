import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    // SEND LEAD EMAIL TO YOU
    await resend.emails.send({
      from: "ProBest Painting <onboarding@resend.dev>",
      to: "salkdee@gmail.com",
      subject: `New Lead: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // AUTO REPLY
    await resend.emails.send({
      from: "ProBest Painting <onboarding@resend.dev>",
      to: email,
      subject: "We received your request",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting ProBest Painting. We will respond within 24 hours.</p>
        <p>Call us: 604-618-0023</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}