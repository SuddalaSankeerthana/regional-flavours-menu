import sequelize from "./config/config";
import todayFoodMenuData from "./data/menu";
import Menu from "./models/model";

require("dotenv").config();
const PORT = process.env["NODE_DOCKER_PORT"];
console.log(process.env["DB_NAME"]);
import express from "express";

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

app.get("/menu", async (request, response) => {
  let menu = await Menu.findAll();
  response.status(200).send(menu);
});

export default app;
