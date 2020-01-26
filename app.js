// Third party libraries

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();
// Require MongoDB connection and Models
require("./config/db");

// Initialize express
const app = express();
app.listen(process.env.PORT);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Import application routes
app.use(require('./routes/base'));






