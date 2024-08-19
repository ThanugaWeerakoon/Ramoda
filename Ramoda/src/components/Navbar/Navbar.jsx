import React from 'react';



const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/men" className="hover:text-gray-400">Men</a>
          <a href="/women" className="hover:text-gray-400">Women</a>
          <a href="/about-us" className="hover:text-gray-400">About Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
