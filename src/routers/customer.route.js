module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  var router = require("express").Router();

  router.get("/", customers.findAll);

  router.delete("/:id", customers.delete);

  app.use("/api/customers", router);
};
