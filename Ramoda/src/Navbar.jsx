import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-5">
      <div className="mx-auto flex justify-between items-center px-6">

        <div className="text-3xl font-bold ">
        RA-MÓDA
        </div>      
        <div className="flex space-x-12 text-lg font-mono font-bold">
          <a href="/" className="hover:text-gray-400">HOME</a>
          <a href="/men" className="hover:text-gray-400">MEN</a>
          <a href="/women" className="hover:text-gray-400">WOMEN</a>
          <a href="/about-us" className="hover:text-gray-400">ABOUT US</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
