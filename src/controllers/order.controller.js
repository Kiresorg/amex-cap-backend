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
}
  
exports.update = (req, res) => {
  Order.update(
    {
      order_status: req.body.order_status,
      total_order_price: req.body.total_order_price,
      order_notes: req.body.order_notes,
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
          "Error on updating order with id of" + req.params.id + ": " + error
        );
    });
};

