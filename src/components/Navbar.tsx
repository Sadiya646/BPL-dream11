import React, { useState } from 'react';
import Logo from '../assets/logo.png'

const Navbar = ({coin}:{coin:number}) => {
    
    return (
       <nav className=' bg-gray-500 text-white'>
         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <img src={Logo} alt="Logo" />
            <div className='flex gap-8'>
                <ul className="flex space-x-4 items-center">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <strong className='font-bold text-3xl'>{coin}</strong>
            </div>
        </div>
       </nav>
    );
};

export default Navbar;
