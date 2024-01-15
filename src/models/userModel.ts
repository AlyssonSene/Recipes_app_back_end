import pool from "../config/dbConfig";

class UserModel {
  async getUsers(): Promise<any> {
    const [rows] = await pool.query("SELECT * FROM USERS");
    return rows;
  }

  async getUserByName(name: string): Promise<any> {
    const [rows] = await pool.query(
      "SELECT * FROM USERS WHERE first_name = ?",
      [name]
    );
    return rows;
  }

  async createNewUser(
    username: string,
    password: string,
    emailAddress: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    phoneNumber: string
  ): Promise<any> {
    const registratioDate = new Date();
    console.log(registratioDate);

    const query = `INSERT INTO USERS (username, password_hash, email_address, first_name, last_name, date_of_birth, phone_number, registration_date) VALUES (?,?,?,?,?,?,?,?);`;
    const [rows] = await pool.query(query, [
      username,
      password,
      emailAddress,
      firstName,
      lastName,
      dateOfBirth,
      phoneNumber,
      registratioDate,
    ]);
    return rows;
  }
}

export default new UserModel();
