import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import productsData from '../Context/product';
import homePic1 from '../../assets/Home.JPG';
import homePic2 from '../../assets/Home2.JPG';
import homePic3 from '../../assets/Home3.JPG';

const Home = () => {
  const { addToCart } = useContext(CartContext);

  // State to manage the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of image sources
  const images = [homePic1, homePic2, homePic3];

  // Effect to handle image slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="min-h-screen">
      {/* Slider Section */}
      <div className="relative">
        <img
          src={images[currentImageIndex]}
          className="w-full object-cover mb-4 sm:mb-8"
          alt="Home Slider"
        />
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={() =>
              setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
              )
            }
            className="bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
          >
            &lt;
          </button>
          <button
            onClick={() =>
              setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
              )
            }
            className="bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100 transition-opacity"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="mx-auto text-center mb-8">
        <h1 className="text-5xl font-bold">Latest Arrivals</h1>
        <p className="text-gray-600 text-lg mt-2">
          STAY AHEAD OF THE CURVE WITH OUR LATEST ARRIVALS
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-full object-cover">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
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
        <h1 className="text-3xl font-bold">RA-MÓDA</h1>
        <p>MODERN FASHION FROM US TO YOU</p>
      </div>
    </div>
  );
};

export default Home;
