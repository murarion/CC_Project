const express = require('express');
const router = express.Router();
const Product = require('../models/productsmodel');

// Endpoint to fetch all products
router.get('/display', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/display/:id', async (req,res) =>{
	let products;
	const id = req.params.id;
	try{
		Product.findById(id).then(foundproduct=>res.json(foundproduct));
	
	}
	catch(error){
	console.log(error);
	}
})


module.exports = router;