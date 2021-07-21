'use strict';

const fake = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let customers = [];
    for(let i=0; i<=100; i++){
      customers.push({
        first_name: fake.customer.streetAddress(),
        middle_name: fake.customer.secondaryAddress(),
        last_name: fake.customer.city(),
        phone: fake.customer.state(),
        email: fake.customer.zipCode(),
        notes: fake.customer.
        // address_id: fake.customer.
        createdAt:new Date(),
        updatedAt:new Date(),
      });
    }
     await queryInterface.bulkInsert('Customers',customers, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
