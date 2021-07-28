"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.belongsTo(models.Address, { foreignKey: "address_id" });

      Customer.hasMany(models.Order, {
        foreignKey: "customer_id",
        onDelete: "cascade",
      });
    }
  }
  Customer.init(
    {
      first_name: DataTypes.STRING,
      middle_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      notes: DataTypes.STRING(1000),
      address_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Address",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
