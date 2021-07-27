module.exports = (app) => {
  const addresses = require("../controllers/address.controller");

  var router = require("express").Router();

  // Create a new Address
  router.post("/", addresses.create);

  // Retrieve all Addresses
  router.get("/", addresses.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", customers.findById);

  // router.get("/:id", tutorials.findOne);

  // Update an address with id
  router.put("/:id", addresses.update);

  // Delete an Address with id
  router.delete("/:id", addresses.delete);

  app.use("/api/addresses", router);
};
