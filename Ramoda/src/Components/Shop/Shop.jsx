import React, { useState, useContext } from 'react';
import shoppic from '../../assets/Shop.jpg';
import { CartContext } from '../Context/CartContext';
import productsData from '../../shop'; 
const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState({}); 

  const handleSizeChange = (productId, size) => {
    setSelectedSize((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (productId) => {
    const size = selectedSize[productId];
    if (size) {
      addToCart(productId, size);
      console.log(`Product ${productId} with size ${size} added to cart`);
    } else {
      alert('Please select a size before adding to the cart.');
    }
  };

  // Filter out latest products
  const regularProducts = productsData.filter(product => !product.isLatest);

  return (
    <section className="min-h-screen">
      <img
        src={shoppic}
        className="w-full object-cover mb-4 sm:mb-8"
        alt="shop"
        loading="lazy"
      />

      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold">SHOP NOW</h1>
        <p className="text-gray-600 text-lg mt-2">
          WE PROMISE WE COMFORT
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {regularProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <div className="overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.price}</p>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Size</label>
                <select
                  value={selectedSize[product.id] || ''}
                  onChange={(e) => handleSizeChange(product.id, e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="" disabled>Select size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              <div className="flex justify-center mt-auto">
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="bg-black hover:bg-white text-white hover:text-black py-2 px-4 rounded-full transition duration-300 ease-in-out"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 mb-4">
        <h1 className="text-3xl font-bold">RA-MÓDA</h1>
        <p>MODERN FASHION FROM US TO YOU</p>
      </div>
    </section>
  );
};

export default Shop;
