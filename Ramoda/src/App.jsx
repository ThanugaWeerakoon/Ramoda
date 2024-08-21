import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Aboutus from './Aboutus'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> 
        <Navbar /> 
        <div className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/aboutus" element={<Aboutus />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
