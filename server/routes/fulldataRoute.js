import express from "express";
const router = express.Router();
import Fulldata from "../models/fulldataModel.js";
router.route("/create").post((req, res) => {
  const scoreDifferential = req.body.scoreDifferential;
  const text = req.body.text;
  const slope = req.body.slope;
  const courseRating = req.body.courseRating;
  const completed = req.body.completed;
  const id = req.body.id;
  const iamgood = req.body.iamgood;
  const myrankis = req.body.myrankis;
  const newFulldata = new Fulldata({
    scoreDifferential,
    text,
    slope,
    courseRating,
    completed,
    id,
    iamgood,
    myrankis,
  });
  newFulldata.save();
});
export default router;
