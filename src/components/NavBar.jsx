import React, { useState } from "react";
import logo from "../assets/JE_Logo.png";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <header className="fixed top-0 w-full bg-charcoal-dark bg-opacity-95 py-3 px-6 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-14 cursor-pointer" />

        <button
          className="md:hidden text-metallicGold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IoMenu size={30} />
        </button>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-metallicGold hover:text-darkGreen transition duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 bg-charcoal-dark w-full py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item} className="text-center">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-metallicGold hover:text-darkGreen"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
