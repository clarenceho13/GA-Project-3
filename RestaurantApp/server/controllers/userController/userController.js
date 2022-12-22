const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");
const seedUser = require("../userSeed/userSeed");
const seedAdmin = require("../adminSeed/adminSeed");
const Admin = require("../../models/Admin");

const checkAdminLogin = (req, res, next) => {
  if (req.session.login !== "admin") {
    res.status(401).json({ msg: "Not Admin! Access Denied" });
  } else {
    next();
  }
};

const checkUserLogin = (req, res, next) => {
  if (req.session.login !== "user") {
    res.status(401).json({ msg: "Please Login" });
  } else {
    next();
  }
};

//! Seed User
router.get("/seed", seedUser);

//! Seed Admin
router.get("/seedAdmin", seedAdmin);

//! Login User
router.post("/login", [checkUserLogin], async (req, res) => {
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

//! Login Admin
router.post("/loginadmin", [checkAdminLogin], async (req, res) => {
  console.log("body", req.body);
  const { username, password } = req.body;
  console.log("username", username);
  const user = await Admin.findOne({ username }).exec();
  console.log("user", user);

  if (user === null) {
    return res.status(401).json({ msg: "Access Denied" });
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ msg: "Invalid password" });
  } else {
    return res.json(user);
  }
});

//! Get User data
router.get("/user", async (req, res) => {
  try {
    const user = await User.find().exec();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Get Admin Data
router.get("/admin", async (req, res) => {
  try {
    const admin = await Admin.find().exec();
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Get Specific User Data
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).exec();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Create New User
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
