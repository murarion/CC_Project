const router = require('express').Router();
const productModel = require('../models/productsmodel');




router.get('/display', (req,res) => {
	
	try{
		productModel.find().then(foundproducts=>res.json(foundproducts));
	
	}
	catch(error){
	console.log(error);
	}
})
router.get('/display/:id',async(req,res) =>{
	let products;
	const id=req.params.id;
	try{
		productModel.findById(id).then(foundproduct=>res.json(foundproduct));
	
	}
	catch(error){
	console.log(error);
	}
})
router.get('/searchres/:gender',async(req,res) =>{
	let products;
	const findgender=req.params.gender;
	
	try{
		productModel.find({gender:findgender},{'productname':1,'brand':1,'productimg':1}).then(foundproducts=>res.json(foundproducts));
		
 	}catch(error){
		console.log(error)
	};
	

})




module.exports = router;