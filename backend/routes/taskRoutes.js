import taskController from "../controllers/taskController.js";
import express from "express";
const router = express.Router(); //rest of express

router.post("/createTask", taskController.createTask);
router.post("/updateTask", taskController.updateTask);
router.post("/deleteTask/:_id", taskController.deleteTask);

export default router;
