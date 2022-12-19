//! IMPORT
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
// const session = require("express-session");
const bookingController = require("./controllers/bookingController/bookingController");

//! CONFIGURATION AND CONNECTION
const app = express();
const PORT = process.env.PORT ?? 3000;
const MONGO_URI = process.env.MONGO_URI;

console.log("Mongo_URI", MONGO_URI);
mongoose.set("strictQuery", false);
mongoose.set("runValidators", true);
mongoose.set("debug", true);
mongoose.connect(MONGO_URI);

//! MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("../client/dist"));
//This is the url set to test in insomnia
app.use("/api/booking", bookingController);

//! TESTING
app.get("/api/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

//! SAFETY NET
app.get("*", (req, res) =>
  res.sendFile(path.resolve("../client/dist", "index.html"))
);

//! LISTENER
mongoose.connection.once("open", () => {
  console.log(`connected to mongoose`);
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
