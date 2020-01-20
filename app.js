// Third party libraries

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();
// Require MongoDB connection and Models
require("./config/db");

// require Controllers
const UsersController = require("./controllers/UsersController");
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


// User routes ****************************************************
app.get("/users", UsersController.list);
app.get("/users/:userId", UsersController.getOne);
app.post("/users", UsersController.create );
app.delete("/users/:userId", UsersController.deleteUser );
app.put("/users/:userId", UsersController.update );


// Product routes **********************************************


app.get("/products", ProductsController.list);
app.get("/products/:productId", ProductsController.getOne);
app.post("/products", ProductsController.create );
app.delete("/products/:productId", ProductsController.deleteProduct );
app.put("/products/:productId", ProductsController.update );
app.get("/products/category/:categoryId",ProductsController.listByCategory);



// Category routes  *******************************************

app.get("/categories", CategoriesController.list);
app.get("/categories/:categoryId", CategoriesController.getOne);
app.post("/categories", CategoriesController.create );
app.delete("/categories/:categoryId", CategoriesController.deleteCategory );
app.put("/categories/:categoryId", CategoriesController.update );

//Department routes **********************************

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
