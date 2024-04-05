const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: { type : String, required:true},
    mailid:{ type : String, required:true},
    phno : { type : String, required : true},
    password:{ type : String, required:true}

})

module.exports = new mongoose.model("users", userSchema);