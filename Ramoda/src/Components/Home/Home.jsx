import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import productsData from '../../shop'; 
import c130 from '../../assets/C0133.mp4';
import home from '../../assets/Home.jpg'; 
import home2 from '../../assets/Home2.jpg'; // Added for PhotoContainer
import home3 from '../../assets/Home3.jpg';
import home4 from '../../assets/Home4.jpg';
import home5 from '../../assets/Home5.png';
import home6 from '../../assets/Home6.png'
import home7 from '../../assets/Home7.png'
import slide1 from '../../assets/Slide1.jpg';
import slide2 from '../../assets/Slide2.jpg';
import slide3 from '../../assets/Slide3.jpg';
import Footer from '../../Components/Footer/Footer';
import LoaderComp from '../../Components/LoaderComp/LoaderComp';


//image slider
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Ensure Swiper CSS is imported



const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState({});
  const [loading, setLoading] = useState(true); // Loading state
  const [showAll, setShowAll] = useState(false); // State to control product visibility

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

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
  const visibleProducts = showAll ? latestProducts : latestProducts.slice(0, 4);

  const handleShowAll = () => {
    setShowAll(prev => !prev); // Toggle between showing all and showing some
  };


  if (loading) {
    return <LoaderComp />; // Show loader when loading
  }


  return (
    <div className="min-h-screen bg-white">

      {/* Video Section */}
      <section className="video">
        <div className="fixed top-0 left-0 w-full h-[82vh] z-[-1]"> {/* Adjust the height here */}
          <video
            src={c130}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          ></video>
          <div className="absolute inset-0 bg-black opacity-25"></div>
        </div>
      </section>

      
      
    
      {/* Main Content */}
      <div className="mx-auto text-center px-10 mt-[50rem] py-24 ">
        <h2 className="text-4xl font-bold mb-14  text-black">WE PROMISE WE COMFORT</h2>
  
        <br />

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left Column for the Photo */}
            <div className="flex justify-center items-center bg-gray-200">
              <img
                src={home4}
                alt="Description"
                className="object-cover w-full h-full md:w-[1050px] md:h-[500px]"
              />
            </div>

            {/* Right Column for the Button */}
            <div className="flex flex-col justify-center items-center bg-black py-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Latest Arrivals</h2>
              <button
                onClick={handleShowAll} // Toggle the display of products
                className="bg-black text-white py-3 px-8 rounded-full hover:bg-white hover:text-black border border-white transition duration-300"
              >
                {showAll ? 'Show less' : 'Show all'} {/* Toggle button text */}
              </button>
            </div>
          </div>

        

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-[9rem]">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
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
          

          {/* Image Slider Section */}
          <section className="py-16">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 mt-32">
              {/* Left Column for the Heading */}
              <div className="flex flex-col justify-center items-center bg-black py-24">
                <h2 className="text-5xl font-bold mb-8 text-white">Explore The Oversized Collection</h2>
              </div>

              {/* Right Column for the Image Slider */}
              <div className="relative flex justify-center items-center bg-gray-200">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  modules={[Autoplay]} // Enable the autoplay module
                  autoplay={{
                    delay: 2000, // Slide duration in milliseconds (2 seconds)
                    disableOnInteraction: false, // Continue autoplay even if the user interacts with the slider
                  }}
                  className="w-full md:w-[1200px] h-[900px] mx-auto"
                >
                  <SwiperSlide>
                    <img
                      src={slide1}
                      alt="Slide 1"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={home2}
                      alt="Slide 2"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slide2}
                      alt="Slide 3"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={slide3}
                      alt="Slide 4"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section> 


          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-[9rem]">
              {visibleProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300">
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
          </section>
        
      </div> 

          <div className="text-center mt-48 mb-48">
            <h1 className="text-3xl font-bold">RA-MÓDA</h1>
            <p>MODERN FASHION FROM US TO YOU</p>
          </div>

      <Footer />
    </div>
  );
};

export default Home;
