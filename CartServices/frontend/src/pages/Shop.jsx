// Shop.jsx

import React, { useState, useEffect } from 'react';
import { Product } from './Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/display');
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                throw new Error('Failed to fetch products');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1>Cloud Computing Project</h1>
            </div>
            <div className='products'>
                {products.map((product, index) => (
                    <div key={index} className='product'>
                        <div>
                        <Product data={product} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;