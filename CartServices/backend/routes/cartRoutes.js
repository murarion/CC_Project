const router = require('express').Router();
const cartModel = require('../models/cartmodel');


//post request
router.post('/addtocart',async(req,res)=>{
	try {
		const data = req.body;
		const newitem = new cartModel(data);
		await newitem.save().then(()=>{
			var redir = { redirect: "/" };
			return res.json(redir);
		});
		
	}catch(error){
		console.log(error);
		var redir = { redirect: '/cart'};
        return res.json(redir);
	}
})


router.get('/cart', (req,res) => {
	try{
		cartModel.find().then(founditems=>res.json(founditems));
	
	}
	catch(error){
	console.log(error);
	}
})

router.get('/cart/no', (req,res) => {
	try{
		cartModel.find().then(founditems=>res.json(founditems.length));
	
	}
	catch(error){
	console.log(error);
	}
})


router.get('/cart/:id',async(req,res) =>{
	let books;
	try{
		productsmodel.findById(id).project({'productname':1,'price':1,'size':1,'productimg':1}).then(foundbook=>res.json(foundbook));
	
	}
	catch(error){
	console.log(error);
	}
})

//delete item by id
router.delete('/delete/:id', async(req,res)=>{
	const id = req.params.id;
	try{
		await cartModel.findByIdAndDelete(id).then(()=> {
		var redir = { redirect: "/" };
			return res.json(redir);		})
	}catch(error)
	{
		console.log(error);
	}
})

module.exports = router ;