const db = require("../sequelize/models");
const Customer = db.Customer;

const findAllByCount = async (req, res) => {
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
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    });
};

module.exports = { findAllByCount: findAllByCount };
