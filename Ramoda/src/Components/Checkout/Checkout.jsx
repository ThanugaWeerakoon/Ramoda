import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import visaImage from '../../assets/checkout/visa.png';
import mastercardImage from '../../assets/checkout/mastercard.png';
import kokoImage from '../../assets/checkout/koko.png';
import mintpayImage from '../../assets/checkout/Mintpay.png';
import codImage from '../../assets/checkout/cod.png';

const Checkout = () => {
  const [isDifferentBillingAddress, setIsDifferentBillingAddress] = useState(false);

  const handleBillingAddressChange = (e) => {
    setIsDifferentBillingAddress(e.target.id === 'different-address');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#212121] text-white">
      <div className="flex-grow py-40 px-6 lg:px-24">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Checkout Here</h1>
          <a href="#" className="text-white">Log in</a>
        </header>

        <div className="lg:max-w-[800px] mx-auto">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
            />
            <div className="flex items-center">
              <input type="checkbox" id="news-offers" className="mr-2" />
              <label htmlFor="news-offers" className="text-gray-400">
                Email me with news and offers
              </label>
            </div>
          </section>

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
                <img src={kokoImage} alt="koko" className="h-8 ml-2" />
              </div>
              <div className="flex items-center">
                <input type="radio" id="mintpay" name="payment-method" className="mr-2" />
                <label htmlFor="mintpay" className="flex-grow">Mintpay | Shop now. Pay later.</label>
                <img src={mintpayImage} alt="mintpay" className="h-10 ml-2" />
              </div>
              <div className="p-4 bg-[#3d3d3d] border border-none rounded-[10px] mb-4">
                <p>After clicking "Pay now", you will be redirected to Koko: Buy Now Pay Later to complete your purchase securely.</p>
              </div>
              <div className="flex items-center">
                <input type="radio" id="onepay" name="payment-method" className="mr-2" />
                <label htmlFor="onepay" className="flex-grow">Cash on delivery </label>
                <img src={codImage} alt="cod" className="h-14 w-13" />
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Billing address</h2>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="same-address"
                name="billing-address"
                className="mr-2"
                onChange={handleBillingAddressChange}
              />
              <label htmlFor="same-address" className="flex-grow">Same as shipping address</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="different-address"
                name="billing-address"
                className="mr-2"
                onChange={handleBillingAddressChange}
              />
              <label htmlFor="different-address" className="flex-grow">Use a different billing address</label>
            </div>

            {isDifferentBillingAddress && (
              <div className="mt-4 p-4 border border-gray-300 rounded-[10px]">
                <h3 className="text-lg font-medium mb-2">Different Billing Address</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="billing-name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      id="billing-name"
                      name="billing-name"
                      className="w-full p-2 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="billing-street" className="block text-sm font-medium mb-1">Street Address</label>
                    <input
                      type="text"
                      id="billing-street"
                      name="billing-street"
                      className="w-full p-2 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="billing-city" className="block text-sm font-medium mb-1">City</label>
                    <input
                      type="text"
                      id="billing-city"
                      name="billing-city"
                      className="w-full p-2 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="billing-zip" className="block text-sm font-medium mb-1">Postal Code</label>
                    <input
                      type="text"
                      id="billing-zip"
                      name="billing-zip"
                      className="w-full p-2 bg-[#3d3d3d] text-white border border-none rounded-[10px]"
                    />
                  </div>
                </form>
              </div>
            )}
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse bg-[#3d3d3d] text-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 text-left border-b">Product</th>
                    <th className="py-2 px-4 text-left border-b">Quantity</th>
                    <th className="py-2 px-4 text-left border-b">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Item 1</td>
                    <td className="py-2 px-4 border-b">1</td>
                    <td className="py-2 px-4 border-b">Rs 1000.00</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Item 2</td>
                    <td className="py-2 px-4 border-b">2</td>
                    <td className="py-2 px-4 border-b">Rs 2000.00</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Item 3</td>
                    <td className="py-2 px-4 border-b">1</td>
                    <td className="py-2 px-4 border-b">Rs 1500.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="py-2 px-4 border-b"></td>
                    <td className="py-2 px-4 font-semibold">Total</td>
                    <td className="py-2 px-4 font-semibold">Rs 4500.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>

          <button className="w-full py-4 mt-6 bg-green-600 hover:bg-green-700 text-white rounded-[10px]">
            Pay now
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
