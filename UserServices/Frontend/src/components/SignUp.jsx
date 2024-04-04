import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [Data, setData] = useState({
        name: "",
        mailid: "",
        phno: "",
        password: ""
    });

    const handleChange = (e) => {
        setData({
            ...Data,
            [e.target.name]: e.target.value
        });
    };

    const handleSignup = async (e) => {
        // e.preventDefault();
        console.log("user data",Data) 
        await axios.post("http://localhost:4000/api/signup", Data).then(function (response) {
            if (response.data.redirect === '/') {
                alert("Signup successful");
                window.location = "/";
            } else if (response.data.redirect === '/signup') {
                alert("Signup not successful");
                window.location = "/signup";
            }
        }).catch(function (error) {
            console.log(error);
            window.location = "/login";
        });
        setData({
            name: "",
            mailid: "",
            phno: "",
            password: ""
        });
        console.log("inside",Data);
    };
    console.log("outside",Data);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">SignUp</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="usernameInput"
                        type="text"
                        placeholder="Enter your username"
                        name="name"
                        value={Data.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="emailInput"
                        type="email"
                        placeholder="Enter your email"
                        name="mailid"
                        value={Data.mailid}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                        Mobile No.
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="mobileInput"
                        type="tel"
                        placeholder="Enter your mobile number"
                        name="phno"
                        value={Data.phno}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="passwordInput"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={Data.password}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleSignup}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
