import { StatusCode, StatusMessage } from "config";
import { Request, Response } from "express";
export class RootController {
  constructor() {}
  working(req: Request, res: Response) {
    res.status(200).json({
      status: "success",
      message: "API  is running from root route",
    });
  }
  time(req: Request, res: Response) {
    const time = new Date();
    res.status(200).json({
      time: time.toString(),
    });
  }
  test(req: Request, res: Response) {
    const time = new Date();
    const { id } = req.params;
    const { name } = req.body;
    const { age } = req.query;
    res.status(200).json({
      message: "test message from root controller",
      id,
      name,
      age,
      time: time.toString(),
    });
  }
}
