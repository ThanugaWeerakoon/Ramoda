import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import productsData from '../../shop'; 
import homePic1 from '../../assets/Home.JPG';
import homePic2 from '../../assets/Home2.JPG';
import homePic3 from '../../assets/Home3.JPG';

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState({});
  const images = [homePic1, homePic2, homePic3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

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

  // Filter latest products
  const latestProducts = productsData.filter(product => product.isLatest);

  return (
    <div className="min-h-screen bg-white">
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
        <h1 className="text-5xl font-bold text-black">Latest Arrivals</h1>
        <p className="text-black text-lg mt-2">
          STAY AHEAD OF THE CURVE WITH OUR LATEST ARRIVALS
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {latestProducts.map((product) => (
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

      <div className="mx-auto text-center mt-8 p-4 bg-white text-black">
        <h1 className="text-3xl font-bold">RA-MÓDA</h1>
        <p>WE PROMISE WE COMFORT</p>
      </div>
    </div>
  );
};

export default Home;
