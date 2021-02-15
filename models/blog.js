const mongoose = require("mongoose");

let schema = mongoose.Schema;

let blog = new schema({
  blog: {
    type: String,
    required: true,
  },
  blogdate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blog);
