const router = require('express').Router();
const cartModel = require('../models/cartmodel');

// Add to Cart
router.post('/addtocart', async (req, res) => {
    try {
        const data = req.body;
        const newCartItem = new cartModel(data);
        await newCartItem.save();
        return res.status(201).json({ success: true, message: 'Item added to cart successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Get all items in cart
router.get('/cart', async (req, res) => {
    try {
        const cartItems = await cartModel.find();
        return res.json(cartItems);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Get number of items in cart
router.get('/cart/no', async (req, res) => {
    try {
        const itemCount = await cartModel.countDocuments();
        return res.json(itemCount);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Get cart item by ID
router.get('/cart/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const cartItem = await cartModel.findById(id);
        if (!cartItem) {
            return res.status(404).json({ success: false, message: 'Cart item not found' });
        }
        return res.json(cartItem);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Delete cart item by ID
router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deletedItem = await cartModel.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ success: false, message: 'Cart item not found' });
        }
        return res.json({ success: true, message: 'Cart item deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;