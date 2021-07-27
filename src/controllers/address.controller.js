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

// find address by ID
exports.findById = (req, res) => {
  const id = req.params.id;
  Address.findAll({ where: { id: id } })
    .then((data) => {
      if (data.length === 0) {
        res.status(404).send({ message: "Address does not exist" });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving addresss.",
      });
    });
};

// DELETE address
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

exports.update = (req, res) => {
  Address.update({
      address_line_1: req.body.address_line_1,
      address_line_2: req.body.address_line_2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
  }, {
      where: {
          id: req.params.id
      }
  }).then (result => {
      res.status(200).send(result);
  }).catch (error => {
      res.status(500).send("Error on updating address with id of" + req.params.id + ": " + error);
  })
}

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
