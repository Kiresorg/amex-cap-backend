"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "OrderStatuses",
      [
        {
          reference_id: 1,
          status_text: "Draft",
        },
        {
          reference_id: 2,
          status_text: "Open",
        },
        {
          reference_id: 3,
          status_text: "Finalized",
        },
        {
          reference_id: 4,
          status_text: "Preparing to Ship",
        },
        {
          reference_id: 5,
          status_text: "Ready for Shipping",
        },
        {
          reference_id: 6,
          status_text: "Shipped",
        },
        {
          reference_id: 7,
          status_text: "Delivered",
        },
        {
          reference_id: 8,
          status_text: "Closed",
        },
      ],
      {}
    );
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
