//! Schema Template
const mongoose = require("mongoose");
const xxxSchema = new mongoose.Schema(
  {
    name: { type: String, minLength: 3 },
    color: String,
    eat: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const Xxx = mongoose.model("Xxx", xxxSchema);
module.exports = Xxx;