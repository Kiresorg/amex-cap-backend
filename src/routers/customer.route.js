module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  var router = require("express").Router();

  router.get("/", customers.findAll);

  router.post("/", customers.create);

  app.use("/api/customers", router);
};
