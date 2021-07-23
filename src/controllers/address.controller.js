const db = require("../sequelize/models");
const Address = db.Address;

exports.findAll = (req, res) => {
  Address.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving addresses.",
      });
    });
};

exports.create = (req, res) => {

    //this will create new address for User
    Address.create(req.body)
    .then(data =>{
      res.status(201).send(data)
    })
    .catch(error =>{
      res.status(500).send({message: error || "An error has occurred and Address could not be created"})
    })
}
