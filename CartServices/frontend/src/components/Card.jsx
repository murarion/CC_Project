import React from 'react'
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from 'react-bootstrap';

const ProdCard = ({ product }) => {
    return (
        <Card>
            <Card.Img variant="top" src={product.productimg} style={{ width: '150px', height: '150px' }} />
            <Card.Body>
                <Card.Title>{product.productname}</Card.Title>
                <Card.Text>
                    Gender: {product.gender}
                    Price: {product.price}
                </Card.Text>
                <Link to={'book/' + product.productid} > {/* Update to use productid */}
                    <Button variant="primary">
                        <div style={{ color: 'black', fontSize: '20px', width: '60px', height: '20px', borderRadius: '100px' }}>
                            View
                        </div>
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}


export default ProdCard;