import express from "express";
import roleController from "../controllers/roleController.js";
const router = express.Router();//Router: funcionalidad REST de express

//http://localhost:3001/api/role/registerRole
router.post("/registerRole", roleController.registerRole)

export default router;