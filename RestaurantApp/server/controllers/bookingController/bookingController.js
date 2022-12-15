const express = require("express");
const Booking = require("../../models/Booking");
const seed = require("../bookingSeed/bookingSeed");

const router = express.Router();

//! Seed data
router.get("/seed", seed);

//! Get data
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
router.post("/", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
