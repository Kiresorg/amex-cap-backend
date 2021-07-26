const db = require("../sequelize/models");
const Product = db.Product;

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
