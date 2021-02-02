const app = require("express");
const router = app.Router();
let Cloth = require("../models/cloth");

const logged = require("../middleware/logged");
// display all clothes
router.get("/", (req, res) => {
  Cloth.find({})
    .populate({
      path: "CategoryId",
      model: "Category",
      select: "CategoryName",
    })
    .exec(function (error, clothes) {
      if (error) {
        res.status(500).send({ Error: "Couldn't get clothes" });
      } else {
        res.send(clothes);
      }
    });
});

router.post("/", (req, res) => {
  let NewCloth = new Cloth();
  NewCloth.name = req.body.name;
  NewCloth.price = req.body.price;
  NewCloth.AvailableItems = req.body.availableitems;
  NewCloth.CategoryId = req.body.category;
  NewCloth.pic = req.body.pic;
  NewCloth.description = req.body.description;

  NewCloth.save((err, SavedClothes) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "couldn't add the clothes" });
    } else {
      res.send(SavedClothes);
    }
  });
});

router.get("/:id", async (req, res) => {
  const findproduct = await Cloth.findById(req.params.id);

  if (!findproduct) {
    res.status(404).send("this product not in the database");
  }
  res.send(findproduct);
});

router.delete("/Delete/:ID", function (req, res) {
  let clothid = req.params.ID;

  Cloth.findOne({ _id: clothid }, function (err, cloth) {
    if (err) {
      res.status(500).send({ error: "Coudn't find " });
    } else {
      Cloth.deleteOne({ _id: clothid }, function (err, DeletedCloth) {
        if (err) {
          res.status(500).send({ error: "Coudn't delete " });
        } else {
          res.send(DeletedCloth);
        }
      });
    }
  });
});

module.exports = router;
