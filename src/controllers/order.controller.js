const db = require("../sequelize/models");
const Order = db.Order;

exports.findAll = (req, res) => {
  Order.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error has occurred while retrieving orders",
      });
    });
};
