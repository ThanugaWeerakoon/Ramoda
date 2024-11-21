import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/Navbar';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import Checkout from './Components/Checkout/Checkout';
import Dress from './Components/Dress/Dress';
import ContactUs from './Components/ContactUs/ContactUs';
import { CartProvider } from './Components/Context/CartContext';
import RefundPolicy from './Components/Footer/RefundPolicy';
import PrivacyPolicy from './Components/Footer/PrivacyPolicy';
import TermsAndConditions from './Components/Footer/TermsAndConditions';



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
              <Route path="/contact" element={<ContactUs />} />                
                 <Route path="/men" element={<Men />} />
                 <Route path="/women" element={<Women />} />
                 <Route path="/checkout" element={<Checkout />} />
                 <Route path="/dress" element={<Dress />} />
                 <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                 
            </Routes>
          </div>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
