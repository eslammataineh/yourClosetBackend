const app = require("express");
const router = app.Router();
const signin = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const admin = require("../middleware/admin");
const logged = require("../middleware/logged");

router.post("/signin", async (req, res) => {
  let Signinuser = await signin.findOne({ email: req.body.email });
  if (Signinuser) {
    return res.status(404).send(" admin email is already in database");
  }
  const saltpassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltpassword);

  Signinuser = new signin();
  Signinuser.username = req.body.username;
  Signinuser.email = req.body.email;
  Signinuser.password = securePassword;
  Signinuser.isAdmin = true;

  Signinuser.save((err, Savedaccount) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "couldn't add account admin" });
    } else {
      const token = jwt.sign(
        { _id: Signinuser._id, isAdmin: this.isAdmin },
        "privetKey"
      );
      res.header("signtoken", token).send(Savedaccount);
    }
  });
});

router.post("/login", async (req, res) => {
  let Signinuser = await signin.findOne({ email: req.body.email });
  if (!Signinuser) {
    return res.status(404).send("invalid email or password admin");
  }

  const checkpassword = await bcrypt.compare(
    req.body.password,
    Signinuser.password
  );
  if (!checkpassword && !Signinuser.isAdmin) {
    return res.status(404).send("invalid email or password admin");
  } else {
    const token = jwt.sign({ _id: Signinuser._id }, "privetKey", {
      expiresIn: "1h",
    });
    res.header("signtoken", token).status(200).json({
      token,
      Signinuser,
    });
  }
});

/* 
router.post("/admin", async (req, res) => {
  const SigninuserAdmin = new signin();
  SigninuserAdmin.username = "eslam";
  SigninuserAdmin.email = "eslamm@gmail.com";
  SigninuserAdmin.password = "salma";
  SigninuserAdmin.isAdmin = true;

  SigninuserAdmin.save((err, Savedaccount) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "couldn't get admin account" });
    } else {
      const token = jwt.sign(
        { _id: SigninuserAdmin._id, isAdmin: true },
        "privetKey"
      );
      res.header("signtoken", token).send(Savedaccount);
    }
  });
});
*/
router.get("/login", function (req, res) {
  signin.find({ email: "eslam@gmail.com" }, function (error, admin) {
    if (error) {
      res.status(500).send({ Error: "Couldn't get admin email" });
    } else {
      res.send(admin);
    }
  });
});
module.exports = router;
