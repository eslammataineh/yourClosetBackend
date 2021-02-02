const mongoose = require("mongoose");
let objectID = mongoose.Schema.Types.ObjectId;
let schema = mongoose.Schema;

let hijab = new schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  AvailableItems: {
    type: Number,
  },
  pic: {
    type: String,
    required: true,
  },
  CategoryId: [{ type: objectID, ref: "Category" }],
});

module.exports = mongoose.model("Hijab", hijab);
