import task from "../models/task.js";

const existingTask = async (req, res, next) => {
  if (!req.body.name)
    return res.status(400).send({ message: "Task not entered" });

  const existingStatus = await task.findOne({ name: req.body.taskStatus });
  if (!existingStatus) {
    return res.status(400).send({ message: "TaskStatus not entered" });
  }
  next();
};

export default { existingTask };
