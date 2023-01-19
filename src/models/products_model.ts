import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  category: String,
  status: String,
  quantity: Number,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date,
});

const Model = mongoose.model("products", schema);

export default Model;