import './App.css';

import ProductDet from './pages/Product_details';
import Displayproduct from "./pages/displayproducts";
import Searchproduct from "./pages/searchproduct";
import Searchproductname from "./pages/searchproductname";
import Searchingproduct from "./pages/searchingproduct";
import Searchingproductname from "./pages/searchingproductname";
import React from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter as Router,   
  Routes, 
  Route
} from "react-router-dom";

function App() {
  return (
  <Router>
  
	<Routes>
	
		<Route path="/" element={<Displayproduct/>}/>

		<Route path="/display" element={<Displayproduct/>}/>
		<Route path="/display/product/:id" element={<ProductDet/>}/>
		<Route path="/searchgender" element={<Searchproduct/>} />
		<Route path="/searchname" element={<Searchproductname/>} />
		<Route path="/searchgender/searchgender/:id" element={<Searchingproduct/>} />
		<Route path="/searchname/searchname/:id" element={<Searchingproductname/>} />
		
	</Routes>
  </Router>

  );
}

export default App;
