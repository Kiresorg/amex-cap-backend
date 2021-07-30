const app = require("../../server");
const request = require("supertest");

// create
describe("POST Endpoints", () => {
  it("should create a customer", async () => {
    const customer = {
      first_name: "Jane",
      middle_name: "D",
      last_name: "Doe",
      phone: "123-345-6570",
      email: "foo@bar.com",
      notes: "lorem ipsum",
      address_id: 1,
    };
    const res = await request(app).post("/api/customers").send(customer);

    expect(res.statusCode).toEqual(201);
  });
});

// read
describe("GET Endpoints", () => {
  it("should get all customers", async () => {
    const res = await request(app).get("/api/customers");
    expect(res.statusCode).toEqual(200);
  });
});

describe("GET Endpoints", () => {
  it("should get a customer by id", async () => {
    const res = await request(app).get("/api/customers/2");
    expect(res.statusCode).toEqual(200);
  });
});

// update
describe("PUT Endpoints", () => {
  it("should edit a customer", async () => {
    const customer = {
      first_name: "Jane",
      middle_name: "D",
      last_name: "Doe",
      phone: "123-345-6570",
      email: "foo@bar.com",
      notes: "lorem ipsum",
      address_id: 1,
    };
    const res = await request(app).put("/api/customers/1").send(customer);

    expect(res.statusCode).toEqual(200);
  });
});
