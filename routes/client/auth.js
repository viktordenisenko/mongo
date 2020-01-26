const express = require('express');
const route = express.Router();
const AuthController = require('../../controllers/AuthController');

/*
route.get('/', (req, res) => {
    res.send('wprks');
});*/

route.post("/login", AuthController.login);


module.exports = route;
