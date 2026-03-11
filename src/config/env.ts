export const env = {
  PORT: Number(process.env.PORT) || 3000,
  DB_FILE: process.env.DB_FILE || "database.sqlite"
};