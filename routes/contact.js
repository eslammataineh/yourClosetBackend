const app = require("express");
const router = app.Router();
let Contact = require("../models/contact");

router.get("/", (req, res) => {
  Contact.find({}, function (error, contact) {
    if (error) {
      res.status(500).send({ Error: "Couldn't get Contact message" });
    } else {
      res.send(contact);
    }
  });
});

router.post("/", (req, res) => {
  let NewContact = new Contact();
  NewContact.name = req.body.name;
  NewContact.contactemail = req.body.contactemail;
  NewContact.message = req.body.message;

  NewContact.save((err, SavedContact) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "couldn't add the Contact message" });
    } else {
      res.send(SavedContact);
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
