// index.ts
import express from "express";
import router from "./routers";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
