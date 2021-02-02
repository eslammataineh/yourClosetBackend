const app = require("express");
const router = app.Router();
let Category = require("../models/category");

router.post("/", function (req, res) {
  let NewCategory = new Category();
  NewCategory.CategoryName = req.body.name;

  NewCategory.save(function (err, SavedCategory) {
    if (err) {
      res.status(500).send({ error: "Couldn't add category" });
    } else {
      res.send(SavedCategory);
    }
  });
});

router.get("/", function (req, res) {
  Category.find({}, function (error, category) {
    if (error) {
      res.status(500).send({ Error: "Couldn't get category" });
    } else {
      res.send(category);
    }
  });
});
module.exports = router;
