module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  var router = require("express").Router();

  router.get("/", customers.findAll);

  router.get("/:id", customers.findById);
  app.use("/api/customers", router);
};
