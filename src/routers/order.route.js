module.exports = (app) => {
  const orders = require("../controllers/order.controller");

  const router = require("express").Router();

  router.get("/", orders.findAll);
  router.get("/:id", orders.findById);
  router.post("/", orders.create);

  router.delete("/:id", orders.delete);

  app.use("/api/orders", router);
};
