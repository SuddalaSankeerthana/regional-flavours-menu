import sequelize from "../config/config";
const { DataTypes } = require("sequelize");
const Menu = sequelize.define(
  "MenuDetail",
  {
    name: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    isVegan: { type: DataTypes.BOOLEAN },
    isGluttenFree: { type: DataTypes.BOOLEAN },
  },
  { timestamps: false, createdAt: false, updatedAt: false }
);
sequelize
  .sync()
  .then(() => {
    console.log("Menu table created successfully!");
  })
  .catch((error: Error) => {
    console.error("Unable to create table : ", error);
  });
export default Menu;
