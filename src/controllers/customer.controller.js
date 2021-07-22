const db = require("../sequelize/models");
const Customer = db.Customer;

const findAll = (req, res) => {
  console.log(req.query.count);

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

// const getPagination = (page, size) => {
//   const limit = size ? +size : 10;
//   const offset = page ? page * limit : 0;

//   return { limit, offset };
// };

// const getPagingData = (data, page, limit) => {
//   const { count: totalItems, rows: Customer } = data;
//   const currentPage = page ? +page : 0;
//   const totalPages = Math.ceil(totalItems / limit);

//   return { totalItems, Customer, totalPages, currentPage };
// };

module.exports = { findAll: findAll };
