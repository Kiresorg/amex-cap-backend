module.exports = (app) => {
  const addresses = require("../controllers/address.controller");

  var router = require("express").Router();

  // GET all addresses
  router.get("/", addresses.findAll);

  // DELETE address ID
  router.delete("/:id", addresses.deleteAddressId);

  app.use("/api/address", router);
};
