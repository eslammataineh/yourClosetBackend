const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  const token = req.header("signtoken");
  if (!token) {
    return res.status(401).send("you are not logged ..");
  }

  try {
    const decodeToken = jwt.verify(token, "privetKey");
    req.Signinuser = decodeToken;
    next();
  } catch (err) {
    res.status(400).send("wrong token");
  }
};
