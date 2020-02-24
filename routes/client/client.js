const express = require('express');
const route = express.Router();
const CategoriesController = require('../../controllers/CategoriesController');


route.get("/", (req,res) => {
    res.send('works');
});

route.use('/auth', require('./auth'));
route.get('/categories', CategoriesController.list);


module.exports = route;
