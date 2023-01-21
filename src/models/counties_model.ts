import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: Number,
  name: String,
});

const Model = mongoose.model("counties", schema);

export default Model;
