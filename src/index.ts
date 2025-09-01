//import console = require("console");
import express from "express";
import helloRoute from "./routes/hello";
import { connectDatabase } from "./config/database";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDatabase();

app.use("/hello", helloRoute);

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
