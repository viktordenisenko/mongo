// Thord party libraries

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config();
// Require MongoDB connection and Models
require("./config/db");


// Initialize express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.listen(process.env.PORT);

app.use(cors());

app.get("/",( req, res ) => {
    res.send("ok");
});
app.get("/users",(req,res) => {
    User.find({}, (err, users) => {
        res.json(users);
    });
});

app.get("/users/:userId",(req,res) => {
    const userId = req.params.userId;
 // User.findById(req.params.userId)
    User.findOne({_id: userId}, (err, users) => {
        res.json(users);
    });
});


app.post("/users", (req,res) => {
    const u = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    u.save().then(() => {
        res.json({
            message: "User Created"
        });
    });
});


