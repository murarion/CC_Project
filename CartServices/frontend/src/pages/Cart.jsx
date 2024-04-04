import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import { CartItem } from './CartItem';
import './Cart.css';

const Cart = () => {
  const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h2>Your Cart Items</h2>
      </div>
      <div className="cartItems">
        {Object.keys(cartItems).map(productId => {
          console.log(typeof productId);
          const product = products.find(p => p.productid === productId);
          if (cartItems[productId] !== 0 && product) {
            console.log(cartItems);
            return <CartItem key={product.productid} data={product} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: Rs. {totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>Empty Cart :( Start Shopping now!</h1>
      )}
    </div>
  );
};

export default Cart;