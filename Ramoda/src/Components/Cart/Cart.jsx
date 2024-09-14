import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  const handleRemoveItem = (itemUuid) => {
    removeItemFromCart(itemUuid);
  };

  return (
    <section className="min-h-screen">

      <div className="overflow-x-auto max-w-6xl mx-auto flex-grow py-40 px-6 lg:px-24">
        <table className="w-full bg-white shadow-md rounded-lg border border-gray-200">
          <thead>
            <tr className="bg-gradient-to-r from-black to-black text-white">
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Size</th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.uuid} className="hover:bg-gray-100 transition-colors duration-200">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4 text-sm font-semibold text-blue-500">{item.price}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.size}</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleRemoveItem(item.uuid)}
                    className="bg-black hover:bg-gray-600 text-white py-1 px-3 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-200" >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/checkout">
          <button className="bg-black hover:bg-[#3d3d3d] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            Checkout
          </button>
        </Link>
      </div>

      <div className="text-center mt-48 mb-48">
        <h1 className="text-3xl font-bold">RA-MÓDA</h1>
        <p>MODERN FASHION FROM US TO YOU</p>
      </div>

      <Footer />
    </section>
  );
}

export default Cart;
