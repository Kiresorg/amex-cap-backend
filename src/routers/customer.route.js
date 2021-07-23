module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  var router = require("express").Router();

  router.get("/:id", customers.findById);

  router.get("/all", customers.findAll);

  router.get("/", customers.findAllByCount);

  app.use("/api/customers", router);
};
