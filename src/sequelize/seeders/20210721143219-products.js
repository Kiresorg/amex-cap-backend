"use strict";

const fake = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let products = [];
    for (let i = 0; i <= 100; i++) {
      products.push({
        sku: fake.datatype.number(),
        price: fake.commerce.price(),
        name: fake.commerce.productName(),
        quantity: fake.datatype.number(200),
        description: fake.commerce.productDescription(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Products", products, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
