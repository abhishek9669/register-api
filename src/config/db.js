const { mongoose } = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.URL).then(d=>{
    console.log("coonect")

}).catch(err=>{
    console.log("error: " + err)

})
exports.mongoose=mongoose;