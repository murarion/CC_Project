// Connect to MongoDB using mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/backend', { useNewUrlParser: true, useUnifiedTopology: true });

// Import the Mongoose model
const Product = require('C:/Murari_Docs/PESU/SEM6/CC/Project/backend/models/productsmodel');

// Create a new product instance
const newProduct = new Product({
    productname: "Jeans",
    productid: "123456",
    gender: "Male",
    price: 10000,
    brand: "Denim",
    productimg: "C:/Murari_Docs/PESU/SEM6/CC/Project/backend/assets/1.jpg",
    qty: 10
});

// Save the product to the database
newProduct.save()
    .then(() => {
        console.log('Product added successfully');
        mongoose.connection.close(); // Close the connection after adding the product
    })
    .catch(error => {
        console.error('Error adding product:', error);
        mongoose.connection.close(); // Close the connection in case of error
    });
