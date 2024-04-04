import React from 'react';
import logo from './images/cclogo.png';
import logotext from './images/cctextlogobg.png';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-white py-4 px-6">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-10 h-10" />
                <img src={logotext} alt="Logo" className="w-30 h-20" />
                {/* <h1 className="text-white text-lg ml-2">Ecommerce Website</h1> */}
            </div>
            <div className="flex items-center">
                <div>
                    <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-black hover:text-gray-300">Mens</a>
                    </li>
                    <li>
                        <a href="#" className="text-black hover:text-gray-300">Womens</a>
                    </li>
                    <li>
                        <a href="#" className="text-black hover:text-gray-300">Kids</a>
                    </li>
                    <li>
                        <a href="#" className="text-black hover:text-gray-300">Offers</a>
                    </li>
                </ul>
                </div>
                <div>
                    <button className="ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16M4 12h16m-7 8h4a2 2 0 002-2v-1a2 2 0 00-2-2H7a2 2 0 00-2 2v1a2 2 0 002 2z" />
                    </svg>
                </button>
                <button className="ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16M4 12h16m-7 8h4a2 2 0 002-2v-1a2 2 0 00-2-2H7a2 2 0 00-2 2v1a2 2 0 002 2z" />
                    </svg>
                </button> 
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;