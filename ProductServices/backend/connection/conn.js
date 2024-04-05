const mongoose = require('mongoose')

//mongoose.connect("mongodb+srv://pallaviaro17:PAUFndnhqgQio6fv@cluster0.5ynjci8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//.then(()=>console.log("db connected"));
mongoose.connect("mongodb://localhost:27017")
.then(()=>console.log("db connected"));

