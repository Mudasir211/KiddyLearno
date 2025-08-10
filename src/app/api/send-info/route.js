import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SELLER_GMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"KiddyLearno" <${process.env.SELLER_GMAIL}>`,
      to: email,
      subject: "KiddyLearno: Full Info About Our Tutoring Plans 🎓",
      html: `
        <div style="font-family: 'Arial', sans-serif; background-color: #f0f9ff; padding: 24px; color: #333; border-radius: 8px;">
          <h2 style="color: #f97316;">🎉 Welcome to KiddyLearno!</h2>
          <p>We’re so excited to help your child thrive in school through fun and focused online tutoring.</p>

          <h3 style="color: #0ea5e9; margin-top: 24px;">💼 Affordable Monthly Packages</h3>
          <p>Tailored for KS1 to KS3 (Grades 1–8)</p>
          <ul style="line-height: 1.6; margin-bottom: 16px;">
            <li>📘 (12 sessions / month, 3 days a week) – 💲80–120
/month</li>
            <li>📙 (20 sessions / month, 5 days a week) – 💲120–160</li>
            <li>📗 Custom plans available on request</li>
          </ul>

          <p><strong>💳 Secure payments and monthly invoices included.</strong></p>

          <h3 style="color: #0ea5e9; margin-top: 24px;">📚 Subjects We Offer</h3>
          <ul style="line-height: 1.6;">
            <li>🔢 Math</li>
            <li>📖 English</li>
            <li>🔬 Science</li>
            <li>📘 NAPLAN</li>
            <li>📗International Readiness</li>
            <li>📙More KS3 Subjects</li>
            
          </ul>

          <h3 style="color: #0ea5e9; margin-top: 24px;">🧪 We Also Help With:</h3>
          <ul style="line-height: 1.6;">
            <li>✅ School Homework</li>
            <li>✅ Test Preparation</li>
            <li>✅ Concept Revision</li>
            <li>✅ Confidence Building</li>
          </ul>

          <div style="margin-top: 30px;">
           
            <a href="https://wa.me/+923705100729" style="display: inline-block; background-color: #25D366; color: white; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
              WhatsApp Us 
            </a>
          </div>

        

          <p>Looking forward to helping your child shine!</p>
          <p style="font-size: 14px; color: #888;">© KiddyLearno 2025 • Learn with Fun</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error sending info email:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
//  <a href="https://kiddylearno.com/book-trial" style="display: inline-block; background-color: #f97316; color: white; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; margin-right: 10px;">
//               Book Your Free Trial
//             </a>
