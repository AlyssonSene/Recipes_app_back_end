import { Request, Response } from "express";

class UserController {
  public home(req: Request, res: Response) {
    return res.json({
      response: "Hello World",
    });
  }
}
export const userController = new UserController();
