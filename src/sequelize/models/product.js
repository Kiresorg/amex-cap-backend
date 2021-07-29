"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.Order, {
        through: "order_products",
        // as: "orders",
        // foreignKey: "product_id",
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
