module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  var router = require("express").Router();

  router.get("/", customers.findAll);

  app.use("/api/customers", router);
};
