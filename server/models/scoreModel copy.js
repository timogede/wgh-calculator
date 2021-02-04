import fulldataModel from "mongoose";
const fulldataSchema = {
  scoreDifferential: String,
  text: String,
  slope: String,
  courseRating: String,
  completed: Boolean,
  id: String,
  iamgood: Boolean,
  myrankis: Number,
};

const Fulldata = fulldataModel.model("Fulldata", fulldataSchema);

export default Fulldata;
