import task from "../models/task";

const createTask = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send({ message: "Incomplete data" });

  const taskSchema = new task({
    name: req.body.name,
    description: req.body.description,
    taskStatus: req.body.taskStatus,
    imageUrl: req.body.imageUrl,
  });
  const result = await taskSchema.save();
  if (!result)
    return res.status(500).send({ message: "Failed to register task" });
  res.status(200).send({ result });
};

const updateTask = async (req, res) => {
  if (
    req.body.taskStatus == "to-do" ||
    req.body.taskStatus == "in-progress" ||
    req.body.taskStatus == "finish"
  )
    return res.status(400).send({ message: "Wrong state" });

  const editTasks = await task.findByIdAndUpdate(req.body.taskStatus, {
    taskStatus: req.body.taskStatus,
  });

  if (!editTasks)
    return res.status(500).send({ message: "Error editing task" });
  return res.status(200).send({ message: "TaskStatus updated" });
};

const deleteTask = async (req, res) => {
  if (!req.params["_id"])
    return res.status(400).send({ message: "Incomplete data" });

  const tasks = await task.findByIdAndDelete(req.body._id);

  return !tasks
    ? res.status(400).send({ message: "Error deleting task" })
    : res.status(200).send({ message: "Task deleted" });
};

export default { createTask, updateTask, deleteTask };
