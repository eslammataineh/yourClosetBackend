const mongoose = require("mongoose");
let objectId = mongoose.Schema.Types.ObjectId;
let schema = mongoose.Schema;

let dress = new schema({
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
  CategoryId: [{ type: objectId, ref: "Category" }],
});

module.exports = mongoose.model("Dress", dress);
