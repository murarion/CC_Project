const express  = require('express');
const app = express();
const productRoute = require("./routes/productsRoute");
const userRoute = require("./routes/userRoutes");
const cartRoute = require("./routes/cartRoute");
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
require("./connection/conn");

//routes


app.use(express.json());
app.use('/api',productRoute);
app.use('/api',userRoute);	
app.use('/api',cartRoute);	
app.listen(4000,()=>{
	console.log("port running on 4000");
});