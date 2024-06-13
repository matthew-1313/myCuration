const api = require("../api.js");
const request = require("supertest");
const getOneArtwork = require("../api.js");

// describe("GET", () => {
//   test("get something back", () => {
//     return request(ChicagoApi).get("/artworks?limit=1").expect(200);
//   });
// });

describe("GET", () => {
  test("get something back", () => {
    const output = getOneArtwork();
    const expected = {};
    expected(output).toEqual(expected);
  });
});
