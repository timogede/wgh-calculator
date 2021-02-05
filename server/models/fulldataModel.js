import mongoose from "mongoose";
const fulldataSchema = {
  user_id: Number,
  everything: Array,
};

const Fulldata = mongoose.model("Fulldata", fulldataSchema);

export default Fulldata;
