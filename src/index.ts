const express = require("express");
import getMenuData from "./data/menu";
const app = express();
const port = 3000;
let menu = getMenuData();
app.use(express.json());
module.exports = app;
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.get("/menu", (request: Request, response: any) => {
  console.log(menu);
  response.status(200).send(menu);
});
export default app;
