const sequelize = require("../model/index");

const Transactions = sequelize.transactions;

const transactionUtil = require("../util/transaction.util");

const createTransaction = async (req, res) => {
  let payload = req.body;

  if (!payload.amount) {
    res.status(400).send({
      success: false,
      message: "Please provide transaction amount",
    });
    return;
  }

  if (!payload.type) {
    res.status(400).send({
      success: false,
      message: "Please provide transaction type",
    });
    return;
  }

  let transaction = {
    amount: Number(payload.amount),
    type: payload.type?.trim()?.toUpperCase(),
    parentId: Number(payload.parentId),
  };

  transaction = await Transactions.create(transaction);

  res.send({
    success: true,
    data: {
      transaction,
    },
  });
};

const updateTransaction = async (req, res) => {
  const transactionId = req.params.transaction_id;

  const payload = req.body;

  if (!payload.amount) {
    res.status(400).send({
      success: false,
      message: "Please provide transaction amount",
    });
    return;
  }

  if (!payload.type) {
    res.status(400).send({
      success: false,
      message: "Please provide transaction type",
    });
    return;
  }

  let transaction = {
    id: transactionId,
    amount: Number(payload.amount),
    type: payload.type?.trim()?.toUpperCase(),
    parent: Number(payload?.parentId),
  };

  transaction = await Transactions.update(transaction, {
    where: {
      id: transactionId,
    },
  });

  res.send({
    success: true,
    message: "Transaction updated successfully",
  });
};

const getTransactionById = async (req, res) => {
  const transactionId = req.params.transaction_id;
  const transaction = await Transactions.findByPk(transactionId);

  if (!transaction) {
    res.status(404).send({
      success: false,
      message: `Transaction with id ${transactionId} not found`,
    });
    return;
  }

  res.send({
    success: true,
    data: {
      transaction,
    },
  });
};

const getTransactionsByType = async (req, res) => {
  const type = req.params.type;
  let transactions = await Transactions.findAll({
    where: {
      type: type?.toUpperCase(),
    },
  });
  res.send({
    status: true,
    data: {
      transactions,
    },
  });
};

const getAllTransactionsWithParentId = async (req, res) => {
  const parentId = req.params.transaction_id;

  let totalSum = await transactionUtil.getChildSumOfTransaction(parentId);

  res.send({
    success: true,
    data: {
      sum: totalSum,
    },
  });
};

module.exports = {
  createTransaction,
  updateTransaction,
  getTransactionById,
  getTransactionsByType,
  getAllTransactionsWithParentId,
};
