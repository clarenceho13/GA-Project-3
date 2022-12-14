//! IMPORT
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); 
const path = require("path");
const session = require("express-session"); 
//? xxxController = require("filelocation")

//! CONFIGURATION AND CONNECTION
const app = express();
const PORT = process.env.PORT ?? 3000;
const MONGO_URI = process.env.MONGO_URI;
mongoose.set("strictQuery", false);
mongoose.set("runValidators", true);
mongoose.set("debug", true);
mongoose.connect(MONGO_URI);

//! MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("../client/dist"));
//? app.use("/path", xxxController);

//! TESTING
app.get("/api", (req, res) => {
res.json({ msg: "Hello World!" });
});

//SAFETY NET!!
app.get("*", (req, res) => 
res.sendFile(path.resolve("../client/dist", "index.html")
));

//! LISTENER
mongoose.connection.once("open", () => {
  console.log(`connected to mongoose`);
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});