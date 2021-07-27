module.exports = (app) => {
  const products = require("../controllers/product.controller");

  const router = require("express").Router();

  router.get("/", products.findAll);

  router.put("/:id", products.update)

  app.use("/api/products", router);
};
