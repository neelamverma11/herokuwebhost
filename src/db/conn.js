const mongoose = require("mongoose");

// creating a database
mongoose .connect("mongodb://localhost:27017/dynamicweb", {
    useCreateIndex:true, 
    useNewUrlParser:true, 
    useUnifiedTopology:true
}).then(()=>{
    console.log("conncetion successfull");
}).catch((error)=>{
    console.log(error);
});