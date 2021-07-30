const app = require("../../server");
const request = require("supertest");

// create a product


// read a product
describe("GET Endpoints", () => {
    it("should get all products", async () => {
      const res = await request(app).get("/api/products");
      expect(res.statusCode).toEqual(200);
    });
  });

describe("GET Endpoints", () => {
  it("should get a product by id", async () => {
    const res = await request(app).get("/api/products/1");
    expect(res.statusCode).toEqual(200);
  });
});

// update product quantity
describe("PUT Endpoints", () => {
  it("should update number of products left", async () => {
    const update = {
      quantity: newQuantity,
    };
    const res = await request(app).put("/api/products/1").send(products);

    expect(res.statusCode).toEqual(200);
  });
});

// delete a product