const app = require("express");
const router = app.Router();
let Order = require("../models/order");

router.post("/", function (req, res) {
  let NewOrder = new Order();
  NewOrder.PhoneNumber = req.body.phone;
  NewOrder.clothes = req.body.clothes;
  NewOrder.sizename = req.body.selectsize;
  NewOrder.user = req.body.user;

  NewOrder.save(function (err, SavedOrder) {
    if (err) {
      res.status(500).send({ err });
    } else {
      res.send(SavedOrder);
    }
  });
});

router.get("/", (req, res) => {
  Order.find({}, function (error, order) {
    if (error) {
      res.status(500).send({ Error: "Couldn't get orders" });
    } else {
      res.send(order);
    }
  });
});
module.exports = router;
