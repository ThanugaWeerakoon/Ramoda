import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const cartItemsCount = cartItems.length;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-black shadow-lg fixed top-0 left-0 w-full z-50 py-6 px-6 text-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          RA-MÓDA
        </Link>

        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none text-2xl">
          {isMenuOpen ? '✖' : '☰'}
        </button>

        <div className={`absolute md:static bg-black md:bg-transparent w-full md:w-auto left-0 md:flex md:space-x-10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-16' : 'top-[-300px]'} md:top-0 flex flex-col md:flex-row font-medium`}>          
          <Link to="/" className="py-3 md:py-0 px-6 md:px-0 block md:inline hover:text-gray-400">HOME</Link>
          <div className="relative">
            <button onClick={toggleDropdown} className="py-3 md:py-0 px-6 md:px-0 block md:inline hover:text-gray-400">
              CATEGORIES ▾
            </button>
            <ul className={`md:absolute md:left-0 w-full md:w-40 bg-black md:bg-gray-800 text-white shadow-lg py-2 rounded-md mt-1 ${isDropdownOpen ? 'block' : 'hidden'}`}>
              <li><Link to="/men" className="block px-6 md:px-4 py-2 hover:bg-gray-700">Men</Link></li>
              <li><Link to="/women" className="block px-6 md:px-4 py-2 hover:bg-gray-700">Women</Link></li>
              <li><Link to="/dress" className="block px-6 md:px-4 py-2 hover:bg-gray-700">Dress</Link></li>
            </ul>
          </div>
          <Link to="/contact" className="py-3 md:py-0 px-6 md:px-0 block md:inline hover:text-gray-400">CONTACT</Link>
        </div>

        <Link to="/cart" className="relative flex items-center px-5">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-7 fill-current">
            <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
            <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
            <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
          </svg>
          {cartItemsCount > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0 rounded-full">
              {cartItemsCount}
            </div>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
