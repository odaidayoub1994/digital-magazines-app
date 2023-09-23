export default {
  development: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"), // Parse port as an integer
    database: process.env.DB_DATABASE || "postgres",
    dialect: "postgres"
  }
};
