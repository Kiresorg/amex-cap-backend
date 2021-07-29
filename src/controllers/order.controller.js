const db = require("../sequelize/models");
const Order = db.Order;
const Customer = db.Customer;
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

exports.delete = (req, res) => {
  const id = req.params.id;
  Order.destroy({
    where: { id: id },
  })
    .then((data) => {
      res.status(200).send({ data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting this order.",
        });
      });
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
