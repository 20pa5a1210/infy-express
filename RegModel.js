const mongoose = require("mongoose");

const registerUser = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  mailid: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("registerUser", registerUser);
