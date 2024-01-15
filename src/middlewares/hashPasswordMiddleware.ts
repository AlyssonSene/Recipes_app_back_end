import bcrypt from "bcryptjs";
import { NextFunction, Request, Response } from "express";

const saltRounds = 10;

const hashPasswordMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password } = req.body;

    // Gera um salt e hash para a senha
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    req.body.password = hashedPassword;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default hashPasswordMiddleware;
