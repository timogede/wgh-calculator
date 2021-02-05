import express from "express";
const router = express.Router();
import Score from "../models/scoreModel.js";
router.route("/put").post((req, res) => {
  const scoreDifferential = req.body.scoreDifferential;
  const text = req.body.text;
  const slope = req.body.slope;
  const courseRating = req.body.courseRating;
  const completed = req.body.completed;
  const id = req.body.id;
  const iamgood = req.body.iamgood;
  const myrankis = req.body.myrankis;
  const newScore = new Score({
    scoreDifferential,
    text,
    slope,
    courseRating,
    completed,
    id,
    iamgood,
    myrankis,
  });
  newScore.save();
});
export default router;
