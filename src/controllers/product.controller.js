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

exports.update = (req, res) =>{
  const id = req.params.id
  Product.update(req.body,{where: {id: id}})

  .then(data =>{
    res.status(200).send(data)
  })
  .catch(error =>{
    res.status(500).send({message: "Error updating product"})
  })
}