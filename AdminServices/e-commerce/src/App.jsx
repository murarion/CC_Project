import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./admin";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                
                    <Route path="/admin" element={<Admin/>} />
                    <Route path="/addproduct" element={<ProductForm/>} />	
                    <Route  path="/productlist" element={<ProductList/>} />
                    <Route  path="/productlist/:productId" element={<ProductList/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
