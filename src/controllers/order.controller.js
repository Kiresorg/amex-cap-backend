const db = require("../sequelize/models");
const Order = db.Order;
const Customer = db.Customer;
const OrderStatus = db.OrderStatus;

exports.findAll = (req, res) => {
  Order.findAll({
    include: [{ model: Customer, required: true }],
  })
    .then((data) => {
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
