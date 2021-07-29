"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      let orderProducts = [];
      let orders = await queryInterface.sequelize.query(
        `SELECT id from Orders;`
      );
      let products = await queryInterface.sequelize.query(
        `SELECT id from Products;`
      );

      for (let i = 0; i <= 100; i++) {
        orderProducts.push({
          OrderId: orders[0][Math.floor(Math.random() * orders[0].length)].id,
          ProductId:
            products[0][Math.floor(Math.random() * products[0].length)].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
      await queryInterface.bulkInsert("order_products", orderProducts, {});
    } catch (error) {
      console.log(error);
    }
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
