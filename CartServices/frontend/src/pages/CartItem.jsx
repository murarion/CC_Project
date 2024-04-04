import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

const CartItem = (props) => {
    const { productname, productid, gender, price, brand, productimg } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    const handleInputChange = (e) => {
        const newValue = parseInt(e.target.value); // Parse input value to an integer
        if (!isNaN(newValue)) { // Check if the new value is a valid number
            updateCartItemCount(newValue, productid);
        }
    };

    return (
        <div className='cartItem'>
            <img src={productimg} alt={productname} />
            <div className='description'>
                <p>
                    <b>{productname}</b>
                </p>
                <p>
                    <b>Rs. {price}</b>
                </p>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(productid)}>-</button>
                    <input
                        type="number"
                        value={cartItems[productid] || ''} // Pass an empty string if value is undefined or NaN
                        onChange={handleInputChange}
                    />
                    <button onClick={() => addToCart(productid)}>+</button>
                </div>
            </div>
        </div>
    );
};

export { CartItem };