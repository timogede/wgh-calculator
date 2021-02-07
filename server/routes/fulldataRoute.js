import express from "express";
const router = express.Router();
import Fulldata from "../models/fulldataModel.js";

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
  Fulldata.findOneAndUpdate(
    { user_id: 222 },
    { user_id: 666, everything: [{}] },
    { upsert: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
  );
});

//fetch
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
export default router;
