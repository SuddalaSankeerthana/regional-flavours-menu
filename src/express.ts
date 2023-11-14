import express from "express";
import Menu from "./models/model";

const PORT = 3000;

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
