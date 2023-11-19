import kill from "kill-port";
import request from "supertest";
import app from "../index";
import sequelize from "../config/config";
const res = request(app);
beforeEach(async () => {
  await sequelize.sync({ force: true });
});
describe("Server get and post methods testing", () => {
  it("should return data", async () => {
    const status = (await res.get("/today-menu")).statusCode;
    expect(status).toBe(200);
  });
});
afterAll(() => {
  kill(3000, "tcp").then(console.log).catch(console.log);
});
