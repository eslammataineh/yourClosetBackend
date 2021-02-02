const express = require("express");
let cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    createParentPath: true,
  })
);
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" })); // becouse I will upload files and I need big limit for that.
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// to connect server to server, that let proxi knew this wibsite, * means all websites or servers so you can but your website or your id
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

const db = mongoose.connect(process.env.DB_connect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);
app.use(cors());

//let Cart = require("./routes/cart");
//app.use("/cart", Cart);
let Clothes = require("./routes/clothes");
let Categorey = require("./routes/category");
let Signin = require("./routes/user");
let Admin = require("./routes/admin");
let Pants = require("./routes/pants");
let Dress = require("./routes/dresses");
//let Useredit = require("./routes/useredit");
let Order = require("./routes/order");
let Hijab = require("./routes/hijab");

app.use("/clothes", Clothes);
app.use("/category", Categorey);
app.use("/", Signin);
app.use("/admin", Admin);
app.use("/pants", Pants);
app.use("/dresses", Dress);
//app.use("/useredit", Useredit);
app.use("/order", Order);
app.use("/hijab", Hijab);

app.post("/UploadPic", function (req, res) {
  try {
    if (!req.files.file) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let Pic = req.files.file;

      //Use the mv() method to place the file in upload directory (i.e. "uploads")..... if there is a new pic with the same name save it like this and don't overdrive it.
      let newName =
        Date.now().toString() + Pic.name.substr(Pic.name.length - 5);

      console.log(newName);
      Pic.mv("./uploads/" + newName);

      //send response
      res.send({
        status: true,
        message: "File is uploaded",
        data: {
          name: newName,
          mimetype: Pic.mimetype,
          size: Pic.size,
        },
      });
      console.log("done");
    }
  } catch (err) {
    console.log(err);

    res.status(500).send(err);
  }
});

// to let express know that uploads is not a sevice it's a file.
app.use("/uploads", express.static(process.cwd() + "/uploads"));
app.listen(process.env.PORT, console.log("server is running"));
