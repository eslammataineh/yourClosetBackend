/* const mongoose = require("mongoose");
let objectId = mongoose.Schema.Types.ObjectId;
let schema = mongoose.Schema;

let cart = new schema({
  user: { type: objectId, ref: "Signin", required: true },
  cartItems: [
    {
      product: [{ type: objectId, ref: "Cloth", required: true }],
      quantity: { type: Number, default: 1 },
      price: { type: Number, required: true, required: true },
    },
  ],
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cart", cart);
 */
