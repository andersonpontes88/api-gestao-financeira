import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.get("/", (req, res) => res.json({ message: "Hello World!" }));
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

// Inicializa o servidor
const PORT = process.env.PORT || 3000; // Vercel define automaticamente a variável de ambiente PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
