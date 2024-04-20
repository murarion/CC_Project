import React from 'react'

import PropTypes from 'prop-types'

import {Link} from "react-router-dom";
import {Card,Button,Row,Col} from 'react-bootstrap'

const ProductCard = ({product}) => {
  return (
 
          <Card  >
 

      <Card.Img variant="top" src={product.productimg} style={{width:'150px' ,height:'150px'}}/>
      <Card.Body>
        <Card.Title>{product.productname}</Card.Title>
        <Card.Text>
		

		<p>Size : XS, S , M , L , XL </p>
		</Card.Text>
		          <p>Brand : {product.brand}</p>
		<p>Gender : {product.gender}</p>
        <Link to={'display/product/' + product._id} ><Button variant="primary"><div style={{color:'black',fontSize:'20px',width:'60px',height:'20px',borderRadius:'100px'}}>View</div></Button></Link>
      </Card.Body>
    </Card>
  )
}



export default ProductCard;
