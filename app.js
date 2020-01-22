// Third party libraries

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();
// Require MongoDB connection and Models
require("./config/db");

// require Controllers

const ProductsController = require("./controllers/ProductsController");
const CategoriesController = require("./controllers/CategoriesController");
const DepartmentsController = require("./controllers/DepartmentsController");
const PhotosController = require("./controllers/PhotosController");


// Initialize express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.listen(process.env.PORT);

app.use(cors());

app.get("/",( req, res ) => {
    res.send("ok");
});


// sta routes pote den vazoyme parentheseis gia na min ekteleitai
// i function / tha ekteleitai mono otan tha mpainei kapoios sta routes

// User routes
app.use('/users', require('./routes/admin/users'));


// Product routes *******************admin***************************
app.use('/products', require ('./routes/admin/products'));




// Category routes  ******************admin*************************

app.get("/categories", CategoriesController.list);
app.get("/categories/:categoryId", CategoriesController.getOne);
app.post("/categories", CategoriesController.create );
app.delete("/categories/:categoryId", CategoriesController.deleteCategory );
app.put("/categories/:categoryId", CategoriesController.update );

//Department routes ******************admin****************

app.get("/departments", DepartmentsController.list);
app.post("/departments", DepartmentsController.create);
app.get("/departments/:departmentId", DepartmentsController.getOne);
app.delete("/departments/:departmentId", DepartmentsController.deleteDep);
app.put("/departments/:departmentId", DepartmentsController.updateDepartment);

// Photos routes  ******************************************

app.get("/photos", PhotosController.list);
app.post("/photos", PhotosController.createPhoto);
app.delete("/photos/:photoId", PhotosController.deletePhoto);
app.get("/photos/:photoId", PhotosController.getOne);
app.put("/photos/:photoId", PhotosController.updatePhoto);
