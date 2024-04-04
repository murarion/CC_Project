const express  = require('express');
const app = express();

const mongoose = require('mongoose');
const path = require('path');
const productRoute = require("./routes/productsRoute");
const cors = require('cors');

mongoose.set('strictQuery', true);

const userRoute = require("./routes/userRoutes");
app.use(cors()) 
require("./connection/connection");

app.use(express.json());
	
app.use('/api', userRoute);

app.listen(4000,()=>{
	console.log("Server running on 4000!");
});

app.use('/api', productRoute);
