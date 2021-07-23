module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  const router = require("express").Router();

  router.get("/:id", customers.findById);

  router.put("/:id", customers.update);

  // router.get("/all", customers.findAll);
  router.get("/", customers.findAll);

  app.use("/api/customers", router);
};
