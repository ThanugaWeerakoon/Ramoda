import React from 'react';
import Slider from 'react-slick';
import slider1 from './assets/slide1.jpg';
import slider2 from './assets/slide2.jpg';
import product1 from './assets/product1.jpg';


const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <div className="p-0">
      <Slider {...settings}>
        <div>
          <img src={slider1} alt="Slide 1" className="w-screen" />
        </div>
        <div>
          <img src={slider2} alt="Slide 2" className="w-screen" />
        </div>
        <div>
          <img src={slider1} alt="Slide 1" className="w-screen" />
        </div>
        <div>
          <img src={slider1} alt="Slide 1" className="w-screen" />
        </div>
      </Slider>

      <div className="grid grid-cols-4 gap-4 p-8">
        <div className="p-4">
          <img src={product1} alt="Product 1" className="w-full h-100 object-cover rounded-xl" />
          <h3 className="text-xl font-bold mt-4">Product 1</h3>
          <p className="mt-2">Description of Product 1</p>
        </div>
        <div className="p-4">
          <img src={product1} alt="Product 2" className="w-full h-100 object-cover rounded-xl" />
          <h3 className="text-xl font-bold mt-4">Product 2</h3>
          <p className="mt-2">Description of Product 2</p>
        </div>
        <div className="p-4">
          <img src={product1} alt="Product 3" className="w-full h-100 object-cover rounded-xl" />
          <h3 className="text-xl font-bold mt-4">Product 3</h3>
          <p className="mt-2">Description of Product 3</p>
        </div>
        <div className="p-4">
          <img src={product1} alt="Product 4" className="w-full h-100 object-cover rounded-xl" />
          <h3 className="text-xl font-bold mt-4">Product 4</h3>
          <p className="mt-2">Description of Product 4</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
