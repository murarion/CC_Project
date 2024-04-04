const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	productname: { type: String, required: true },
    productid: { type: String, required: true },
    gender: { type: String, required: true },
    price: { type: Number, required: true }, // Change type to Number
    brand: { type: String, required: true },
    productimg: { type: String, required: true },
    qty: { type: Number, required: true }
});

module.exports = mongoose.model("product", productSchema); // Use singular naming convention for the model