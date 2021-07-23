module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  var router = require("express").Router();

  router.get("/:id", customers.findById);

  app.use("/api/customers", router);

  router.get("/all", customers.findAll);
  router.get("/", customers.findAllByCount);
};
