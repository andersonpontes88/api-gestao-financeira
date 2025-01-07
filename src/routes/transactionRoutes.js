import express from "express";
import {
  createTransaction,
  deleteTransaction,
  getSummary,
  getTransactions,
  updateTransaction,
} from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createTransaction);
router.get("/", authMiddleware, getTransactions);
router.put("/:id", authMiddleware, updateTransaction);
router.delete("/:id", authMiddleware, deleteTransaction);
router.get("/summary", authMiddleware, getSummary);

export default router;
