const { Sequelize } = require("../sequelize/models");
const db = require("../sequelize/models");
const Order = db.Order;
const Customer = db.Customer;
const Status = require("../utils/orderstatus");
const Op = Sequelize.Op;

exports.findAll = (req, res) => {
  if(isNaN(Number(req.query.status)) && req.query.status ) {
    res.status(400).send({ message: 'status codes need to be sent as integers'});
  }

  else if (!isNaN(Number(req.query.status))) {
    Order.findAll({
      where: {
        order_status: req.query.status,
      },
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
  } else {
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
  }
};
exports.findById = (req, res) => {
  const id = req.params.id;
  Order.findByPk(id, {
    include: [{ model: Customer, required: true }],
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
        message: err.message || "Some error occurred while retrieving order.",
      });
    });
};
