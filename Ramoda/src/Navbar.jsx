import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import cartpng from './assets/cart.png'

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-black text-white p-6 fixed w-full top-0 z-50 transition-all duration-300 ${scroll ? 'shadow-lg' : 'shadow-md'}`}>
      <div className=" mx-auto flex items-center justify-start">
        <div className="text-3xl font-bold leading-tight mr-12">
          RA-MÓDA
        </div>
        <div className="flex space-x-8 font-semibold">
          <Link to="/" className="hover:text-gray-300 transition-colors duration-300">HOME</Link>
          <Link to="/men" className="hover:text-gray-300 transition-colors duration-300">MEN</Link>
          <Link to="/women" className="hover:text-gray-300 transition-colors duration-300">WOMEN</Link>
          <Link to="/aboutus" className="hover:text-gray-300 transition-colors duration-300">ABOUT US</Link>
         
        </div>

        <div className="flex items-center ml-auto">
          <img src={cartpng} alt="Cart" className="w-10 h-10 object-contain cursor-pointer hover:opacity-75 transition-opacity duration-300" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
