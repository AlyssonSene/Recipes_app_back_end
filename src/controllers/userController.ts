import { Request, Response } from "express";
import UserService from "../services/userService";

class UserController {
  async getUsers(_req: Request, res: Response): Promise<void> {
    try {
      const usuarios = await UserService.getUsers();
      res.status(200).json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

export default new UserController();
