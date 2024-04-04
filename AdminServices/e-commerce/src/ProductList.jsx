import React, { useState, useEffect } from 'react';
import './ProductList.css';

const ProductList = () =>{
	const [Data,setData] = useState([
	{
    productName:"",
    productId:"",
    gender:"male",
    price:"",
    brand:"",
    productImgUrl:"",
    qty:0
		}]);
	useEffect(()=> {
		
		fetch("http://localhost:5000/api/productlist").then(res=>{
			if(res.ok){
				return res.json()
			}
		}).then(jsonRes=>setData(jsonRes));
		
	})

    const handleDelete = async (productId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/upload/${productId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete product');
            }

        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };
  return (
    <>
        <div style={{ top: '131px', left: '186px', width: '1120px', height: '796px', position: 'absolute' }}>
            <h1>Items in Products List</h1>
            {Data.map((item) => (
                <div key={item.productId} className="product-item">
                <img src={item.productImgUrl} alt={item.productName} />
                    <div className="product-details">
                        <h3>{item.productName}</h3>
                        <p>Gender: {item.gender}</p>
                        <p>Price: {item.price}</p>
                        <p>Brand: {item.brand}</p>
                        <p>Quantity: {item.qty}</p>
                    </div>
                <button className="delete-button" onClick={() => handleDelete(item.productId)}>Delete</button>
                </div>
))}

        </div>
    </>
);
};

export default ProductList;
