const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Admin = require("../../models/Admin");

//! User Login
router.post("/", async (req, res) => {
  try {
    const foundUser = await User.findOne({ username: req.body.username });
    if (!foundUser) {
      res.status(401).json({ msg: "User not found" });
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        console.log("foundUser", foundUser._id);
        req.session.role = "user";
        res.json(foundUser);
      } else {
        res.status(401).json({ msg: "Incorrect Password" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

//! Admin Login
router.post("/loginadmin", async (req, res) => {
  try {
    const foundUser = await Admin.findOne({ username: req.body.username });
    if (!foundUser) {
      res.status(401).json({ msg: "Access Denied" });
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        console.log("foundUser", foundUser._id);
        req.session.role = "admin";
        res.json(foundUser);
      } else {
        res.status(401).json({ msg: "Access Denied" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

//! Delete Session
router.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.json({ msg: "Logout success" });
  });
});

module.exports = router;
