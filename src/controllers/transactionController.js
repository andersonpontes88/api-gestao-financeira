import prisma from "../config/db.js";

export const createTransaction = async (req, res) => {
  const { description, amount, category, type } = req.body;
  try {
    const transaction = await prisma.transaction.create({
      data: { description, amount, category, type, userId: req.user.id },
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: req.user.id },
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { amount, category, type, description } = req.body;
  try {
    const transaction = await prisma.transaction.update({
      where: { id },
      data: { amount, category, type, description },
    });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(404).json({ error: "Transação não encontrada" });
  }
};

export const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.transaction.delete({
      where: { id },
    });
    res.status(204).send(); // Resposta sem conteúdo
  } catch (error) {
    res.status(404).json({ error: "Transação não encontrada" });
  }
};

export const getSummary = async (req, res) => {
  try {
    const userId = req.user.id;

    // Soma de receitas
    const income = await prisma.transaction.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        userId,
        type: "income",
      },
    });

    // Soma de despesas
    const expense = await prisma.transaction.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        userId,
        type: "expense",
      },
    });

    const totalIncome = income._sum.amount || 0;
    const totalExpense = expense._sum.amount || 0;

    res.json({
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
