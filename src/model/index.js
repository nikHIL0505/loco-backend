const Sequelize = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    host: config.db.hostname,
    dialect: "mysql",
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.transactions = require("./transaction.model")(
  sequelize,
  Sequelize.DataTypes
);

module.exports = db;
