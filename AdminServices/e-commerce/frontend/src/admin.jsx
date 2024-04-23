import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate('/addproduct');
    };

    const handleDeleteProduct = () => {
        navigate('/productlist');
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <button onClick={handleAddProduct}>Add Product</button>
            <button onClick={handleDeleteProduct}>Delete Product</button>
        </div>
    );
};

export default Admin;
