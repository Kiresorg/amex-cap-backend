const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our CSR API! by BILL" });
});
require("./src/routers/address.route")(app);
require("./src/routers/product.route")(app);
require("./src/routers/customer.route")(app);
require("./src/routers/order.route")(app);
module.exports = app;