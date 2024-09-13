import React, { useContext, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import { CartContext } from '../Context/CartContext';
import visaImage from '../../assets/checkout/visa.png';
import mastercardImage from '../../assets/checkout/mastercard.png';
import kokoImage from '../../assets/checkout/koko.png';
import mintpayImage from '../../assets/checkout/Mintpay.png';
import codImage from '../../assets/checkout/cod.png';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [isDifferentBillingAddress, setIsDifferentBillingAddress] = useState(false);

  const handleBillingAddressChange = (e) => {
    setIsDifferentBillingAddress(e.target.id === 'different-address');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#212121] text-white">
      <div className="flex-grow py-40 px-6 lg:px-24">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Checkout Here</h1>
        </header>

        <div className="lg:max-w-[800px] mx-auto">



{/* ******************************************************************************** Cart Items ********************************************************************************** */}

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
                  Rs {cartItems.reduce((total, item) => total = (item.price), 0)}
                </span>

              </div>

            </div>
          )}
        </section>

{/* ******************************************************************************** /Cart Items ********************************************************************************** */}




          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Delivery</h2>
            <div className="w-full p-3 mb-4 bg-[#3d3d3d] text-white border border-none rounded-[10px]">
              Sri Lanka
            </div>
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 p-3 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 p-3 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 mb-4 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full p-3 mb-4 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
            />
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="City"
                className="w-1/2 p-3 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
              />
              <input
                type="text"
                placeholder="Postal code"
                className="w-1/2 p-3 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 mb-4 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
            />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="save-info" className="mr-2" />
              <label htmlFor="save-info" className="text-gray-400">
                Save this information for next time
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="text-news" className="mr-2" />
              <label htmlFor="text-news" className="text-gray-400">
                Text me with news and offers
              </label>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Shipping method</h2>
            <div className="p-4 bg-[#3d3d3d] border border-none rounded-[10px] flex justify-between items-center">
              <span>Standard</span>
              <span>Rs 399.00</span>
            </div>
            <p className="text-gray-400 mt-2">2-3 Business Days</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Payment</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input type="radio" id="credit-card" name="payment-method" className="mr-2" />
                <label htmlFor="credit-card" className="flex-grow">Credit card</label>
                <img src={visaImage} alt="Visa" className="h-8 ml-2" />
                <img src={mastercardImage} alt="MasterCard" className="h-8 ml-2" />
              </div>
              <div className="flex items-center">
                <input type="radio" id="koko" name="payment-method" className="mr-2" />
                <label htmlFor="koko" className="flex-grow">Koko: Buy Now Pay Later</label>
                <img src={kokoImage} alt="koko" className="h-6 ml-2" />
              </div>
              <div className="flex items-center">
                <input type="radio" id="mintpay" name="payment-method" className="mr-2" />
                <label htmlFor="mintpay" className="flex-grow">Mintpay</label>
                <img src={mintpayImage} alt="Mintpay" className="h-6 ml-2" />
              </div>
              <div className="flex items-center">
                <input type="radio" id="cod" name="payment-method" className="mr-2" />
                <label htmlFor="cod" className="flex-grow">Cash on Delivery</label>
                <img src={codImage} alt="cod" className="h-6 ml-2" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Billing address</h2>
            <div className="flex items-center mb-4">
              <input type="radio" id="same-address" name="billing-address" className="mr-2" onChange={handleBillingAddressChange} />
              <label htmlFor="same-address" className="flex-grow">Same as delivery address</label>
            </div>
            <div className="flex items-center mb-4">
              <input type="radio" id="different-address" name="billing-address" className="mr-2" onChange={handleBillingAddressChange} />
              <label htmlFor="different-address" className="flex-grow">Use a different billing address</label>
            </div>

            {isDifferentBillingAddress && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 mb-4 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
                />
                <div className="flex space-x-4 mb-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-1/2 p-3 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
                  />
                  <input
                    type="text"
                    placeholder="Postal code"
                    className="w-1/2 p-3 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
                  />
                </div>
              </div>
            )}
          </section>
        </div>
      </div>

      <div className="bg-[#3d3d3d] py-6">
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
