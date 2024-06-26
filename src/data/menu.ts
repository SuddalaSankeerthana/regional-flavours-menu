interface Menu {
  name: string;
  type: string;
  isVegan: boolean;
  isGluttenFree: boolean;
}
const menu: Menu[] = [
  {
    name: "Paneer Biryani",
    type: "Main course",
    isGluttenFree: true,
    isVegan: true,
  },
  {
    name: "Neer Dosa",
    type: "Dosa",
    isGluttenFree: true,
    isVegan: true,
  },
  {
    name: "Mysoore Pak",
    type: "Sweet",
    isGluttenFree: false,
    isVegan: false,
  },
];
function getMenuData(): Menu[] {
  return menu;
}
export default getMenuData;
