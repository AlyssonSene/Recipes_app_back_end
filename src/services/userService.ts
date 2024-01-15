import UserModel from "../models/userModel";

class UserService {
  async getUsers(): Promise<any> {
    try {
      const usuarios = await UserModel.getUsers();
      return usuarios;
    } catch (error: any) {
      throw new Error(`Erro ao obter usuários: ${error.message}`);
    }
  }
}

export default new UserService();
