const app = require("express");
const router = app.Router();
let Dress = require("../models/dress");
const admin = require("../middleware/admin");
const logged = require("../middleware/logged");
// display all Dresses
router.get("/", (req, res) => {
  Dress.find({})
    .populate({
      path: "CategoryId",
      model: "Category",
      select: "CategoryName",
    })
    .exec(function (error, Dresses) {
      if (error) {
        res.status(500).send({ Error: "Couldn't get Dresses" });
      } else {
        res.send(Dresses);
      }
    });
});

// new Dresses
/* router.get("/new", (req, res) => {
  res.send("new Dresses");
}); */

router.post("/", (req, res) => {
  let NewDress = new Dress();
  NewDress.name = req.body.name;
  NewDress.price = req.body.price;
  NewDress.AvailableItems = req.body.availableitems;
  NewDress.CategoryId = req.body.category;
  NewDress.pic = req.body.pic;
  NewDress.description = req.body.description;

  NewDress.save((err, SavedDresses) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "couldn't add the Dresses" });
    } else {
      res.send(SavedDresses);
    }
  });
});

router.get("/:id", async (req, res) => {
  const findproduct = await Dress.findById(req.params.id);

  if (!findproduct) {
    res.status(404).send("this product not in the database");
  }
  res.send(findproduct);
});

router.delete("/Delete/:ID", function (req, res) {
  let dressid = req.params.ID;

  Dress.findOne({ _id: dressid }, function (err, dress) {
    if (err) {
      res.status(500).send({ error: "Coudn't find " });
    } else {
      Dress.deleteOne({ _id: dressid }, function (err, Deleteddress) {
        if (err) {
          res.status(500).send({ error: "Coudn't delete " });
        } else {
          res.send(Deleteddress);
        }
      });
    }
  });
});
module.exports = router;
