import { createPool, Pool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

class Database {
  private pool: Pool;

  constructor() {
    const dbConfig = {
      host: process.env.HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DATABASE,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    };

    this.pool = createPool(dbConfig);
  }

  getPool(): Pool {
    return this.pool;
  }
}

const database = new Database();
export default database.getPool();
