const express = require("express");
const Booking = require("../../models/Booking");
const seed = require("../bookingSeed/bookingSeed");

const router = express.Router();

//! Seed booking data
router.get("/seed", seed);

//! Get all reservations data
router.get("/", async (req, res) => {
  try {
    const booking = await Booking.find().populate("outlet");
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
});

// //! Get specific booking data (edit table)
router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id).exec();
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Get specific booking data (booking table)
router.get("/:userid", async (req, res) => {
  const { userid } = req.params;
  try {
    // const booking = await Booking.find({ userid }).exec();
    // console.log("booking", booking);
    const booking = await Booking.find({ userid }).populate("outlet");
    console.log("booking", booking);
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
router.post("/:userid", async (req, res) => {
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
