const express=require('express')
const app= express()
var cors = require('cors')
const productRoute = require("./routes/productRoutes");
app.use(cors()) 
require("./connection/connection");
app.use(express.json());
app.use('/api',productRoute);
app.listen(5000,()=>{
	console.log("port running on 5000");
});




