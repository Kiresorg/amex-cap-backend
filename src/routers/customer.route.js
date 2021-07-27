module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  const router = require("express").Router();

  router.get("/:id", customers.findById);

  router.put("/:id", customers.update);

  router.get("/", customers.findAll);

  router.delete("/:id", customers.delete);

  router.post("/", customers.create);
  
  app.use("/api/customers", router);
};
