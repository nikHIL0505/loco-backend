module.exports = {
  db: {
    hostname: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: "Loco",
  },
  PORT: 4000,
};
