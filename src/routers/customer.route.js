module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  const router = require("express").Router();
  app.use("/api/customers", router);

  router.get("/", customers.findAllByCount);
};
