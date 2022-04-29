import express from "express";
import { RootController } from "@controllers";
export const rootRouter = express.Router();
const rootController = new RootController();
rootRouter.get("", rootController.working);
