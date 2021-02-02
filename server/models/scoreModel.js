import mongoose from "mongoose";
const scoresSchema = {
  scoreDifferential: String,
  text: String,
  slope: String,
  courseRating: String,
  completed: Boolean,
  id: String,
  iamgood: Boolean,
  myrankis: Number,
};

const Score = mongoose.model("Score", scoresSchema);

export default Score;
