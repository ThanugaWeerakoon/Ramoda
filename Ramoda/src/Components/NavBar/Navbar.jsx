import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import cartIcon from '../../assets/cart.png';
import profileIcon from '../../assets/profile.png';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const cartItemsCount = cartItems.length;

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-black">
            LIYO FASHION
          </Link>
          <p className="hidden md:block text-sm text-black ml-2">MODERN FASHION FROM US TO YOU</p>
        </div>

        <div className="flex items-center">
          <ul className="flex space-x-4 md:space-x-6">
            <li className="relative">
              <Link
                to="/"
                className="uppercase text-lg md:text-xl font-bold text-black transition duration-300 ease-in-out hover:text-red-500"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/shop"
                className="uppercase text-lg md:text-xl font-bold text-black transition duration-300 ease-in-out hover:text-red-500"
              >
                Shop
              </Link>
            </li>
            <li className="relative">
              <span className="uppercase text-lg md:text-xl font-bold text-black transition duration-300 ease-in-out hover:text-red-500 cursor-pointer">
                Categories
              </span>
            </li>
            <li className="relative">
              <span className="uppercase text-lg md:text-xl font-bold text-black transition duration-300 ease-in-out hover:text-red-500 cursor-pointer">
                Contact
              </span>
            </li>
          </ul>

          <div className="flex items-center ml-4 md:ml-6">
            <Link to="/cart" className="relative flex items-center">
              <img src={cartIcon} alt="Cart" className="h-8 md:h-10" />
              {cartItemsCount > 0 && (
                <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 rounded-full">
                  {cartItemsCount}
                </div>
              )}
            </Link>

            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;