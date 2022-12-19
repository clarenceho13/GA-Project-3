//! Schema Template
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, minValue: 3, maxValue: 20, required: true },
    hp: { type: Number, minValue: 8, required: true },
    email: { type: String, required: true, unique: true },
    pax: { type: Number, minValue: 1, required: true },
    date: String,
    time: String,
    booked: { type: Boolean },
  },
  { timestamps: true }
);
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
