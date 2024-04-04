const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	productName: { type : String, required:true},
    productId:{ type : String, required:true},
    gender : { type : String, required : true},
    price:{ type : String, required:true},
    brand:{ type : String, required:true},
    productImgUrl:{ type : String, required:true},
    qty:{ type : Number, required:true}

})

module.exports = new mongoose.model("products", productSchema);

