import React from "react";
import {useState}from "react"
import {useEffect} from "react"

import {Container,Row,Col} from 'react-bootstrap';

import CardGroup from "react-bootstrap/CardGroup";
import ProductCard from '../components/card'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Displayall = () =>{
	const [Data,setData] = useState([
	{
		productname:"",
		productid:"",
		gender:"",
		price:0,
		brand:"",
		productimg:""
		}]);
	useEffect(()=> {
		
		fetch("http://localhost:4000/api/display").then(res=>{
			if(res.ok){
				return res.json()
			}
		}).then(jsonRes=>setData(jsonRes));
		
	})
	
	return(
	
		<Container style={{ top: '131px',  left: '186px',  width: '1120px',  height: '796px',position:'absolute',display:'grid',gridTemplateColumns: 'auto auto auto',padding:'10px'}}>
		
		<Row sm="3">
		{Data.map((product)=>(
		
			<Col style={{backgroundColor: '#CAE250', border: '1px solid rgba(0, 0, 0, 0.8)', padding: '20px', fontSize: '30px', textAlign: 'center'}}>
			<ProductCard className="flex-fill" product={product} />
			</Col>
			
		))}
		
		</Row>
		</Container>
		
		
	);
};

function Displaybook()
{
	return(
	
	<div style={{  marginBottom: '50px'}}>
<Navbar/>
	<Displayall/>
<Footer/>
	</div>
	);
}

export default Displaybook;