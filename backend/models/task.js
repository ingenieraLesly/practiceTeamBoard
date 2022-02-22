import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "users" },
  name: String,
  description: String,
  taskStatus: {type: String, default: "to-do"},
  imageUrl: String,
  registerDate: { type: Date, default: Date.now }
});

const task = mongoose.model("tasks", taskSchema)
export default task;