import React from 'react';
import Logo from '../assets/logo.png'

const Navbar = () => {
    return (
       <nav className=' bg-gray-500 text-white'>
         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <img src={Logo} alt="Logo" />
            <div>
                <ul className="flex space-x-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
       </nav>
    );
};

export default Navbar;
