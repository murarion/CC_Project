import React from "react";
import {useState}from "react"
import {useEffect} from "react"
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
//import "./Book_details.css";
import axios from 'axios'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//let bookImage = require('./product_demo.jpg')
const ProductDetail = () =>{
	var pid=useParams().id
	

const [Data,setData] = useState([
	{
		productname:"",
		productid:"",
		gender:"",
		price:0,
		brand:"",
		productimg:""
		}]);
			
		console.log("in use effect")
		console.log(pid)
		fetch(`http://localhost:4000/api/display/${pid}`).then(res=>{
			if(res.ok){
				return res.json()
			}
		}).then(jsonRes=>setData(jsonRes))
		
	
	console.log("data")
	console.log(Data)
	const submit = async(e)=>{
		e.preventDefault();
		 await axios
		 .post("http://localhost:4000/api/addtocart",Data)
		 .then(function (response) {
            console.log(response)
                       })
        .catch(function(error) {
			
           console.log(error)
        })
	}
	
	/*
	const del = async(e)=>{
		e.preventDefault();
		 await axios
		 .delete(`http://localhost:4000/api/delete/${bid}`,Data)
		 .then(function (response) {
           if (response.data.redirect == '/') {
                window.location = "/display"
            }
            
            
        })
        .catch(function(error) {
           console.log(error)
        })
	}
	*/
    return(
        <div>
	

          <img
             src={Data.productimg}
            alt="image"
            className="book-image"/>
            <div className = "info">

            </div>  
            <button className="btn1" onClick={submit}>Add To Cart</button>  
			<br/><Link to="/display"><button className="btn2"> Go back to display all products</button></Link>	
	
        </div>
    )};

function ProductDet()
{
	return(
	<div>
	<Navbar/>
	<ProductDetail/>
	<Footer/>
	</div>
	);
}

export default ProductDet;
