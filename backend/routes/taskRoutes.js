import taskController from "../controllers/taskController.js";
// import taskMidd from "../middleware/taskValidate.js";
import express from "express";
const router = express.Router(); //rest of express

//router post("/updateTask", taskMidd.existingTask);

router.post("/createTask", taskController.createTask);
router.get("/listTask", taskController.listTask); ///:name?
router.post("/updateTask", taskController.updateTask);
router.post("/deleteTask/:_id", taskController.deleteTask);

export default router;
