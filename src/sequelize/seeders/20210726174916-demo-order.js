"use strict";

const fake = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let orders = [];
    let customers = await queryInterface.sequelize.query(
      `SELECT id from Customers;`
    );

    for (let i = 0; i <= 100; i++) {
      orders.push({
        customer_id:
          customers[0][Math.floor(Math.random() * customers[0].length)].id,
        order_status: fake.datatype.number(7),
        datetime_order_placed: fake.datatype.datetime(),
        total_order_price: fake.commerce.price(),
        order_notes: fake.lorem.sentence(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Orders", orders, {});
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
