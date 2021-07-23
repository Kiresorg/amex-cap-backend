const { Sequelize } = require("../sequelize/models");
const db = require("../sequelize/models");
const Customer = db.Customer;
const Op = Sequelize.Op;

exports.findAll = async (req, res) => {
  Customer.findAndCountAll({
    where: {},
    limit: req.query.count
      ? Number(req.query.count)
      : await Customer.findAll()
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                "Some error occurred while retrieving customers.",
            });
          }),
    offset: req.query.page
      ? (Number(req.query.page) - 1) * Number(req.query.count)
      : 0,
    order: req.query.order ? [["updatedAt", "DESC"]] : ["id", "ASC"],
  })
    .then((data) => {
      console.log(res);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customer."
      });
    });
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

