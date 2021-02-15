const mongoose = require("mongoose");

let schema = mongoose.Schema;

let contact = new schema({
  name: {
    type: String,
    required: true,
  },
  contactemail: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  messagedate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", contact);
