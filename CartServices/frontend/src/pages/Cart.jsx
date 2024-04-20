import React from "react";
import { useState } from "react"
import { useEffect } from "react"
import { Container, Row, Col } from 'react-bootstrap';
import CartCard from '../components/CartCard';
import { Link } from "react-router-dom";
import './Cart.css'

const Cartdisplay = () => {
  const [Data, setData] = useState([
    {
      productname: "",
      price: 0,
      productimg: "",
      qty: 0,
      size: "S",
      productid: ""
    }]);
  useEffect(() => {

    fetch("http://localhost:4000/api/cart").then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => setData(jsonRes));

  })


  return (
    <>
      <Container style={{ top: '131px', left: '186px', width: '1120px', height: '796px', position: 'absolute' }}>
        <h2> Your Cart : </h2>
        <Row>
          {Data.map((item) => (
            <Col md={4}>
              <CartCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>

      <Link to='/end'>
        <button style={{ left: '1000px', color: '#3C6E71', bottom: '150px', position: 'absolute', fontWeight: 'bold', fontSize: '20px', backgroundColor: '#FFFFFF' }} className="b2">
          Place Order
        </button>
      </Link>

    </>
  );
};

function Cart() {
  return (
    <div>
      <Cartdisplay />
    </div>
  );
}

export default Cart;


// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ShopContext } from './ShopContext';
// import { CartItem } from './CartItem';
// import './Cart.css';

// const Cart = () => {
//   const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
//   const totalAmount = getTotalCartAmount();
//   const navigate = useNavigate();

//   return (
//     <div className="cart">
//       <div>
//         <h2>Your Cart Items</h2>
//       </div>
//       <div className="cartItems">
//         {Object.keys(cartItems).map(productId => {
//           console.log(typeof productId);
//           const product = products.find(p => p.productid === productId);
//           if (cartItems[productId] !== 0 && product) {
//             console.log(cartItems);
//             return <CartItem key={product.productid} data={product} />;
//           }
//           return null;
//         })}
//       </div>
//       {totalAmount > 0 ? (
//         <div className="checkout">
//           <p>Subtotal: Rs. {totalAmount}</p>
//           <button onClick={() => navigate('/')}>Continue Shopping</button>
//           <button>Checkout</button>
//         </div>
//       ) : (
//         <h1>Empty Cart :( Start Shopping now!</h1>
//       )}
//     </div>
//   );
// };

// export default Cart;
