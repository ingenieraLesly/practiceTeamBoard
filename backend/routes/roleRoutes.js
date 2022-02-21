import express from "express";
import roleController from "../controllers/roleController.js";
// import roleMidd from "../middleware/roleValidate.js";
const router = express.Router(); //Router: funcionalidad REST de express

//http://localhost:3001/api/role/registerRole
router.post("/registerRole", roleController.registerRole);

router.get("/listRole", roleController.listRole);

export default router;
