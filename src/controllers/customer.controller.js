const db = require("../sequelize/models");
const Customer = db.Customer;

exports.findAll = (req, res) => {
  if (!isNaN(Number(req.query.count && !isNaN(Number(req.query.page))))) {
    Customer.findAndCountAll({
      where: {},
      limit: Number(req.query.count),
      offset: req.query.page
        ? (Number(req.query.page) - 1) * Number(req.query.count)
        : 0,
      order: req.query.order ? [[req.query.order]] : ["id"],
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
    Customer.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Some error occurred while retrieving customers.",
        });
      });
  }
};

exports.findById = (req, res) => {
  const id = req.params.id;
  Customer.findAll({ where: { id: id } })
    .then((data) => {
      if (data.length === 0) {
        res.status(404).send({ message: "Customer does not exist" });
      } else {
        res.send({ data });
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
