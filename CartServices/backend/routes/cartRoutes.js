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

// const router = require('express').Router();
// const cartModel = require('../models/cartmodel');

// // Add to Cart
// router.post('/addtocart', async (req, res) => {
//     try {
//         const data = req.body;
//         const newCartItem = new cartModel(data);
//         await newCartItem.save();
//         return res.status(201).json({ success: true, message: 'Item added to cart successfully' });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// });

// // Get all items in cart
// router.get('/cart', async (req, res) => {
//     try {
//         const cartItems = await cartModel.find();
//         return res.json(cartItems);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// });

// router.get('/cart/no', async (req, res) => {
//     try {
//         const itemCount = await cartModel.countDocuments();
//         return res.json(itemCount);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// });

// router.get('/cart/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const cartItem = await cartModel.findById(id);
//         if (!cartItem) {
//             return res.status(404).json({ success: false, message: 'Cart item not found' });
//         }
//         return res.json(cartItem);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: 'Internal server error' });
//     }
// });

// module.exports = router;