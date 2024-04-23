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
        <button className="b2">
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