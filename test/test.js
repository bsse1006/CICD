const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Hello World!", (done) => {
        request(app).get("/").expect("Hello World!", done);
    })
});

describe("GET /yasin", () => {
    it("responds with yasin", (done) => {
        request(app).get("/yasin").expect("yasin", done);
    })
});