import express from "express";
const router = express.Router();
import User from "../models/userModel.js";
import {
  registerValidation,
  loginValidation,
} from "../models/validationModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

//register

router.route("/register").post(async (req, res) => {
  //Validate before creating user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if mail already exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("duplicate_mail");

  //Check if username already exists
  const usernameExist = await User.findOne({ name: req.body.name });
  if (usernameExist) return res.status(400).send("duplicate_username");

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (error) {
    res
      .status(400)
      .send(error + "something didnt work with saving the received user data");
  }
});

//Login

router.route("/login").post(async (req, res) => {
  //Validate before login sherlock
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email does not exist");

  //Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  //Create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: 300,
  });
  // const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

  res.header("auth-token", token).send();
});

export default router;
