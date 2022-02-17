import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  user: { typw: mongoose.Schema.ObjectId, ref: "users" },
  name: String,
  description: String,
  taskStatus: String,
  imageUrl: String,
  taskStatus: "to-do",
  registerDate: { type: Date, default: Date.now }
});

const task = mongoose.model("tasks", taskSchema)
export default task;