module.exports = app => {
    const customerController = require(`../controllers/customer.controller`);

    const router = require("express").Router();

    // GET ALL CUSTOMERS
    // router.get('/', customerController.getAll);

    // GET Customer By ID
    // router.get('/:id', customerController.getById);

    // Update customer by Id
    router.put("/:id", customerController.update);
}