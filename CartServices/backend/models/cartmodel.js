const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
	productname : { type : String, required : true},
	price : { type : Number , required : true},
	productimg : { type : String , required : true},
    qty : { type : Number, required : true}, // Assuming you're storing quantity in the cart
    size : { type : String},
    productid: { type: String, required: true } // Add productid field
})

module.exports = mongoose.model("cart", cartSchema); // Use singular naming convention for the model