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

exports.create = async (req, res) => {
  try {
    //this will create new address for User
    const newAddress = await Address.create(req.body);

    //if successful send status code, message, and request
    res.status(201).json({
      statusCode: 201,
      message: "Address Has Been Created",
      newAddress,
    });
  } catch (error) {
    //if unsuccessful send 400 status code, and error message
    res.status(500).json({
      statusCode: 500,
      error: error || "An error has occurred and Address could not be created",
    });
  }
};
