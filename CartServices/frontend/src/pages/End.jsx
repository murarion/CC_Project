import React from 'react';
// import './Home.css';
import { Link } from "react-router-dom";
// const logo = require('./pass_it_on.jpeg')
// const img4 = require('./img4.jpeg')

const End = () => {
    return (
        <div >
            <header>
                <h2 style={{ color: '#353535', fontSize: '80px', fontFamily: 'cursive', textAlign: 'left', marginBottom: '0px' }}>Confirmation</h2>
                {/* <img class="img1" src={logo} style={{ height: '100px', marginLeft: '1050px', marginTop: '-100px' }} /> */}
            </header>
            <hr style={{ height: '5px', backgroundColor: '#284B63', border: 'none' }} />

            <div style={{ backgroundColor: '#d9d9d9' }}>

                {/* <img class="img4" align="right" src={img4} style={{ height: '425px', width: '700px' }} /> */}
                <br />
                <div class="div 3" style={{ color: '#353535', fontFamily: 'cursive', fontSize: 'large', marginLeft: '100px' }}>
                    <h2>Congratulations!</h2>
                    <h2>Your order has been placed successfully.</h2>
                    <Link to="/display"><h2>Click here to continue shopping!</h2> </Link>
                </div>
            </div>
        </div>
    )
}
export default End;