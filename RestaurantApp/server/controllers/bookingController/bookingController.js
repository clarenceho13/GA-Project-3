const express = require("express");
const Booking = require("../../models/Booking");
const seed = require("../bookingSeed/bookingSeed");
<<<<<<< HEAD
=======
const seedUser = require("../userSeed/userSeed");
const Register = require("../../models/Register");

>>>>>>> d5882b5611748f5d544478cbb42c3b8d65c987ee

const router = express.Router();

//! Seed data
router.get("/seed", seed);

//! Get data (reservations)
router.get("/", async (req, res) => {
  try {
    const booking = await Booking.find().exec();
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Get specific data (reservations)
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id).exec();
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
router.post("/", async (req, res) => {
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

<<<<<<< HEAD
=======

>>>>>>> d5882b5611748f5d544478cbb42c3b8d65c987ee
module.exports = router;
