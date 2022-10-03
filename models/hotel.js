const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  // currentDate: {
  //   required: true,
  //   type: Date,
  //   default: Date.now,
  // },
  // depatureDate: {
  //   required: true,
  //   type: Date,
  //   },
  //   adults: {
  //       type: Number,
  //       required: true,
  //   },
  //   children: {
  //       required: true,
  //       type: Number
  //   }
});

module.exports = mongoose.model("Hotel", hotelSchema);