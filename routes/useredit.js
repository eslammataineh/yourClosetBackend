/* const app = require("express");
const router = app.Router();
let Useredit = require("../models/useredit");

router.post("/", function (req, res) {
  let Newlength = new Useredit();
  Newlength.customlength = req.body.Newlength;

  Newlength.save(function (err, SavedLength) {
    if (err) {
      res.status(500).send({ error: "Couldn't add any new length" });
    } else {
      res.send(SavedLength);
    }
  });
});

router.get("/", function (req, res) {
  Useredit.find({}, function (error, size) {
    if (error) {
      res.status(500).send({ Error: "Couldn't get sizes" });
    } else {
      res.send(size);
    }
  });
});
module.exports = router;
 */
