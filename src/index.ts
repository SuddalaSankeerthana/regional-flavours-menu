import express from "express";
import getMenuData from "./data/menu";

const PORT = 3000;

const app = express();
let menu = getMenuData();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

app.get("/menu", (request: Request, response: any) => {
  response.status(200).send(menu);
});

export default app;
