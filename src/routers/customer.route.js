module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  var router = require("express").Router();

  router.get("/", customers.findAll);

   // Retrieve a single customer with email

  app.use("/api/customers", router);
};
