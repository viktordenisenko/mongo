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


// Initialize express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.listen(process.env.PORT);

app.use(cors());

app.get("/",( req, res ) => {
    res.send("ok");
});


// sta routes pote den vazoyme parentheseis gia na min ekteleitai i function / tha ekteleitai mono otan tha mpainei kapoios sta route
app.get("/users", UsersController.list);

app.get("/users/:userId", UsersController.getOne);


app.post("/users", UsersController.create );

app.delete("/users/:userId", UsersController.deleteUser );

app.put("/users/:userId", UsersController.update );

// Product routes ******************************************************

app.get("/products", ProductsController.list);

app.get("/products/:productId", ProductsController.getOne);


app.post("/products", ProductsController.create );

app.delete("/products/:productId", ProductsController.deleteProduct );

app.put("/products/:productId", ProductsController.update );

app.get("/products/category/:categoryId",ProductsController.listByCategory);

// Category routes***********************************************************

app.get("/category", CategoriesController.list);

app.get("/category/:categoryId", CategoriesController.getOne);


app.post("/category", CategoriesController.create );

app.delete("/category/:categoryId", CategoriesController.deleteCategory );

app.put("/category/:categoryId", CategoriesController.update );


