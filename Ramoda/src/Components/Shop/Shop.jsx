import React, { useContext } from 'react';
import shoppic from '../../assets/Shop.jpg';
import { CartContext } from '../Context/CartContext';
import productsData from '../../shop';

const Shop = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <section className="min-h-screen">
      {/* Shop Image Section */}
      <img
        src={shoppic}
        className="w-full object-cover mb-4 sm:mb-8"
        alt="shop"
        loading="lazy"
      />

      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold">SHOP NOW</h1>
        <p className="text-gray-600 text-lg mt-2">
          STAY AHEAD OF THE CURVE WITH OUR LATEST ARRIVALS
        </p>
      </div>

     
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <div className="w-full h-88 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-t-lg"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.price}</p>
              <p className="text-gray-600 mb-4">ID: {product.id}</p>
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
        <h1 className="text-3xl font-bold">LIYO FASHION</h1>
        <p>MODERN FASHION FROM US TO YOU</p>
      </div>
    </section>
  );
};

export default Shop;
