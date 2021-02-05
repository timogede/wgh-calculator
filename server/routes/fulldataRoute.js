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
export default router;
