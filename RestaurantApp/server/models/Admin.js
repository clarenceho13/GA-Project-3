//! Schema Template
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, minValue: 3, required: true },
    password: { type: String, minValue: 6, required: true },
  },
  { timestamps: true }
);
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
