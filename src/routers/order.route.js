module.exports = (app) => {
const orders = require("../controllers/order.controller");
  
    const router = require("express").Router();
  
    // Create a new Order
    router.post("/", orders.create);
  
    // Retrieve all Order
    router.get("/", orders.findAll);
  
    // Update an Order with id
    router.put("/:id", orders.update);
  
    // Delete an Order with id
    router.delete("/:id", orders.delete);
  
    app.use("/api/orders", router);
  };

