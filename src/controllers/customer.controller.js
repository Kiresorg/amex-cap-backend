const { Sequelize } = require("../sequelize/models");
const db = require("../sequelize/models");
const Customer = db.Customer;
const Op = Sequelize.Op;
const Order = db.Order;

exports.findAll = (req, res) => {
  if (!isNaN(Number(req.query.count && !isNaN(Number(req.query.page))))) {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

    Customer.findAndCountAll({
      where: condition,
      limit: Number(req.query.count),
      offset: req.query.page
        ? (Number(req.query.page) - 1) * Number(req.query.count)
        : 0,
      order: req.query.order ? [[req.query.order, "DESC"]] : ["id"],
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Some error occurred while retrieving customers.",
        });
      });
  } else {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

    Customer.findAll({ where: condition })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Some error occurred while retrieving customers:" + err,
        });
      });
  }
};

exports.create = (req, res) => {
  let first_name = req.body.first_name;
  let middle_name = req.body.middle_name;
  let last_name = req.body.last_name;
  let phone = req.body.phone;
  let email = req.body.email;
  let notes = req.body.notes;
  let address_id = req.body.address_id;

  Customer.create({
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
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  Customer.findAll({
    where: { id: id },
    include: [{ model: Order, required: true }],
  })
    .then((data) => {
      if (data.length === 0) {
        res.status(404).send({ message: "Customer does not exist" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Customer.destroy({
    where: { id: id },
  })
    .then((data) => {
      res.status(200).send({ data });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while deleting a customer.",
      });
    });
};

// update customer
exports.update = (req, res) => {
  Customer.update(
    {
      first_name: req.body.first_name,
      middle_name: req.body.middle_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      email: req.body.email,
      notes: req.body.notes,
      address_id: req.body.address_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res
        .status(500)
        .send(
          "Error on updating customer with id of" + req.params.id + ": " + error
        );
    });
};
