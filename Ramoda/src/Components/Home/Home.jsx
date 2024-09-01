import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import productsData from '../Context/product';
import homePic1 from '../../assets/Home.JPG';
import homePic2 from '../../assets/Home2.JPG';
import homePic3 from '../../assets/Home3.JPG';

const Home = () => {
  const { addToCart } = useContext(CartContext);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [homePic1, homePic2, homePic3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    console.log(`Product ${productId} added to cart`);
  };

  return (
    <div className="min-h-screen">
  
      <div className="relative w-full h-[160vh] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`Slide ${index}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="mx-auto text-center mb-8 py-8">
        <h1 className="text-5xl font-bold">Latest Arrivals</h1>
        <p className="text-gray-600 text-lg mt-2">
          STAY AHEAD OF THE CURVE WITH OUR LATEST ARRIVALS
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {productsData.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
            <div className="w-full h-88 overflow-hidden relative ">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-105 "
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

      <div className="mx-auto text-center mt-8 p-4 bg-white text-black">
        <h1 className="text-3xl font-bold">RA-MÓDA</h1>
        <p>MODERN FASHION FROM US TO YOU</p>
      </div>
    </div>
  );
};

export default Home;
