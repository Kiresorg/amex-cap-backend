const db = require("../sequelize/models");
const Product = db.Product;
//const queryInterface = sequelize.getQueryInterface();
const queryInterface = db.getQueryInterface();

exports.findAll = (req, res) => {
  Product.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error has occurred while retrieving products",
      });
    });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  Product.findOne({ where: { id: id } })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({ message: "Error grabbing product" });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  if (!isNaN(Number(req.query.quantity))) {
    let currentQuantity = queryInterface.sequelize.query(
      `SELECT quantity from products where id = ${id};`
    );

    Product.update(req.body, {
      where: { id: id },
      quantity: Number(req.query.quantity), //Number(req.body.quantity)
    })

      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send({ message: "Error updating product" });
      });
  } else {
    res
      .status(400)
      .send({
        message: "Improper formatted request - Quantity needs to be an integer",
      });
  }
};
