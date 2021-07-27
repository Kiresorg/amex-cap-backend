"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      customer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Customers",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      order_status: {
        type: Sequelize.STRING,
      },
      datetime_order_placed: {
        type: Sequelize.STRING,
      },
      total_order_price: {
        type: Sequelize.INTEGER,
      },
      order_notes: {
        type: Sequelize.STRING,
      },
      // first_name: {
      //   type: Sequelize.STRING,
      //   references: {
      //     model: "Customers",
      //     key: "first_name",
      //   },
      //   onDelete: "CASCADE",
      // },
      // last_name: {
      //   type: Sequelize.STRING,
      //   references: {
      //     model: "Customers",
      //     key: "last_name",
      //   },
      //   onDelete: "CASCADE",
      // },
      // email: {
      //   type: Sequelize.STRING,
      //   references: {
      //     model: "Customers",
      //     key: "email",
      //   },
      //   onDelete: "CASCADE",
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  },
};
