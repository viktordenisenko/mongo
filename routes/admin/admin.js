const express = require('express');
const route = express.Router();

route.use('/admin', require ('./admin/admin'));
route.use('/client', require ('./client/client'));

module.exports = route;
