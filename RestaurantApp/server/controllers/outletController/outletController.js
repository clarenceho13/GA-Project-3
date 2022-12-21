const express = require("express");
const router = express.Router();
const Outlet = require("../../models/Outlet");
const seedOutlet = require("../outletSeed/outletSeed");

//! Seed User
router.get("/seed", seedOutlet);

//! Get all outlet data
router.get("/", async (req, res) => {
  try {
    const outlet = await Outlet.find().exec();
    res.status(200).json(outlet);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Get specific outlet data
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const outlet = await Outlet.findById(id).exec();
    res.status(200).json(outlet);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
