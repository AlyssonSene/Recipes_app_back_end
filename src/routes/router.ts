import { Router } from "express";
import { userController } from "../controllers/userController";

const router: Router = Router();

//Routes
router.get("/", userController.home);

export { router };