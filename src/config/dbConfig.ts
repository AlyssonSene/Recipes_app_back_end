import { createPool, Pool } from "mysql2/promise";
import "dotenv/config";

// Configurações do banco de dados
const dbConfig = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Criar uma pool de conexões
const pool: Pool = createPool(dbConfig);

export default pool;
