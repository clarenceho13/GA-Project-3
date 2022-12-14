//! Schema Template
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, minValue: 3, maxValue: 20, required: true },
    username: { type: String, unique: true, minValue: 3, required: true },
    password: { type: String, minValue: 6, required: true },
    hp: { type: Number, minValue: 8, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
