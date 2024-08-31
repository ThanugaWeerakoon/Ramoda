import React, { useContext } from 'react';
import homepic from '..//../assets/Home.jpg';
import { CartContext } from '../Context/CartContext';
import productsData from '../Context/product';

const Home = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="min-h-screen ">
      <img src={homepic} className="w-full object-cover mb-4 sm:mb-8" alt="Home" />

      <div className="mx-auto text-center mb-8">
        <h1 className="text-5xl font-bold">Latest Arrivals</h1>
        <p className="text-gray-600 text-lg mt-2">STAY AHEAD OF THE CURVE WITH OUR LATEST ARRIVALS</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className=" w-full object-cover">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-t-lg" />
            </div>
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

      <div className="mx-auto text-center mt-8 p-4 bg-white text-black">
        <h1 className="text-3xl font-bold">LIYO FASHION</h1>
        <p>MODERN FASHION FROM US TO YOU</p>
      </div>
    </div>
  );
};

export default Home;
