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
