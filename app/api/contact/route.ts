import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message, captcha } = body;

    // -----------------------------------
    // 1. CAPTCHA VERIFICATION (IMPORTANT)
    // -----------------------------------
    const verifyCaptcha = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET}&response=${captcha}`,
      }
    );

    const captchaData = await verifyCaptcha.json();

    if (!captchaData.success) {
      return NextResponse.json(
        { success: false, error: "Captcha failed" },
        { status: 400 }
      );
    }

    // -----------------------------------
    // 2. SEND EMAIL TO YOU (LEAD)
    // -----------------------------------
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

    // -----------------------------------
    // 3. AUTO REPLY TO CUSTOMER
    // -----------------------------------
    await resend.emails.send({
      from: "ProBest Painting <onboarding@resend.dev>",
      to: email,
      subject: "We received your request - ProBest Painting",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>Thanks ${name},</h2>

          <p>We’ve received your request and will get back to you shortly.</p>

          <p><b>What happens next:</b></p>
          <ul>
            <li>We review your project details</li>
            <li>We contact you within 24 hours</li>
            <li>We may schedule a quote visit</li>
          </ul>

          <p>If urgent, call us at 604-618-0023.</p>

          <br/>
          <p>– ProBest Painting Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}