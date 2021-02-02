/* const app = require("express");
const router = app.Router();
let Cart = require("../models/cart");
//const admin = require("../middleware/admin");
const logged = require("../middleware/logged");

router.post("/", function (req, res) {
  Cart.findOne({ user: req.Signinuser._id }) // if there is a cart for the same user no need to create another one just update it
    .exec((error, cart) => {
      if (error) return res.status(400).send(err);
      if (cart) {
        // the cart is already exist just update it by quantity

        const product = req.body.cartItems.product;
        const item = cart.cartItems.find((c) => c.product == product);

        if (item) {
          Cart.findOneAndUpdate(
            { user: req.Signinuser._id, "cartItems.product": product },
            {
              $set: {
                "cartItems.$": {
                  ...req.body.cartItems,
                  quantity: item.quantity + req.body.cartItems.quantity,
                },
              },
            }
          ).exec((error, carts) => {
            if (error) return res.status(400).send(err);
            if (carts) {
              return res.status(200).json({ cart: carts });
            }
          });
        } else {
          Cart.findOneAndUpdate(
            { user: req.Signinuser._id },
            {
              $push: {
                cartItems: req.body.cartItems,
              },
            }
          ).exec((error, carts) => {
            if (error) return res.status(400).send(err);
            if (carts) {
              return res.status(200).json({ cart: carts });
            }
          });
        }
      } else {
        // there is no cart then create one
        let NewCart = new Cart();
        NewCart.user = req.Signinuser._id;
        NewCart.cartItems = [req.body.cartItems];

        NewCart.save(function (err, SavedCart) {
          if (err) {
            res.status(500).send({ error: "Couldn't add Cart" });
          } else {
            res.json({ SavedCart });
          }
        });
      }
    });
});

module.exports = router;
 */
