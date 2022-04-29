import { LogMiddleware } from "@middlewares";
import { _UserModel } from "@validations";
import { NextFunction, Request, Response } from "express";
export class UserMiddleware extends LogMiddleware {
  zodValidation(req: Request, res: Response, next: NextFunction) {
    try {
      const data = _UserModel.parse(req.body);
      console.log(data);
      next();
    } catch (error) {}
  }
}
