import React, { useContext } from 'react';
import cartpic from '../../assets/carthome.jpg';
import { CartContext } from '../Context/CartContext';

function Cart() {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  const handleRemoveItem = (itemUuid) => {
    removeItemFromCart(itemUuid);
  };

  return (
    <section className="">
      <img src={cartpic} className="w-full object-cover mb-4 sm:mb-8 cartimg mb-8" alt="Cart" />

      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.uuid} className="border-b border-gray-300">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2 text-right font-bold text-blue-500">{item.price}</td>
              <td className="px-4 py-2 text-center text-gray-600">{item.id}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleRemoveItem(item.uuid)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end mt-8">
        <button className="bg-blue-200 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
          Check Out
        </button>
      </div>

      <div className="footer mt-10 py-6 bg-white">
        <h1 className="text-3xl font-bold text-black text-center">LIYO FASHION</h1>
        <p className="text-gray-600 text-center">MODERN FASHION FROM US TO YOU</p>
      </div>
    </section>
  );
}

export default Cart;
