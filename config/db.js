const mongoose = require("mongoose");
const bcrypt = require('mongoose-bcrypt');

// kanoume sindesi sthn vasi
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// dimourgia collection User


const userSchema = mongoose.Schema({
    firstName: {
        type : String , required : true
    } ,
    lastName: {
        type : String , required: true
    },
    password: {
        type: String , required: true , bcrypt: true
    },
    email: {
        type : String , required: true
    }
},
    {
    timestamps: true
    }
);
userSchema.plugin(bcrypt);
global.User = mongoose.model("User", userSchema);


global.Product = mongoose.model("Product",{
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    title: String,
    miniDescription: String,
    description: String,
    price: Number,
    sale: Number,
    photo: String,

});
global.Category = mongoose.model("Category",{
    title: String
})
global.Department = mongoose.model("Department",{
    name: String,
    latitude: Number,
    longitude: Number
});
global.Photo = mongoose.model("Photo", {
   url : String,
   sort: String
});
