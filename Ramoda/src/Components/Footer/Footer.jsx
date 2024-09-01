
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 text-center">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-around">
        <div className="w-48 mb-6">
          <h3 className="text-lg font-semibold mb-4">ABOUT</h3>
          <p>RA-MÓDA.</p>
        </div>
        <div className="w-48 mb-6">
          <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
          <ul className="space-y-2">
            <li>📞 +94 741 676 595</li>
            <li>📧 hello@pepperstreet.co</li>
          </ul>
        </div>
        
        <div className="w-48 mb-6">
          <h3 className="text-lg font-semibold mb-4">COLLECTIONS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Men</a></li>
            <li><a href="#" className="hover:underline">Women</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
          </ul>
        </div>
        <div className="w-full max-w-sm bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Join Our Community</h3>
          <p className="mb-4">Be the first to know about new arrivals, sales, and promotions by subscribing to our newsletter today!</p>
          <form action="#" className="flex flex-col sm:flex-row">
            <input type="email" placeholder="Enter your email address" className="px-4 py-2 mb-2 sm:mb-0 sm:mr-2 flex-grow rounded-md border-none"/>
            <button type="submit" className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm">© RA-MÓDA. - Powered by RA-MÓDA</p>
      </div>
    </footer>
  );
};

export default Footer;
