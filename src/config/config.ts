const { Sequelize } = require("sequelize");
require("dotenv").config();
console.log(process.env["DB_USER"], process.env["DB_PASSWORD"]);
require("dotenv").config({ path: __dirname + "/.env" });
const sequelize = new Sequelize(
  "menu",
  process.env["DB_USER"],
  process.env["DB_PASSWORD"],
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
