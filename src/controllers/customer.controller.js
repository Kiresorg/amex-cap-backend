const db = require("../sequelize/models");
const Customer = db.Customer;

exports.findAll = (req, res) => {
  Customer.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    });
};

// exports.create = (req, res) => {
//   res.send("you have reached the controller");
// };
// exports.create = async (req, res) => {
//   try {
//     //this will create new customer for User --- if there's an error, nothing catches them
//     const newCustomer = await Customer.create(req.body);

//     //if successful send status code, message, and request
//     res.status(201).json({
//       newCustomer,
//     });
//   } catch (error) {
//     //if unsuccessful send 400 status code, and error message
//     res.status(500).json({
//       statusCode: 500,
//       error: error || "An error has occurred and Address could not be created",
//     });
//   }
// };

exports.create = (req, res) => {
  let first_name = req.body.first_name;
  let middle_name = req.body.middle_name;
  let last_name = req.body.first_name;
  let phone = req.body.phone;
  let email = req.body.email;
  let notes = req.body.notes;
  let addressID = req.body.addressID;

  Customer.create({
    first_name: first_name,
    middle_name: middle_name,
    last_name: last_name,
    phone: phone,
    email: email,
    notes: notes,
    addressID: addressID,
  })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send("Error on create address: " + error);
    });
};
