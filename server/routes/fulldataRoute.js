import express from "express";
const router = express.Router();
import Fulldata from "../models/fulldataModel.js";
import User from "../models/userModel.js";
import { auth } from "./verifyToken.js";

// create
// router.route("/create").post((req, res) => {
//   const user_id = req.body.user_id;
//   const everything = req.body.everything;
//   const newFulldata = new Fulldata({
//     user_id,
//     everything,
//   });
//   newFulldata.save();
// });

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
        console.log(error);
      } else {
        console.log(data);
      }
    }
  );
});

//delete
router.route("/delete-data").delete((req, res) => {
  Fulldata.deleteOne({ user_id: 222 })
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
  console.log("user with this auth token is: " + JSON.stringify(req.user));

  User.findOne({ _id: req.user._id }, (error, foundFulldata) => {
    console.log(foundFulldata);
  })
    .then((foundFulldata) => res.json(foundFulldata))
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

export default router;
