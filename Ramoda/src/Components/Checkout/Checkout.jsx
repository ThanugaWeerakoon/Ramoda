import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import { CartContext } from '../Context/CartContext';
import emailjs from 'emailjs-com';  

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [isDifferentBillingAddress, setIsDifferentBillingAddress] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    postalCode: '',
    phone: '',
    billingAddress: '',
  });

  const navigate = useNavigate();

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProceedClick = () => {
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      apartment: formData.apartment || 'N/A', 
      city: formData.city,
      postalCode: formData.postalCode,
      phone: formData.phone,
      billingAddress: isDifferentBillingAddress ? formData.billingAddress : 'Same as delivery address',
      cartItems: cartItems.map((item) => `${item.name} (Size: ${item.size}) - Rs ${item.price}`).join(', '),
      totalPrice: cartItems.reduce((total, item) => total + item.price, 0),
    };
  
    emailjs.send(
      'service_lhpy25o',  // Your service ID
      'template_nvy070d', // Your template ID
      templateParams,
      'h5nv_sQcrzoOJ8ngD'  // Your public key
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Your order has been placed and the shop owner has been notified!');
      navigate('/form');
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('There was an issue with your order. Please try again.');
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#212121] text-white">
      <div className="flex-grow py-40 px-6 lg:px-24">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Checkout Here</h1>
        </header>

        <div className="lg:max-w-[800px] mx-auto">
          {/* Cart Items Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Cart Items</h2>
            {cartItems.length === 0 ? (
              <div className="w-full p-3 bg-[#3d3d3d] text-white border border-none rounded-[10px]">
                <p>Your cart is empty.</p>
              </div>
            ) : (
              <div className="w-full p-3 bg-[#3d3d3d] text-white border border-none rounded-[10px]">
                <ul className="space-y-3">
                  {cartItems.map((item) => (
                    <li key={item.uuid} className="flex justify-between items-center">
                      <span>{item.name}</span>
                      <span>{item.size}</span>
                      <span>Rs {item.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-600">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg font-semibold">
                    Rs {cartItems.reduce((total, item) => total + item.price, 0)}
                  </span>
                </div>
              </div>
            )}
          </section>

          {/* Delivery Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Delivery</h2>
            <div className="w-full p-3 mb-4 bg-[#3d3d3d] text-white border border-none rounded-[10px]">
              Sri Lanka
            </div>
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-1/2 p-3 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-1/2 p-3 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
            />
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc. (optional)"
              value={formData.apartment}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
            />
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-1/2 p-3 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal code"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-1/2 p-3 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 mb-4 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
            />
          </section>

          <button onClick={handleProceedClick} className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500">
            Proceed
          </button>
        </div>
      </div>

      <div className="bg-[#3d3d3d] py-6">
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
