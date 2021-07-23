const db = require("../sequelize/models");
const Customer = db.Customer;

const findAllByCount = (req, res) => {
  Customer.findAndCountAll({
    where: {},
    limit: Number(req.query.count),
  })
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

const findAll = (req, res) => {
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

exports.findById = (req, res) => {
  const id = req.params.id
  Customer.findAll({where: {id:id}})
  .then(data => {
    if(data.length === 0){
      res.status(404).send({message: "Customer does not exist"})
    }
    else{
      res.send({data})
    }
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving customers.",
      
    })
  })
};

exports.update = (req, res) => {
  Customer.update({
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    phone: req.body.phone,
    email: req.body.email,
    notes: req.body.notes,
  },{
    where: {
      id: req.params.id
    }
  }).then (result => {
      res.status(200).send(result);
  }).catch (error => {
      res.status(500).send("Couldn't update customer with id of" + req.params.id + ":");
  })
}
