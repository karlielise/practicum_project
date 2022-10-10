const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hotel = require("./routes/hotels");

mongoose.connect("mongodb://0.0.0.0/bookings");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("hotels/index");
});

app.use("/hotels", hotel)

app.listen(3000, console.log("Listening..."));
