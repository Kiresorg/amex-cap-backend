const { Sequelize } = require("../sequelize/models");
const db = require("../sequelize/models");
const Order = db.Order;
const Customer = db.Customer;
const Product = db.Product;
const Status = require("../utils/orderstatus");
const Op = Sequelize.Op;

exports.findAll = (req, res) => {
  if (isNaN(Number(req.query.status)) && req.query.status) {
    res
      .status(400)
      .send({ message: "status codes need to be sent as integers" });
  } else if (!isNaN(Number(req.query.status))) {
    Order.findAll({
      where: {
        order_status: req.query.status,
      },
      include: [
        { model: Customer, required: true },
        { model: Product, required: false },
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
  } else {
    Order.findAll({
      include: [
        { model: Customer, required: true },
        { model: Product, required: false },
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
  }
};

exports.create = (req, res) => {
  let customer_id = req.body.customer_id;
  let order_status = req.body.order_status;
  let datetime_order_placed = req.body.datetime_order_placed;
  let total_order_price = req.body.total_order_price;
  let order_notes = req.body.order_notes;
  let products = req.body.products;

  Order.create({
    customer_id: customer_id,
    order_status: order_status,
    datetime_order_placed: datetime_order_placed,
    total_order_price: total_order_price,
    order_notes: order_notes,
  })
    .then(async (order) => {
      console.log(products);
      await order.addProducts(products);
      return order;
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
      { model: Product, required: false },
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
      console.log(err);
      res.status(500).send({
        message: "Some error occurred while retrieving order.",
      });
    });
};
