const express = require("express");
const Booking = require("../../models/Booking");
const Register = require("../../models/Register");
const seed = require("../bookingSeed/bookingSeed");

const router = express.Router();

//! Seed data
router.get("/seed", seed);

// //! Get specific data (user)
// router.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const register = await Register.findById(id).exec();
//     res.status(200).json(register);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

//! Get data (reservations)
router.get("/", async (req, res) => {
  try {
    const booking = await Booking.find().exec();
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Delete data
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByIdAndDelete(id);
    res.status(200).json(booking);
  } catch (error) {
    res.status(404).json({ error });
  }
});

//! Create data
router.post("/:id", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error });
  }
});

//! Update data
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
