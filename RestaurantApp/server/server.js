//! IMPORT
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const bookingController = require("./controllers/bookingController/bookingController");
const userController = require("../server/controllers/userController/userController");
const outletController = require("../server/controllers/outletController/outletController");
const session = require("express-session");
const sessionController = require("../server/controllers/sessionController/sessionController");

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

//! SESSION
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    // cookie: { secure: true },
  })
);

//! ROUTES
app.use("/api/booking", bookingController);
app.use("/api/user", userController);
app.use("/api/outlet", outletController);
app.use("/api/session", sessionController);

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
