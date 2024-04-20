import React from "react";
import {useState}from "react"
import {useEffect} from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";

import Searchbar from "./searchproductname"
import {Container,Row,Col} from 'react-bootstrap';
import CardGroup from "react-bootstrap/CardGroup";
import SearchCard from '../components/searchcard'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const DispSearch = () =>{
	const findname=useParams().id
	console.log(findname)
	const [Data,setData] = useState([
	{
	productname: "",
    brand: "",
    productimg: ""
		}]);
	
		console.log(Data)
		fetch(`http://localhost:4000/api/searchname/${findname}`).then(res=>{
			if(res.ok){
				return res.json()
			}
		}).then(jsonRes=>setData(jsonRes));
		
	
	
	
	return(
		
		<Container style={{ top: '231px',  left: '186px',  width: '1120px',  height: '796px',position:'absolute'}}>
		
		<Row sm="3">
		{Data.map((product)=>(
		
			<Col>
			<SearchCard product={product} />
			</Col>
			
		))}
		
		</Row>
		</Container>
		
		
	);
};

function Searchingproductname()
{
	return(
	<div style={{  marginBottom: '50px'}}>
	<Navbar/>
	<Searchbar/>
	<DispSearch/>

	</div>
	);
}

export default Searchingproductname;