const app = require("express");
const router = app.Router();
let Hijab = require("../models/hijab");
const admin = require("../middleware/admin");
const logged = require("../middleware/logged");
// display all Hijabes
router.get("/", (req, res) => {
  Hijab.find({}, function (error, hijab) {
    if (error) {
      res.status(500).send({ Error: "Couldn't get hijab" });
    } else {
      res.send(hijab);
    }
  });
});

router.post("/", (req, res) => {
  let NewHijab = new Hijab();
  NewHijab.name = req.body.name;
  NewHijab.price = req.body.price;
  NewHijab.AvailableItems = req.body.availableitems;
  NewHijab.CategoryId = req.body.category;
  NewHijab.pic = req.body.pic;
  NewHijab.description = req.body.description;
  NewHijab.newlength = req.body.newlength;

  NewHijab.save((err, SavedHijabes) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "couldn't add the Hijabes" });
    } else {
      res.send(SavedHijabes);
    }
  });
});

router.get("/:id", async (req, res) => {
  const findproduct = await Hijab.findById(req.params.id);

  if (!findproduct) {
    res.status(404).send("this product not in the database");
  }
  res.send(findproduct);
});

router.delete("/Delete/:ID", function (req, res) {
  let hijabID = req.params.ID;

  Hijab.findOne({ _id: hijabID }, function (err, hijab) {
    if (err) {
      res.status(500).send({ error: "Coudn't find " });
    } else {
      Hijab.deleteOne({ _id: hijabID }, function (err, DeletedHijab) {
        if (err) {
          res.status(500).send({ error: "Coudn't delete " });
        } else {
          res.send(DeletedHijab);
        }
      });
    }
  });
});

module.exports = router;
