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
    <section className="containershop">
      <img src={shoppic} className="w-full object-cover mb-4 sm:mb-8 shopimg" alt="shop" />

      <div className="text-center text-5xl font-bold shopnow mb-4">SHOP NOW</div>
      <div className="text-center text-gray-600 text-lg para mb-8">
        STAY AHEAD OF THE CURVE WITH OUR LATEST ARRIVALS
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full  object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.price}</p>
              <p className="text-gray-600">ID: {product.id}</p>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="bg-blue-200 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full mt-2 transition duration-300 ease-in-out"
              >
                Add to Cart
              </button>
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
