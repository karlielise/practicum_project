const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  currentDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  DepartureDate: {
    type: Date,
    required: true,
  },
  Adults: {
    type: Number,
    required: true,
  },
  Children: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
