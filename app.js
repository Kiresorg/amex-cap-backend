const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// const whitelist = ["http://localhost:3000", "https://dronology.herokuapp.com"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

// app.use(cors(corsOptions));
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Amex CSR API." });
});

require("./src/routers/address.route")(app);
require("./src/routers/product.route")(app);
require("./src/routers/customer.route")(app);
require("./src/routers/order.route")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

