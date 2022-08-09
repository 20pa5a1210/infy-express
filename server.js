const express = require("express");
const mongoose = require("mongoose");
const registerUser = require("./RegModel");
const quotaData = require("./QuotaSchema");
const jwt = require("jsonwebtoken");
const LoginMiddleware = require("./LoginMiddleware");
const cors = require("cors");
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.nkarxtv.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.post("/register", async (req, res) => {
  try {
    const { username, mailid, number, password, confirmpassword } = req.body;
    let exist = await registerUser.findOne({ mailid: mailid });
    if (exist) {
      return res.status(400).send("User Already Exist");
    }
    if (password !== confirmpassword) {
      return res.status(400).send("Password MisMacth");
    }
    let Newuser = new registerUser({
      username,
      mailid,
      number,
      password,
      confirmpassword,
    });
    await Newuser.save();
    res.status(200).send("Register Sucessfully");
  } catch (error) {
    console.log("error", error);
  }
});
app.post("/quota", async (req, res) => {
  try {
    const { fromLocation, toLocation, weight, length, breadth, height } =
      req.body;
    let quota = new quotaData({
      fromLocation,
      toLocation,
      weight,
      length,
      breadth,
      height,
    });
    await quota.save();
    res.status(200).send("Quota Succesfully");
  } catch (error) {
    console.log(error);
    res.send(404).send("error nothing ");
  }
});
// app.get("/data", async (req, res) => {
//   try {
//     let users = await registerUser.find();
//     res.json(users);
//   } catch (error) {}
// });
app.post("/login", async (req, res) => {
  try {
    const { mailid, password } = req.body;
    let exist = await registerUser.findOne({ mailid: mailid });
    if (!exist) {
      return res.status(400).send("user no found");
    }
    if (exist.password !== password) {
      return res.status(400).send("invalid");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(payload, "jwtSecure", { expiresIn: 3600000 }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("server error");
  }
});

app.get("/myprofile", LoginMiddleware, async (req, res) => {
  try {
    let exist = await registerUser.findById(req.user.id);
    if (!exist) {
      return res.status(400).send("user not found");
    }
    res.json(exist);
  } catch (error) {
    console.log(error);
    return res.status(500).send("server Error");
  }
});
app.listen(8080, () => {
  console.log("Server Running");
});
