const app = require("express");
const router = app.Router();
let Pants = require("../models/pants");
const admin = require("../middleware/admin");
const logged = require("../middleware/logged");
// display all pants
router.get("/", (req, res) => {
  Pants.find({})
    .populate({
      path: "CategoryId",
      model: "Category",
      select: "CategoryName",
    })
    .exec(function (error, pants) {
      if (error) {
        res.status(500).send({ Error: "Couldn't get pants" });
      } else {
        res.send(pants);
      }
    });
});

router.post("/", (req, res) => {
  let Newpants = new Pants();
  Newpants.name = req.body.name;
  Newpants.price = req.body.price;
  Newpants.AvailableItems = req.body.availableitems;
  Newpants.CategoryId = req.body.category;
  Newpants.pic = req.body.pic;
  Newpants.description = req.body.description;

  Newpants.save((err, Savedpants) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "couldn't add the pants" });
    } else {
      res.send(Savedpants);
    }
  });
});

router.get("/:id", async (req, res) => {
  const findproduct = await Pants.findById(req.params.id);

  if (!findproduct) {
    res.status(404).send("this product not in the database");
  }
  res.send(findproduct);
});

router.delete("/Delete/:ID", function (req, res) {
  let Pantsid = req.params.ID;

  Pants.findOne({ _id: Pantsid }, function (err, pant) {
    if (err) {
      res.status(500).send({ error: "Coudn't find " });
    } else {
      Pants.deleteOne({ _id: Pantsid }, function (err, Deletedpants) {
        if (err) {
          res.status(500).send({ error: "Coudn't delete " });
        } else {
          res.send(Deletedpants);
        }
      });
    }
  });
});
module.exports = router;
