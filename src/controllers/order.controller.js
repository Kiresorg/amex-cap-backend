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

exports.create = (req, res) => {
  let first_name = req.body.first_name;
  let middle_name = req.body.middle_name;
  let last_name = req.body.last_name;
  let phone = req.body.phone;
  let email = req.body.email;
  let notes = req.body.notes;
  let address_id = req.body.address_id;

  Order.create({
    first_name: first_name,
    middle_name: middle_name,
    last_name: last_name,
    phone: phone,
    email: email,
    notes: notes,
    address_id: address_id,
  })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((error) => {
      res.status(500).send("Error on create address: " + error);

      
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
