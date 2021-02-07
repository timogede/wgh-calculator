import express from "express";
const router = express.Router();
import Fulldata from "../models/fulldataModel.js";

router.route("/create").post((req, res) => {
  const user_id = req.body.user_id;
  const everything = req.body.everything;
  const newFulldata = new Fulldata({
    user_id,
    everything,
  });
  newFulldata.save();
});

router.route("/fulldata").get((req, res) => {
  Fulldata.find().then((foundFulldata) => res.json(foundFulldata));
});

router.route("/delete-data").delete((req, res) => {
  Fulldata.deleteOne({ user_id: 111 })
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
