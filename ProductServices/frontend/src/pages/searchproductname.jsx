import {Link} from "react-router-dom";

import React from "react";
import {useState}from "react"
import {useEffect} from "react"
import axios from 'axios'
import {Container,Row,Col} from 'react-bootstrap';
import CardGroup from "react-bootstrap/CardGroup";
import ProductCard from '../components/card'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Search = () =>{
	

		
	const [name, setSearchTerm] = useState("")

	
		const change=(e)=>
		{
		
			console.log("target val")
      		 console.log(e.target.value)
			setSearchTerm(e.target.value)
		}
				console.log("name")
      		 console.log(name)
	
	return(
	   
		<div style={{ top: '131px',  left: '186px',  width: '1120px',  height: '796px',position:'absolute'}}>
	
        <input    id="search" type="text"  placeholder="Search book by name"     name="name" onChange =  {change}  style={{fontSize:'30px'}}/>
		
		 		 <Link to={'searchname/' + name} >< button className = "b2" style={{fontSize:'30px'}} >Search</button></Link>

		
			
		</div>
		 

	);
};


function Searchproductname()
{
	return(
	<div>
	<Navbar/>
	<Search/>
	<Footer/>
	</div>
	);
}

export default Searchproductname;