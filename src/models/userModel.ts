import pool from "../config/dbConfig";

class UserModel {
  async getUsers(): Promise<any> {
    const [rows] = await pool.query("SELECT * FROM USERS");
    return rows;
  }
}

export default new UserModel();
