import React, { useState, useContext } from 'react';
import women from '../../assets/women.jpg';
import { CartContext } from '../Context/CartContext';
import productsData from '../../shop'; 
import Footer from '../../Components/Footer/Footer';

const Women = () => {
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

// Filter out men products
const menProducts = productsData.filter(product => product.isWomen);

return (
  <section className="min-h-screen">
    <img
      src={women}
      className="w-full object-cover mb-4 sm:mb-8"
      alt="shop"
      loading="lazy"
    />

    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold">WOMEN</h1>
      <p className="text-gray-600 text-lg mt-2">
        WE PROMISE WE COMFORT
      </p>
    </div>

    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {menProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-94 object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow items-center text-center">
            <h3 className="text-2xl font-semibold mb-2 text-black">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.price}</p>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex space-x-2 justify-center">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`px-4 py-2 rounded-full border ${
                      selectedSize[product.id] === size
                        ? 'bg-black text-white'
                        : 'bg-white text-black border-gray-300'
                    } hover:bg-black hover:text-white transition duration-300`}
                    onClick={() => handleSizeChange(product.id, size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleAddToCart(product.id)}
              className="bg-black text-white py-2 px-6 w-full max-w-[200px] rounded-full hover:bg-white hover:text-black transition duration-300 ease-in-out mt-auto"
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
    <Footer />
  </section>
);

};

export default Women;
