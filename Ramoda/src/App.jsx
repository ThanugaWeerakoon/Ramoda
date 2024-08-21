import React from 'react'
import Navbar from './Navbar';
import Home from './Home'
import Aboutus from './Aboutus';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Aboutus/>
    </div>
  )
}

export default App
