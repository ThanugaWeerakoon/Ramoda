import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const cartItemsCount = cartItems.length;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(true);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const closeDropdown = () => {
    setDropdownTimeout(setTimeout(() => setIsDropdownOpen(false), 300)); // Adjust delay as needed
  };

  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 w-full z-50 py-5">
      <div className="mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white items-left px-8">
            RA-MÓDA
          </Link>
        </div>

        <div className="flex-1 flex justify-center md:justify-start">
          <ul className="flex md:space-x-7">
            <li className="relative">
              <Link
                to="/"
                className=" text-white transition duration-300 ease-in-out hover:text-gray-500"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/shop"
                className=" text-white transition duration-300 ease-in-out hover:text-gray-500"
              >
                Shop
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={toggleDropdown}
              onMouseLeave={closeDropdown}
            >
              <span className="text-white transition duration-300 ease-in-out hover:text-gray-500 cursor-pointer">
                Categories
              </span>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-1 bg-black text-white shadow-lg py-2 rounded">
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <Link to="/men">Men</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700">
                    <Link to="/women">Women</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <Link
                to="/contact"
                className=" text-white transition duration-300 ease-in-out hover:text-gray-500 cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center ml-4 md:ml-6">
          <Link to="/cart" className="relative flex items-right px-5">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="h-7 md:h-7 fill-current text-white">
              <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
              <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
              <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
              <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
            </svg>
            {cartItemsCount > 0 && (
              <div className="absolute top-0 right-0 bg-red-900 text-white text-xs px-2 py-0 rounded-full">
                {cartItemsCount}
              </div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
