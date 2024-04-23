import React, { useState } from "react";
import "./ProductForm.css"
import axios from 'axios'

function ProductForm() {

    const [Data,setData] = useState(
        {
            productName:"",
            productId:"",
            gender:"male",
            price:"",
            brand:"",
            productImgUrl:"",
            qty:0
            })
            const change=(e)=>
            {
                const {name,value}=e.target
                setData({...Data,[name]:value})
            }
        
        const handleSubmit = async(e)=>{
            e.preventDefault();
             await axios
             .post("http://localhost:5000/api/upload",Data)
             .then(function (response) {
                // if (response.data.redirect == '/') {
                //     window.location = "/ProductList"
                // } else if (response.data.redirect == '/uploadbook'){
                //     window.location = "/uploadbook"
                // }
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            })
             setData(
             {
                productName:"",
                productId:"",
                gender:"male",
                price:"",
                brand:"",
                productImgUrl:"",
                qty:0
                    }
             )
        }
        console.log(Data);

    return (
        <div className="ProductForm">
            <h1>Product Form</h1>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="productName">Product Name</label>
                    <input
                        type="text"
                        name="productName"
                        id="productName"
                        value = {Data.productName}
			            onChange={change}
                        placeholder="Enter Product Name"
                        required
                    />
                    <label htmlFor="productId">Product ID</label>
                    <input
                        type="text"
                        name="productId"
                        id="productId"
                        value = {Data.productId}
			            onChange={change}
                        placeholder="Enter Product ID"
                        required
                    />
                    <label htmlFor="gender">Gender*</label>
                    <select
                        name="gender"
                        id="gender"
                        value = {Data.gender}
			            onChange={change}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="price">Price*</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value = {Data.price}
			            onChange={change}
                        placeholder="Enter Price"
                        required
                    />
                    <label htmlFor="brand">Brand</label>
                    <input
                        type="text"
                        name="brand"
                        id="brand"
                        value = {Data.brand}
			            onChange={change}
                        placeholder="Enter Brand"
                    />
                    <label htmlFor="productImgUrl">
                        Product Image URL
                    </label>
                    <input
                        type="text"
                        name="productImgUrl"
                        id="productImgUrl"

                        value = {Data.productImgUrl}
			            onChange={change}
                        placeholder="Enter Product Image URL"
                    />
                    <label htmlFor="qty">Quantity</label>
                    <input
                        type="number"
                        name="qty"
                        id="qty"
                        value = {Data.qty}
			            onChange={change}
                        placeholder="Enter Quantity"
                    />

                    <button
                        type="submit"
                        value="Submit"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default ProductForm;
