import React, { useState } from "react";
import logo from "../assets/JE_Logo.png";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Product Showcase", "Contact"];

  const handleScroll = (id) => {
    const target = document.getElementById(id.toLowerCase().replace(" ", "-"));
    if (target) {
      const offset = 150; // Adjust for fixed header height
      const targetPosition = target.getBoundingClientRect().top;
      const scrollPosition = window.pageYOffset;

      // Smoothly scroll to calculated position
      window.scrollTo({
        top: scrollPosition + targetPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-charcoal-dark bg-opacity-95 py-3 px-6 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-14 cursor-pointer hover:scale-110 "onClick={() => handleScroll("Home")} />

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-metallicGold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <IoMenu size={30} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              onClick={() => handleScroll(item)}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-metallicGold hover:text-transparent hover:bg-gradient-to-tl hover:from-white hover:to-darkGreen hover:bg-clip-text transform hover:scale-110 transition duration-300"            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 bg-charcoal-dark w-full py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item} className="text-center">
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="block text-metallicGold hover:text-darkGreen transition duration-300"
                    onClick={() => {
                      handleScroll(item);
                      setIsMenuOpen(false);
                    }}
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
