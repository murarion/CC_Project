import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import Navbar from './components/Navbar'
import ShopContextProvider from './pages/ShopContext'

const App = () => {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

export default App;
