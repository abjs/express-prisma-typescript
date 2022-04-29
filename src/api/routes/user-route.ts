import { createUserValidation } from "@validations";
import express from "express";
import { UserController } from "@controllers";
import { UserMiddleware } from "@middlewares";
export const userRouter = express.Router();
const userController = new UserController();
const userMiddleware = new UserMiddleware();
userRouter.use("", userMiddleware.getPath);
userRouter.get("", userController.getAll);
userRouter.get("/:userId", userController.get);
userRouter.post("", createUserValidation, userController.create);
userRouter.delete("/:userId", userController.delete);
userRouter.put("/:userId", userController.update);
