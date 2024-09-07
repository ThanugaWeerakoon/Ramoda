import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import productsData from '../../shop'; 
import homePic1 from '../../assets/Home.JPG';
import homePic2 from '../../assets/Home2.JPG';
import homePic3 from '../../assets/Home3.JPG';
import Footer from '../../Components/Footer/Footer';

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
    }, 5000); 

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

  const latestProducts = productsData.filter(product => product.isLatest);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Image Carousel */}
      <div className="relative w-full h-[120vh] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              className=""
              alt={`Slide ${index}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold">RA-MÓDA</h1>
          <p className="text-lg md:text-2xl mt-4">Discover the latest fashion trends</p>
        </div>
      </div>

      {/* Latest Products Section */}
      <div className="container mx-auto text-center py-16">
        <h2 className="text-4xl font-bold mb-8 text-black">Latest Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {latestProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-100 object-cover transform transition-transform duration-300 hover:scale-105"
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
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
