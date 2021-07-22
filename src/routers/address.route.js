module.exports = app => {
    const addresses = require("../controllers/address.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    // router.post("/", tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/", addresses.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // Update a address with id
    router.put("/:id", addresses.update);
  
    // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/addresses', router);
  };
  