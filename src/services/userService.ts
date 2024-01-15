import UserModel from "../models/userModel";

class UserService {
  async getUsers(): Promise<any> {
    try {
      const allUsers = await UserModel.getUsers();
      return allUsers;
    } catch (error: any) {
      throw new Error(`Erro ao obter usuários: ${error.message}`);
    }
  }

  async getUserByName(name: string): Promise<any> {
    try {
      const user = await UserModel.getUserByName(name);
      return user;
    } catch (error: any) {
      throw new Error(`Erro ao encontrar o usuário: ${error.message}`);
    }
  }

  async createNewUser(
    username: string,
    password: string,
    email_address: string,
    first_name: string,
    last_name: string,
    date_of_birth: string,
    phone_number: string
  ): Promise<any> {
    try {
      const newUser = await UserModel.createNewUser(
        username,
        password,
        email_address,
        first_name,
        last_name,
        date_of_birth,
        phone_number
      );
      return newUser;
    } catch (error: any) {
      throw new Error(`Erro ao criar um novo usuário: ${error.message}`);
    }
  }
}

export default new UserService();
