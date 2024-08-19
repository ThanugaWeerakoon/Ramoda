import React from 'react';
import Slider from 'react-slick';
import slider1 from './assets/slide1.jpg';

const Home = () => {
  const settings = {
    dots: true,
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
          <img src={slider1} alt="Slide 1" className="w-full" />
        </div>
        <div>
          <img src={slider1} alt="Slide 1" className="w-full" />
        </div>
        <div>
          <img src={slider1} alt="Slide 1" className="w-full" />
        </div>
        <div>
          <img src={slider1} alt="Slide 1" className="w-full" />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
