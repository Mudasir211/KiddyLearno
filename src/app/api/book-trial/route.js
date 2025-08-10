// app/api/book-trial/route.js
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Booking from "@/models/Booking";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();
    const { email } = data;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Check if trial already booked
    const existing = await Booking.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "Trial already booked" },
        { status: 400 }
      );
    }

    // Save booking to MongoDB
    const booking = await Booking.create(data);

    // Send email to seller's Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SELLER_GMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SELLER_GMAIL,
      to: process.env.SELLER_GMAIL,
      subject: "New Free Trial Booking",
      text: `
      New trial booking received:
      Parent: ${data.parentName}
      Child: ${data.childName}
      Grade: ${data.grade}
      Subject: ${data.subject}
      Preferred Date & Time: ${data.preferredDateTime}
      Email: ${data.email}
      Phone: ${data.phone}
      WhatsApp: ${data.whatsapp}
      Country: ${data.address}
      Plan : ${data.plan}
      Notes: ${data.notes}
      
      
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, booking });
  } catch (err) {
    console.error("Booking error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
