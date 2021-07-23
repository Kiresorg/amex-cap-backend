const db = require("../sequelize/models");
const Customer = db.Customer;

exports.findAll = (req, res) => {
  Customer.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    });
};

exports.delete = (req, res) => {
  Customer.destroy({
    where: { id: req.params.id },
  })
    .then((data) => {
      res.send({ message: "customer has been deleted", data });
    })
    .catch((err) => {
      res.send("error in deleteing customer", err);
    });
};
