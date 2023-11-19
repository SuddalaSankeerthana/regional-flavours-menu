import express from "express";
import Menu from "./models/model";
import creteFoodMenuData from "./controllers/controllers";
import "dotenv/config";
const PORT = process.env["NODE_DOCKER_PORT"];

const app = express();

app.use(express.json());

app.listen(PORT, async () => {
  await creteFoodMenuData();
  console.log(`App running on port ${PORT}.`);
});
app.get("/today-menu", async (request, response) => {
  let menu = await Menu.findAll();
  console.log(menu);
  response.status(200).send(menu);
});

export default app;
