const express = require('express');
const { registerRoute } = require('./routes/registerRoute');
require('dotenv').config();
const app = express();


//routes
app.use(express.json());
app.use("/api",registerRoute)


let port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log("the server is running on port " + port);
})
