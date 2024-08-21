import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-black text-white p-5 fixed w-full top z-50 transition-all duration-300 ${scroll ? 'shadow-lg' : ''}`}>
      <div className="mx-auto flex justify-between items-center px-6">
        <div className="text-3xl font-bold">
          RA-MÓDA
        </div>
        <div className="flex space-x-12 text-lg font-mono font-bold">
          <Link to="/" className="hover:text-gray-400">HOME</Link> 
          <Link to="/men" className="hover:text-gray-400">MEN</Link> 
          <Link to="/women" className="hover:text-gray-400">WOMEN</Link> 
          <Link to="/Aboutus" className="hover:text-gray-400">ABOUT US</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
