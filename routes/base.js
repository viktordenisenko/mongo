const express = require('express');
const route = express.Router();

route.get("/",( req, res ) => {
    res.send("ok");
});

route.use('/admin', require('./admin/admin'));
route.use('/client', require('./client/client'));

module.exports = route;
