const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Admin = require("../../models/Admin");
const seedAdmin = require("../adminSeed/adminSeed");

//! Seed User
router.get("/seed", seedAdmin);

//! Get Data (Admin)
router.get("/", async (req, res) => {
  try {
    const admin = await Admin.find().exec();
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Login User
router.post("/login", async (req, res) => {
  console.log("body", req.body);
  const { username, password } = req.body;
  console.log("username", username);
  const user = await Admin.findOne({ username }).exec();
  console.log("user", user);

  if (user === null) {
    return res.status(401).json({ msg: "User not found" });
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ msg: "Invalid password" });
  } else {
    return res.json(user);
  }
});

module.exports = router;
