import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    // CHECK ENV VARIABLE
    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing RESEND_API_KEY",
        },
        { status: 500 }
      );
    }

    // CREATE RESEND CLIENT
    const resend = new Resend(resendKey);

    // GET FORM DATA
    const body = await req.json();

    const { name, email, phone, message } = body;

    // SEND EMAIL TO YOU
    const emailResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "salkdee@gmail.com",
      subject: `New Lead from ${name}`,
      html: `
        <h2>New Lead Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    console.log("EMAIL RESULT:", emailResult);

    // OPTIONAL AUTO-REPLY
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "We received your request",
      html: `
        <p>Hi ${name},</p>

        <p>Thanks for contacting ProBest Painting.</p>

        <p>We received your request and will contact you shortly.</p>

        <p>Phone: 604-618-0023</p>
      `,
    });

    return NextResponse.json({
      success: true,
      emailResult,
    });

  } catch (error: any) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}