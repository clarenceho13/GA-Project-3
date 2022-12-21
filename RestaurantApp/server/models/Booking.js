//! Schema Template
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userid: { type: String, unique: true },
    name: { type: String, minValue: 3, maxValue: 20, required: true },
    hp: { type: Number, minValue: 8, required: true },
    email: { type: String, required: true },
    pax: { type: Number, minValue: 1, maxValue: 8, required: true },
    date: { type: String },
    time: { type: String },
    // outlet: { type: String },
    outlet: { type: mongoose.Schema.Types.ObjectId, ref: "Outlet" },
    booked: { type: Boolean },
  },
  { timestamps: true }
);
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
