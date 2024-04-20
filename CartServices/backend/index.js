const express  = require('express');
const app = express();

const productRoute = require("./routes/productRoutes");
const cartRoute = require("./routes/cartRoutes");
const userRoute = require("./routes/userRoutes");

const mongoose = require('mongoose');
const cors = require('cors');
mongoose.set('strictQuery', true);

app.use(cors()) 
require("./connection/connection");

app.use(express.json());
	
app.use('/api', userRoute);
app.use('/api', productRoute);
app.use('/api', cartRoute);

app.listen(4000,()=>{
	console.log("Server running on 4000!");
});