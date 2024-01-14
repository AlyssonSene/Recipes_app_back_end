import { App } from "./app";
import * as dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;

new App().server.listen(PORT, () =>
  console.log(`App rodando na porta ${PORT}`)
);
