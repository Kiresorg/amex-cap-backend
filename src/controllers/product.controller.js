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

exports.update = async (req, res) => {
  const id = req.params.id;
  // get a queryInterface
  const queryInterface = db.sequelize.getQueryInterface();
  try {
    if (!isNaN(Number(req.query.quantity))) {
      let queryQuantity = await queryInterface.sequelize.query(
        `SELECT quantity from products where id = ${id};`
      );
      if(typeof queryQuantity[0][0] === 'undefined') {
        res.status(404).send({message: 'Product ID does not exist'});
      }
      let current = queryQuantity[0][0].quantity;
      let newQuantity = current - req.query.quantity;
      const update = {
        quantity: newQuantity
      }
       await Product.update(update, {
        where: { id: id },
        quantity: newQuantity
      }).then((data) => {
          res.status(200).send(data);
      })
      .catch((error) => {
        // tried to use more product than exists
        if(error.message.includes('Out of range value for column \'quantity\' at row 1'))
        res.status(500).send({ message: "Insufficient product quantity exists" })
        else(
          res.status(500).send({ message: "Error updating product" })
        );
      });
    } else {
      res
        .status(400)
        .send({
          message: "Improper formatted request - Quantity needs to be an integer",
        });
    }
  }
  catch(err) {

  }
}
