import { Request, Response } from "express";
import UserService from "../services/userService";

class UserController {
  async getUsers(_req: Request, res: Response): Promise<void> {
    try {
      const usuarios = await UserService.getUsers();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getUserByName(req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.params;
      const user = await UserService.getUserByName(name);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createNewUser(req: Request, res: Response): Promise<void> {
    try {
      const {
        username,
        password,
        email_address,
        first_name,
        last_name,
        date_of_birth,
        phone_number,
      } = req.body;

      await UserService.createNewUser(
        username,
        password,
        email_address,
        first_name,
        last_name,
        date_of_birth,
        phone_number
      );

      res.status(201).json({ message: "usuário criado com sucesso" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
