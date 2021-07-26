"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("OrderStatuses", {
      reference_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status_text: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("OrderStatuses");
  },
};
