import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
import './ProdDetails.css';

const ProductDetail = () => {
    const pid = useParams().id;
    const [Data, setData] = useState({
        productname: "",
        productid: "",
        gender: "",
        price: 0,
        brand: "",
        size: "S",
        productimg: "",
        qty: 0
    });

    useEffect(() => {
        fetch(`http://localhost:4000/api/display/${pid}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(jsonRes => setData(jsonRes));
    }, []);

    const submit = async (e) => {
        e.preventDefault();
        console.log(Data);
        await axios.post("http://localhost:4000/api/addtocart", Data)
            .then(function (response) {
                if (response.data.redirect === '/') {
                    alert("Product added to cart");
                    window.location = "/display";
                } else {
                    alert("Product exists in cart");
                    window.location = "/display";
                }
            })
            .catch(function (error) {
                alert("Error adding product to cart: " + error.message);
                console.log(error);
            });
    };

    return (
        <div className="container">
            <img src={Data.productimg} alt="image" className="book-image" />
            <div className="info">
                <p>{Data.productname}</p>
                <p>Gender: {Data.gender}</p>
                <p>Price: {Data.price}</p>
                <p>Brand: {Data.brand}</p>
            </div>
            <div className="btn-container">
                <button className="btn1" onClick={submit}>Add To Cart</button>
                <Link to="/display">
                    <button className="btn2">Display All Products</button>
                </Link>
            </div>
        </div>
    );
};

function ProdDet() {
    return (
        <div>
            <ProductDetail />
        </div>
    );
}

export default ProdDet;