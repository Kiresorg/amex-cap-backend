"use strict";
const { Model, STRING } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Customer, { foreignKey: "customer_id" });
      Order.hasMany(models.OrderStatus, { foreignKey: "reference_id" });
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
        type: DataTypes.STRING,
        references: {
          model: "OrderStatus",
          key: "reference_id",
        },
      },
      datetime_order_placed: DataTypes.STRING,
      total_order_price: DataTypes.INTEGER,
      order_notes: DataTypes.STRING,
      first_name: {
        type: DataTypes.STRING,
        references: {
          model: "Customer",
          key: "id",
        },
      },
      last_name: {
        type: DataTypes.STRING,
        references: {
          model: "Customer",
          key: "id",
        },
      },
      email: {
        type: DataTypes.STRING,
        references: {
          model: "Customer",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
