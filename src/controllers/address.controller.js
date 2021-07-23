const db = require("../sequelize/models");
const Address = db.Address;

exports.findAll = (req, res) => {
  Address.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occurred while retrieving addresses.",
      });
    });
};

// DELETE addressId
exports.delete = (req, res) => {
  // delete storage instance of Address IDs to remove reference from object
  const id = req.params.id;
  Address.destroy({
    where: { id: id },
  })
    .then((data) => {
      if (data === 1) {
        res.send({
          message: `Address ID ${id} deleted successfully.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `Error occurred while deleting address IDs ${id}.`,
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
      res.status(500).send({message: "An error has occurred and Address could not be created"})
    })
}
