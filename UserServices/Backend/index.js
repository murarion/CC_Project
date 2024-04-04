const express  = require('express');
const app = express();
// const bookRoute = require("./routes/booksRoute");
const userRoute = require("./routes/userRoutes");
// const cartRoute = require("./routes/cartRoute");
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
require("./connection/connection");

//routes

app.use(express.json());
// app.use('/api',bookRoute);
app.use('/api',userRoute);	
// app.use('/api',cartRoute);	
app.listen(4000,()=>{
	console.log("port running on 4000");
});