const sequelize = require("../model/index");

const Transactions = sequelize.transactions;

const getChildSumOfTransaction = async (parentId) => {
  const transactions = await Transactions.findAll({
    where: {
      parentId: parentId,
    },
  });

  let sum = 0;

  for (let transaction of transactions) {
    sum = sum + transaction.amount;
    let childSum = await getChildSumOfTransaction(transaction.id);
    sum = sum + childSum;
  }

  return sum;
};

module.exports = {
  getChildSumOfTransaction,
};
