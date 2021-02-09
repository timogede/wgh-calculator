import express from "express";
const router = express.Router();
import Fulldata from "../models/fulldataModel.js";
import verify from "./verifyToken.js";

// create
router.route("/create").post((req, res) => {
  const user_id = req.body.user_id;
  const everything = req.body.everything;
  const newFulldata = new Fulldata({
    user_id,
    everything,
  });
  newFulldata.save();
});

// update
router.route("/update").post((req, res) => {
  const user_id = req.body.user_id;
  const everything = req.body.everything;
  Fulldata.findOneAndUpdate(
    {
      user_id: user_id,
    },
    {
      user_id: user_id,
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

//fetch with api call .fetch()
router.route("/fulldata").get((req, res) => {
  Fulldata.find().then((foundFulldata) => res.json(foundFulldata));
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

//fetch new?
// router.route("/fulldata/:id").get((req, res) => {
//   const user_id = req.params.id;

//   console.log(user_id);

//   Fulldata.findOne({ user_id: user_id }, (error, foundFulldata) => {
//     console.log(foundFulldata);
//   })
//     .then((foundFulldata) => res.json(foundFulldata))
//     .catch((error) => {
//       res.status(400).json({
//         error: error,
//       });
//     });
// });

//fetch with auth
router.route("/fulldata/:id").get((req, res) => {
  const user_id = req.params.id;

  console.log(user_id);

  Fulldata.findOne({ user_id: user_id }, (error, foundFulldata) => {
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
