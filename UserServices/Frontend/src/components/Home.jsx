import React from 'react';
import Navbar from './Navbar';
const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            
            <header className="bg-gray-900 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">E-Commerce</h1>
                    <nav>
                        <ul className="flex">
                            <li className="mr-6"><a href="#" className="hover:text-gray-400">Home</a></li>
                            <li className="mr-6"><a href="#" className="hover:text-gray-400">Products</a></li>
                            <li className="mr-6"><a href="#" className="hover:text-gray-400">About</a></li>
                            <li className="mr-6"><a href="#" className="hover:text-gray-400">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* Main content */}
            <div className="container mx-auto py-8">
              <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Product card example */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Product Title</h3>
                    <p className="text-gray-700 mb-2">Description of the product goes here.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">$99.99</span>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add to Cart</button>
                    </div>
                  </div>
                </div>
                {/* End of product card example */}
                {/* Repeat the product card for additional items */}
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Product Title</h3>
                    <p className="text-gray-700 mb-2">Description of the product goes here.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">$99.99</span>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img src="https://via.placeholder.com/300" alt="Product" className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Product Title</h3>
                    <p className="text-gray-700 mb-2">Description of the product goes here.</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">$99.99</span>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-4 mt-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 E-Commerce. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
