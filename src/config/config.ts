import { Sequelize } from "sequelize";
import "dotenv/config";
const sequelize = new Sequelize(
  process.env["DB_NAME"] || "today_menu",
  process.env["DB_USER"] || "root",
  process.env["DB_PASSWORD"] || "",
  {
    host: process.env["DB_HOST"],
    logging: false,
    dialect: "mysql",
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error: any) => {
    console.error("Unable to connect to the database: ", error);
  });
export default sequelize;
