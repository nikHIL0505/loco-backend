require("dotenv").config();

const express = require("express");

const config = require("./src/config");
const db = require("./src/model/index");
const transactionController = require("./src/controller/transaction.controller");

const app = express();

db.sequelize.sync();

app.use(express.json());

app.get(
  "/transactionservice/transaction/:transaction_id",
  transactionController.getTransactionById
);

app.get(
  "/transactionservice/types/:type",
  transactionController.getTransactionsByType
);

app.get(
  "/transactionservice/sum/:transaction_id",
  transactionController.getAllTransactionsWithParentId
);

app.put(
  "/transactionservice/transaction/:transaction_id",
  transactionController.updateTransaction
);

app.post(
  "/transactionservice/transaction",
  transactionController.createTransaction
);

app.listen(config.PORT, () => {
  console.log(
    "Connection established and app is listening on port  " + config.PORT
  );
});
