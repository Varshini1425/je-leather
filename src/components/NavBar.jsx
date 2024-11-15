import React, { useState } from 'react';
import logo from "../assets/JE_Logo.png";
import {icons} from "../assets/icons";

const Navbar = () => {

    const[isMenuOpen, setIsMenuOpen] = useState("false");

  return (
    <nav className="fixed top-0 w-full bg-charcoal-dark bg-opacity-100 py-7 px-8 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center md:flex-row ">
        {/* Logo or Brand Name */}
       <img src={logo} alt="Jothi Enterprises" className='w-28 md:w-32 lg:w-40 xl:w-48 mb-4 items-center cursor-pointer' href="/" />
        <div className='md:hidden justify'>
        <icons.IoMenu
          size={24}
           className="text-metallicGold text-3xl cursor-pointer justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        </div>
        {/* Navigation Links */}
        <div className={`space-x-6 items-center ${isMenuOpen ? 'hidden' : 'block'} md:flex`}>
          <a href="#home" className="text-metallicGold hover:text-darkGreen transition duration-300">Home</a>
          <a href="#about" className="text-metallicGold hover:text-darkGreen transition duration-300">About Us</a>
          <a href="#services" className="text-metallicGold hover:text-darkGreen transition duration-300">Services</a>
          <a href="#products" className="text-metallicGold hover:text-darkGreen transition duration-300">Product Showcase</a>
          <a href="#contact" className="text-metallicGold hover:text-darkGreen transition duration-300">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
