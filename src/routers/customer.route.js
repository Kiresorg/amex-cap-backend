module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  var router = require("express").Router();

  router.get("/:id", customers.findById);

  router.delete("/:id", customers.delete);

  router.get("/", customers.findAll);

  router.post("/", customers.create);
  
  router.put("/:id", customers.update);

  app.use("/api/customer", router);
};
