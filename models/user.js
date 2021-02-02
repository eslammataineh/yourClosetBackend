const mongoose = require("mongoose");

let schema = mongoose.Schema;

let signin = new schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    required: true,
  },
});

/* function signinvalidate(user) {
  const schema = {
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  };
  return Joi.validate(user, schema);
} */
module.exports = mongoose.model("Signin", signin);
//exports.signinvalidate = signinvalidate;
