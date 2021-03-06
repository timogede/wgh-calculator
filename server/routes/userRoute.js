import express from "express";
const router = express.Router();
import User from "../models/userModel.js";
import {
  registerValidation,
  loginValidation,
} from "../models/validationModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import dotenv from "dotenv";
import mongoose from "mongoose";
import randomstring from "randomstring";
dotenv.config();
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  })
);
//register

router.route("/register").post(async (req, res) => {
  //Validate before creating user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send("here " + error.details[0].message);

  //Check if mail already exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("duplicate_mail");

  //Check if username already exists
  const usernameExist = await User.findOne({ name: req.body.name });
  if (usernameExist) return res.status(400).send("duplicate_username");

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Hash token
  const token = randomstring.generate();

  //Create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    everything: req.body.everything,
    profilephoto: "tigerhead.jpg",
    token: token,
    activated: false,
  });
  try {
    let activationLink = `${process.env.BASE_URL}bestaetigen/${user._id}/${token}`;
    const savedUser = await user.save().then((user) => {
      transporter.sendMail({
        to: user.email,
        from: "timo@handicap.report",
        subject: "E-Mail Bestätigung handicap.report",
        html: `<h1>Hallo und willkommen bei handicap.report</h1><br/><p>Um deine E-Mail zu bestätigen klicke einfach auf den Link: <a href="${activationLink}">E-Mail bestätigen</a>`,
      });
    });
    res.status(200).send("register_sucess");
  } catch (error) {
    res
      .status(400)
      .send(error + "something didnt work with saving the received user data");
  }
});

//Verify
var counter = 0;
router.route("/verify/:userID/:token").get(async (req, res) => {
  const userID = req.params.userID;
  const token = req.params.token;
  var isValid = mongoose.Types.ObjectId.isValid(userID); //true
  console.log("COUNTER: " + counter);
  counter++;
  //not a object id
  if (!isValid) {
    return res.status(400).send("novalid_objectid");
  }
  //user not found
  const user = await User.findOne({ _id: userID });
  if (!user) return res.status(400).send("missing_userid");

  //token wrong
  const tokenTrue = await User.findOne({ _id: userID });
  if (tokenTrue.token !== token) {
    return res.status(400).send("token is not correct hacker!");
  }
  //user already activated
  const alreadyActivated = await User.findOne({ _id: userID });
  if (alreadyActivated.activated)
    return res.status(400).send("user already activated");

  //activate!
  User.findOneAndUpdate(
    {
      _id: userID,
    },
    {
      activated: true,
    }
  )
    .then(() => res.status(200).send("all good!"))
    .catch((error) => {
      console.log("???? " + error);
      res.status(400).json({
        error: error,
      });
    });
});

//Login

router.route("/login").post(async (req, res) => {
  //Validate before login sherlock
  const { error } = loginValidation(req.body);
  if (error)
    return res.status(400).send("this error:" + error.details[0].message);

  //Check if email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("error_mail");

  //Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("error_password");

  //User Mail is not activated
  const mail = await User.findOne({ email: req.body.email });
  if (!mail.activated) return res.status(400).send("mail_not_active");

  //Create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: 7200,
  });
  // const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  res.status(200).json({
    "auth-token": token,
    userdata: {
      username: user.name,
      email: user.email,
      scoredata: user.everything,
      profilephoto: user.profilephoto,
    },
  });
});

//forgot password

router.route("/forgot-password").post(async (req, res) => {
  const reqMail = req.body.email;

  //mail not found
  const userNotFoundObject = await User.findOne({ email: reqMail });
  const userNotFound = JSON.stringify(userNotFoundObject);
  // console.log(userNotFoundObject);
  // console.log(userNotFound);
  if (!userNotFoundObject) return res.status(400).send("mail_not_found");

  //password reset send
  User.findOne({ email: reqMail })
    .then(() => {
      let resetLink = `${process.env.BASE_URL}user/passwort-zuruecksetzen/${userNotFoundObject._id}/${userNotFoundObject.token}`;
      transporter.sendMail({
        to: reqMail,
        from: "timo@handicap.report",
        subject: "Passwort zurücksetzen",
        html: `<h1>Du möchtest dein Passwort zurücksetzen?</h1><br/><p>Klicke einfach auf den <a href="${resetLink}">Link</a> um dein Passwort zurückzusetzen.`,
      });
      res.status(200).send("forgotmail_sucess");
    })

    .catch((error) => {
      console.log("forgot-password-error: " + error);
      res.status(400).json({
        error: error,
      });
    });
});

//forgot password

router.route("/reset-password/:userID/:token").post(async (req, res) => {
  const reqPassword = req.body.password;
  const userID = req.params.userID;
  const token = req.params.token;
  console.log(reqPassword);
  console.log(userID);
  console.log(token);
  var isValid = mongoose.Types.ObjectId.isValid(userID); //true
  //not a object id
  if (!isValid) {
    return res.status(400).send("novalid_objectid");
  }
  //user not found
  const user = await User.findOne({ _id: userID });
  if (!user) return res.status(400).send("missing_userid");

  //token wrong
  const tokenTrue = await User.findOne({ _id: userID });
  if (tokenTrue.token !== token) {
    return res.status(400).send("token is not correct hacker!");
  }
  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(reqPassword, salt);

  //pw changed
  User.findOneAndUpdate(
    {
      _id: userID,
    },
    {
      password: hashedPassword,
    }
  )
    .then(() => res.status(200).send("password_reset_sucess"))
    .catch((error) => {
      console.log("pw_reset_error: " + error);
      res.status(400).json({
        error: error,
      });
    });
});

export default router;
