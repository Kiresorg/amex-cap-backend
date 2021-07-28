const db = require("../sequelize/models");
const product = require("../sequelize/models/product");
const Order = db.Order;
const Customer = db.Customer;
const Product = db.Product;
const Status = require("../utils/orderstatus");

exports.findAll = (req, res) => {
  Order.findAll({
    include: [{ model: Customer, required: true }],
  })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        data[i].dataValues.status_text =
          Status[data[i].dataValues.order_status];
      }

      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error has occurred while retrieving orders",
      });
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  Order.findByPk(id, {
    include: [
      { model: Customer, required: true },
      { model: Product, required: true },
    ],
  })
    .then((data) => {
      if (data.length === 0) {
        res.status(404).send({ message: "Order does not exist" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while retrieving order.",
      });
    });
};
