import express from "express";
import userController from "../controllers/userController";
import hashPasswordMiddleware from "../middlewares/hashPasswordMiddleware";
const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/userByName/:name", userController.getUserByName);
router.post("/newUser", hashPasswordMiddleware, userController.createNewUser);

export default router;
