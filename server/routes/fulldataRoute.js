import express from "express";
const router = express.Router();
import Fulldata from "../models/fulldataModel.js";
import User from "../models/userModel.js";
import { auth } from "./verifyToken.js";
import multer from "multer";

// File upload folder
const DIR = "./../client/public/uploads/images";

//define storage for the images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, "profileimage-" + Date.now() + fileName);
  },
});

//upload parameters for multer
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

// upload profileimage
router.route("/profileimage").post(upload.single("image"), async (req, res) => {
  const profileImage = req.file.filename;
  console.log("req file" + profileImage);

  User.findOneAndUpdate(
    {
      _id: "6057c1d32af63448c8ae0b58",
    },
    {
      profilephoto: profileImage,
    },
    {
      upsert: true,
    }
  )
    .then(res.send({ imageUrl: profileImage }))
    .catch((error) => {
      res.status(400).send(error + "upload didnt work on server");
    });
});

// update
router.route("/update").post(auth, (req, res) => {
  const everything = req.body.everything;
  console.log("everything is:" + JSON.stringify(everything));
  User.findOneAndUpdate(
    {
      _id: req.user._id,
    },
    {
      everything: everything,
    },
    {
      upsert: true,
    },
    (error, data) => {
      if (error) {
        console.log("the error: " + error);
      } else {
        console.log("the data: " + data);
      }
    }
  );
});

//delete
router.route("/delete-data").delete(auth, (req, res) => {
  console.log("going to delete: " + JSON.stringify(req.user));
  console.log(req.user._id);
  const userId = req.user._id;

  User.deleteOne({ _id: userId })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

//fetch with auth
router.route("/fulldata").get(auth, (req, res) => {
  // console.log("user with this auth token is: " + JSON.stringify(req.user));

  User.findOne({ _id: req.user._id }, (error, foundFulldata) => {
    // console.log(foundFulldata);
  })
    .then((foundFulldata) => res.json(foundFulldata))
    .catch((error) => {
      // console.log(error);
      res.status(400).json({
        error: error,
      });
    });
});

export default router;
