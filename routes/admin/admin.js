const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.send("Admin Area");
});
route.use("/users", require('./users'));
route.use("/products", require("./products"));
route.use("/categories", require("./categories"));
route.use('/departments', require('./departments'));
route.use('/photos', require('./photos'));


module.exports = route;
