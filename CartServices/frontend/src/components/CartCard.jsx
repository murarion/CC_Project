import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { Card, Button, Row, Col } from 'react-bootstrap';
import './CartCard.css';
import axios from 'axios'

const CartCard = ({ item }) => {
    var pid = item._id
    console.log(pid)
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

        fetch(`http://localhost:4000/api/cart`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setData(jsonRes))

    })

    const del = async (e) => {
        e.preventDefault();
        await axios
            .delete(`http://localhost:4000/api/delete/${pid}`)
            .then(function (response) {
                if (response.data.redirect == '/') {
                    alert("Product has been deleted from cart")
                    window.location = "/cart"
                }
                else if (response.data.redirect == '/cart') {
                    alert("Product could not be deleted from cart")
                    window.location = "/cart"

                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    return (
        <Row >
            <Col md={4}>
                <Card style={{ width: '45rem', marginTop: "10px" }}>
                    <Card.Img variant="top" src={item.productimg} style={{ paddingBottom: '40px', width: '170px', float: 'left', height: '210px' }} />
                    <Card.Body style={{ paddingBottom: '40px', left: '40px', position: 'relative' }}>
                        <b>
                            <Card.Title style={{ fontSize: '30px', color: '#284B63' }}>{item.productname}</Card.Title>
                        </b>
                        <Card.Text style={{ fontSize: '20px', color: '#3C6E71' }}>
                            Size : S
                            <br />
                            Price : Rs. {item.price}
                            <br />
                            <button onClick={del} className="b1"> Delete </button>
                            <br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}



export default CartCard;