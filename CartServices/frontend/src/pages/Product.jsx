// Product.jsx

import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

const Product = ({ data }) => {
    const { productname, productid, price, gender, brand, productimg } = data;
    const {addToCart, cartItems} = useContext (ShopContext);

    const cartItemAmount = cartItems[productid]

    return (
        <div style={{ textAlign: 'center' }}>
            <img src={productimg} alt={productname} />
            <div className='description'>
                <p>
                    <b>{productname}</b>
                </p>
                <p>Rs. {price}</p>
                <p>{gender}</p>
                <p>{brand}</p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(productid)}>
                Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
            </button>
        </div>
    );
};

export { Product };