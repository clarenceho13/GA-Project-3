const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Register = require("../../models/Register");
const seedUser = require("../userSeed/userSeed");

//! Seed User
router.get("/seed", seedUser);

//! Get User data
router.get("/", async (req, res) => {
  try {
    const register = await Register.find().exec();
    res.status(200).json(register);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Get specific data (user)
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const register = await Register.findById(id).exec();
    res.status(200).json(register);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Login User
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await Register.findOne({ username }).exec();
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

//! Create User
router.post("/", async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  try {
    const user = await Register.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
