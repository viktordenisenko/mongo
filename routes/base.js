const express = require('express');
const route = express.Router();

app.get("/admin",( req, res ) => {
    res.send("Admin Area");
});

route.use('/admin', require ('./admin/admin'));
route.use('/client', require ('./client/client'));

module.exports = route;
