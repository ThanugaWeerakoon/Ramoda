import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import cartIcon from '../../assets/cart.png';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const cartItemsCount = cartItems.length;

  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 w-full z-50 py-5">
      <div className="mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-white items-left px-8">
            RA-MÓDA
          </Link>
        </div>

       
        <div className=" flex-1 flex justify-center md:justify-start">
          <ul className="flex  md:space-x-7">
            <li className="relative">
              <Link
                to="/"
                className="uppercase text-white transition duration-300 ease-in-out hover:text-gray-500"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/shop"
                className="uppercase text-white transition duration-300 ease-in-out hover:text-gray-500"
              >
                Shop
              </Link>
            </li>
            <li className="relative">
              <span className="uppercase text-white transition duration-300 ease-in-out hover:text-gray-500 cursor-pointer">
                Categories
              </span>
            </li>
            <li className="relative">
              <Link 
              to = "/contact"
               className="uppercase text-white transition duration-300 ease-in-out hover:text-gray-500 cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        
        <div className="flex items-center ml-4 md:ml-6">
          <Link to="/cart" className="relative flex items-right px-5">
            <img src={cartIcon} alt="Cart" className="h-7 md:h-7" />
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
