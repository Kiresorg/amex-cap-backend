const db = require("../sequelize/models");
const product = require("../sequelize/models/product");
const Order = db.Order;
const Customer = db.Customer;
const Product = db.Product;
const Status = require("../utils/orderstatus");

exports.findAll = (req, res) => {
  Order.findAll({
    include: [
      { model: Customer, required: true },
      { model: Product, required: true },
    ],
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

exports.create = (req, res) => {
  let customer_id = req.body.customer_id;
  let order_status = req.body.order_status;
  let datetime_order_placed = req.body.datetime_order_placed;
  let total_order_price = req.body.total_order_price;
  let order_notes = req.body.order_notes;
  let ProductId = req.body.ProductId;

  Order.create({
    customer_id,
    order_status,
    datetime_order_placed,
    total_order_price,
    order_notes,
    ProductId,
  })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((error) => {
      res.status(500).send("Error on create order: " + error);
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
        res.status(200).send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while retrieving order.",
      });
    });
};
