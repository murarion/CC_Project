import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import DisplayProd from "./pages/Display";
import ProdDet from './pages/ProdDetails';
import End from './pages/End';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/display" element={<DisplayProd />} />
          <Route path="/display/:id" element={<ProdDet />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/end" element={<End />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;