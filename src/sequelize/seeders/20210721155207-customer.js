'use strict';

const fake = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let customers = [];
    for(let i=0; i<=100; i++){
      customers.push({
        first_name: fake.name.firstName(),
        middle_name: fake.name.middleName(),
        last_name: fake.name.lastName(),
        phone: fake.phone.phoneNumber(),
        email: fake.internet.email(),
        notes: fake.lorem.sentence(),
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
