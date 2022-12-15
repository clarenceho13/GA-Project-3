const express= require("express");
//const Booking = require ("../../models/Booking"); //imported Booking Schema from model
const seed = require ("../bookingSeed/bookingSeed"); //imported booking seed

//middle ware for router??
const router = express.Router();

router.get("/seed", seed);


module.exports = router;