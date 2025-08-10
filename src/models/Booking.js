// models/Booking.js
import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    parentName: String,
    childName: String,
    grade: String,
    subject: String,
    preferredDateTime: String,
    email: { type: String, required: true },
    phone: String,
    whatsapp: String,
    address: String,
    notes: String,
    plan: String,
  },
  { timestamps: true, collection: "kiddylearno" } // Force collection name
);

export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
