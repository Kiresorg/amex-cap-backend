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
