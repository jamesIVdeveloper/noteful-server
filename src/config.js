module.exports = {
  PORT: process.env.PORT || 9090,
  NODE_ENV: process.env.NODE_ENV || "development",
  DB_URL: process.env.DB_URL || "postgresql://dunder_mifflin@localhost/noteful",
};
