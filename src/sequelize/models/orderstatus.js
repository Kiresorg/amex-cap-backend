"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderStatus.belongsTo(models.Order, { foreignKey: "reference_id" });
    }
  }
  OrderStatus.init(
    {
      reference_id: DataTypes.INTEGER,
      status_text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "OrderStatus",
    }
  );
  return OrderStatus;
};
