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
exports.deleteAddressId = (req, res) => {
  // delete storage instance of Address IDs to remove reference from object
  const id = req.params.id;
  Address.destroy({
    where: { id: id }
  })
    .then((data) => {
      if (data !== 1) {
        res.send({
          message: `Address IDs NOT deleted successfully. Try Again!`,
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

// DELETE all addresses
// exports.deleteAll = (req, res) => {
//   Address.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((data) => {
//       res.send({ message: `${data} deleted successfully.` });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || `Error occurred while deleting all addresses.`,
//       });
//     });
// };
