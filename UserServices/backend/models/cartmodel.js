const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
	productname : { type : String, required : true},
	price : { type : Number , required : true},
	image : { type : String , required : true},
    qty : { type : Number, required : true},
    size : { type : String, required : true}
})

module.exports = new mongoose.model("cart",cartSchema);