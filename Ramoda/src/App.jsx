import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Shop from './Components/Shop/Shop';
import Contact from './Components/Contact/Contact';
import { CartProvider } from './Components/Context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <div className='flex-grow'>
            <Routes>
            
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />

            </Routes>
          </div>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
