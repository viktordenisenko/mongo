const mongoose = require("mongoose");
// kanoume sindesi sthn vasi
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// dimourgia collection User
global.User = mongoose.model("User",{
    firstName: String,
    lastName: String,
    email: String,
});

global.Product = mongoose.model("Product",{
    category: mongoose.Types.ObjectId,
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


