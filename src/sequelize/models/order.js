"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Customer, { foreignKey: "customer_id" });

      Order.belongsToMany(models.Product, {
        through: "order_products",
        foreignKey: "ProductId",
      });
    }
  }
  Order.init(
    {
      customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Customer",
          key: "id",
        },
      },

      order_status: {
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
      status_text: {
        type: DataTypes.STRING,
      },
      datetime_order_placed: DataTypes.STRING,
      total_order_price: DataTypes.INTEGER,
      order_notes: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
