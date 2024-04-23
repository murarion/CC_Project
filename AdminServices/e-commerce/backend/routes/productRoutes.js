const express = require('express');
const router = express.Router();
const productsmodel = require('../model/productsmodel');

router.post('/upload',async(req,res)=>{
	try {
		const data = req.body;
		console.log(data)
		const newbook = new productsmodel(data);
		await newbook.save().then(()=>{
			var redir = { redirect: "/" };
			return res.json(redir);
		});
		
 	}catch(error){
		console.log(error)
	}
})

router.get('/productlist', (req,res) => {
	try{
		productsmodel.find().then(founditems=>res.json(founditems));
	
	}
	catch(error){
	console.log(error);
	}
})

router.delete('/upload/:productid', async (req, res) => {
    try {
        const { productId } = req.params;
        const result = await productsmodel.findOneAndDelete({ productId: productId });
        if (result) {
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
