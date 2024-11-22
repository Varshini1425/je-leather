import React, { useState } from 'react';
import logo from "../assets/JE_Logo.png";
import { icons } from "../assets/icons";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState("false");
    const navItems = ["Home", "About", "Services", "Products","Contact"];

  return (
    <header className="fixed top-0 w-full bg-charcoal-dark bg-opacity-95 py-1 px-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center md:flex-row">
        {/* Logo or Brand Name */}
        <img 
          src={logo} 
          alt="Jothi Enterprises" 
          className="w-14 md:w-20 lg:w-24 xl:w-28 mb-1 items-center cursor-pointer" 
        />
        <button className="md:hidden ">
          <icons.IoMenu
            size={24}
            className="text-metallicGold text-3xl cursor-pointer justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </button>
        {/* Navigation Links */}
        <nav className="hidden md:block">
         <ul className='flex space-x-6'>
          {navItems.map((item) =>(
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-metallicGold hover:text-darkGreen transition duration-300">
                {item}
              </a>
            </li>
          ))}
         </ul>
        </nav>
      </div>
      {isMenuOpen && (
        <div className='md:hidden block text-metallicGold'>
          <ul className='py-2'>
            {navItems.map((item) =>(
              <li key={item} className='px-4 py-2'>
                <a href={`#${item.toLowerCase()}`} 
                className='block text-metallicGold hover:text-darkGreen  transition duration-300'
                onClick={()=>setIsMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
