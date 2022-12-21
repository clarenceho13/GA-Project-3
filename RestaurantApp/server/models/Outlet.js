//! Schema Template
const mongoose = require("mongoose");

const outletSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    openinghours: { type: String },
    hp: { type: String },
    email: { type: String },
  },

  { timestamps: true }
);
const Outlet = mongoose.model("Outlet", outletSchema);

module.exports = Outlet;
