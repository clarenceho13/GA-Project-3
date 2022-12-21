const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const seedUser = require("../userSeed/userSeed");

//! Seed User
router.get("/seed", seedUser);

//! Login User
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).exec();
  console.log(user);

  if (user === null) {
    return res.status(401).json({ msg: "User not found" });
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ msg: "Invalid password" });
  } else {
    return res.json(user);
  }
});

//! Get user data
router.get("/", async (req, res) => {
  try {
    const user = await User.find().exec();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Get specific user data
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).exec();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Create User
router.post("/", async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  try {
    const newuser = await User.create(req.body);
    res.status(201).json(newuser);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
