const mongoose = require("mongoose");

const quotaData = mongoose.Schema({
  fromLocation: {
    type: String,
    required: true,
  },
  toLocation: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  breadth: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("quotaData", quotaData);
