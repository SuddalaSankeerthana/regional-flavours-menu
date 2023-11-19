import sequelize from "../config/config";
import { DataTypes } from "sequelize";
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
(async () => await sequelize.sync({ force: true }))();
export default Menu;
