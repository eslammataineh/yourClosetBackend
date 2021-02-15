const app = require("express");
const router = app.Router();
let Blog = require("../models/blog");

router.get("/", (req, res) => {
  Blog.find({}, function (error, blog) {
    if (error) {
      res.status(500).send({ Error: "Couldn't get blog" });
    } else {
      res.send(blog);
    }
  });
});

router.post("/", (req, res) => {
  let NewBlog = new Blog();
  NewBlog.blog = req.body.blog;

  NewBlog.save((err, SavedBlog) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "couldn't add the blog" });
    } else {
      res.send(SavedBlog);
    }
  });
});

/* router.get("/:id", async (req, res) => {
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
}); */

module.exports = router;
