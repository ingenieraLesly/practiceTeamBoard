import express from "express";
import userController from "../controllers/userController.js";
import userMidd from "../middleware/userValidate.js";
import roleMidd from "../middleware/roleValidate.js";
const router = express.Router(); //Router: funcionalidad REST de express

//http://localhost:3001/api/role/registerRole
router.post(
  "/registerUser",
  userMidd.existingUser,
  roleMidd.existingRole,
  userController.registerUser
);
router.get("/listUser/:name?", userController.listUser);
router.get("/listUserAdmin/:name?", userController.listUserAdmin);
router.post("/login", userController.login);
router.put("/delete/:_id", userController.deleteUser)
router.put("/updateUserAdmin", userController.updateUserAdmin)

export default router;