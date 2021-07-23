module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  var router = require("express").Router();

  router.get("/:id", customers.findById);

  router.delete("/:id", customers.delete);

  router.get("/", customers.findAll);

  app.use("/api/customers", router);
};
