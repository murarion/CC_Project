
//mongoose.connect("mongodb+srv://pallaviaro17:PAUFndnhqgQio6fv@cluster0.5ynjci8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//.then(()=>console.log("db connected"));
// mongoose.connect("mongodb://localhost:27017")
// .then(()=>console.log("db connected"));

const mongoose = require('mongoose')

mongoose.connect (process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("db connected"))
.catch(err => console.error("Error connecting to MongoDB:", err));