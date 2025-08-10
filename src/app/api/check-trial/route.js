// app/api/check-trial/route.js
import connectDB from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return new Response(
      JSON.stringify({ success: false, error: "Email is required" }),
      { status: 400 }
    );
  }

  try {
    await connectDB();

    const existing = await Booking.findOne({ email });

    return new Response(
      JSON.stringify({ success: true, alreadyBooked: !!existing }),
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ Error checking trial:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Server error" }),
      { status: 500 }
    );
  }
}
