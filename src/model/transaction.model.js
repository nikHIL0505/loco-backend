module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define("Transactions", {
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentId: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  });

  return Transaction;
};
