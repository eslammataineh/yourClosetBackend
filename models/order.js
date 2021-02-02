const mongoose = require("mongoose");
let objectId = mongoose.Schema.Types.ObjectId;
let schema = mongoose.Schema;

let order = new schema({
  orderDate: {
    type: Date,
    default: Date.now,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
  sizename: {
    type: String,
    required: true,
  },
  /*  NewLength: {
    type: String,
    required: true,
  } */
  clothes: [{ type: objectId, ref: "Cloth" }],
  user: [{ type: objectId, ref: "Signin" }],
});

module.exports = mongoose.model("Order", order);
