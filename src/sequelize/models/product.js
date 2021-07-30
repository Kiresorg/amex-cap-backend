"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Order, {
        through: "order_products",
        foreignKey: "OrderId",
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sku: DataTypes.STRING,
    quantity: DataTypes.INTEGER.UNSIGNED,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });

  return Product;
};
