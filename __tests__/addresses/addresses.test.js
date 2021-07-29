const app = require("../../server");
const request = require("supertest");

// create
describe("POST Endpoints", () => {
  it("should create an address", async () => {
    const address = {
      address_line_1: "123 main street",
      address_line_2: "apt 4B",
      city: "Portland",
      state: "OR",
      zip: "97239",
    };
    const res = await request(app).post("/api/addresses").send(address);

    expect(res.statusCode).toEqual(201);
  });
});

// read
describe("GET Endpoints", () => {
  it("should get all addresses", async () => {
    const res = await request(app).get("/api/addresses");
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET Endpoints", () => {
  it("should get an address by id", async () => {
    const res = await request(app).get("/api/addresses/1");
    expect(res.statusCode).toEqual(200);
  });
});

// update
describe("PUT Endpoints", () => {
  it("should update an address", async () => {
    const address = {
      address_line_1: "456 main street",
      address_line_2: "apt 4B",
      city: "Portland",
      state: "OR",
      zip: "97239",
    };
    const res = await request(app).put("/api/addresses/1").send(address);

    expect(res.statusCode).toEqual(200);
  });
});

// DELETE
// describe('DELETE Endpoints', () => {
//   it('should delete an address by id', async () => {
//     const res = await request(app)
//       .delete('/api/addresses/1')
//     expect(res.statusCode).toEqual(200)
//   })
// })
