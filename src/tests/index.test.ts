import kill from "kill-port";
import request from "supertest";
import app from "../index";
const res = request(app);
describe("Server get method testing", () => {
  it("should return data", async () => {
    const status = (await res.get("/menu")).statusCode;
    expect(status).toBe(200);
  });
});
afterAll(() => {
  kill(3000, "tcp").then(console.log).catch(console.log);
});
