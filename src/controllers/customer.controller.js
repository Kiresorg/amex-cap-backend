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
exports.create = async (req, res) => {
  try {
    //this will create new customer for User
    const newCustomer = await Customer.create(req.body);

    //if successful send status code, message, and request
    res.status(201).json({
      statusCode: 201,
      message: "Customer Has Been Created",
      newCustomer,
    });
  } catch (error) {
    //if unsuccessful send 400 status code, and error message
    res.status(500).json({
      statusCode: 500,
      error: error || "An error has occurred and Address could not be created",
    });
  }
};
