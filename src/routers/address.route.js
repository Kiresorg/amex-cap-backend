module.exports = (app) => {

  const addresses = require("../controllers/address.controller");

  var router = require("express").Router();

  // Create a new Address
  router.post("/", addresses.create);

  // Retrieve all Addresses
  router.get("/", addresses.findAll);

  // Retrieve an exising address by id
  router.get("/:id", addresses.findById);

  // Update an address with id
  router.put("/:id", addresses.update);

  // Delete an Address with id
  router.delete("/:id", addresses.delete);

  app.use("/api/addresses", router);
};
