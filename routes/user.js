const app = require("express");
const router = app.Router();
const signin = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const admin = require("../middleware/admin");
const logged = require("../middleware/logged");
router.post("/signin", async (req, res) => {
  let Signinuser = await signin.findOne({ email: req.body.email });
  if (Signinuser) {
    return res.status(404).send(" signin email is already in database");
  }
  const saltpassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltpassword);

  Signinuser = new signin();
  Signinuser.username = req.body.username;
  Signinuser.email = req.body.email;
  Signinuser.password = securePassword;

  Signinuser.save((err, Savedaccount) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: "couldn't add account" });
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
    return res.status(404).send("invalid email or password");
  }

  const checkpassword = await bcrypt.compare(
    req.body.password,
    Signinuser.password
  );
  if (!checkpassword) {
    return res.status(404).send("invalid email or password");
  } else {
    const token = jwt.sign(
      { _id: Signinuser._id },
      process.env.secret_code_token,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      token,
      Signinuser,
    });
  }
});

/* router.post("/profile", logged, (req, res) => {
  res.status(500).json({ Signinuser: "profile" });
}); */
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
  signin.find({}, function (error, users) {
    if (error) {
      res.status(500).send({ Error: "Couldn't get email" });
    } else {
      res.send(users);
    }
  });
});
module.exports = router;
