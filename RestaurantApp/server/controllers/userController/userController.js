const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
// const session = require("express-session");
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
  console.log("body", req.body);
  const { username, password } = req.body;
  console.log("username", username);
  const user = await Register.findOne({ username }).exec();
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

//   req.session.username = username;
// const sessionId = "88";
// specialObj[sessionId] = { userid };

// res.cookie("special", sessionId);

//   return res.json({ msg: "Valid " });
// });

// let specialObj = "";

// router.get("/secret", (req, res) => {
// const sessionId = req.cookies.special;
//   const username = req.session.username;
//   console.log("username", username);
//   if (username) {
//     return res.json({ msg: "GA is the best" });
//   }
//   return res.status(401).json({ msg: "No entry" });
// });
// const saltRounds = 10;
// const saltRounds = 10;
// const myPlaintextPassword = "123";
// const someOtherPlaintextPassword = "not_bacon";
// const hashedPassword =
//   "$2b$10$/yg.57XpVlUOSvZnZa.L0eJITf7kzy26UdUl2PHvwmmyfE9bbO3XO";

//   bcrypt.compare(myPlaintextPassword, hashedPassword, function (err, result) {
//     return res.json({ result });

// bcrypt.compare(
//   someOtherPlaintextPassword,
//   hashedPassword,
//   function (err, result) {
//     return res.json({ result });
//   bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
//     console.log("hash", hash);
//     res.json({ hash });
//   }
// );
module.exports = router;
