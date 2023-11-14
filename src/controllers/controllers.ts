import sequelize from "../config/config";
import todayFoodMenuData from "../data/menu";
import Menu from "../models/model";

const creteFoodMenuData = (req: any, res: any) => {
  sequelize
    .sync({ force: true })
    .then(() => {
      console.log("Data inserted into table successfully!");
      todayFoodMenuData.forEach((item) => {
        Menu.create({
          name: item.name,
          type: item.type,
          isGluttenFree: item.isGluttenFree,
          isVegan: item.isVegan,
        })
          .then((res: any) => {
            console.log(res);
          })
          .catch((error: Error) => {
            console.error("Failed to create a new record : ", error);
          });
      });
    })
    .catch((error: Error) => {
      console.error("Unable to create table : ", error);
    });
};
export default creteFoodMenuData;
