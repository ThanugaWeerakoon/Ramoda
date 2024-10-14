import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add an email service like EmailJS to send this form data to your email
    console.log('Form data:', formData);
    alert('Thank you for contacting RA-MODA!');
    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 text-gray-900">
      <div className="container mx-auto py-12 px-6 lg:px-24">
        <h1 className="text-4xl font-bold text-center mb-8">Contact RA-MODA</h1>

        <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Your message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Visit Our Store</h2>
          <p>RA-MODA, 123 Fashion Street, Colombo, Sri Lanka</p>
          <p>Email: contact@ra-moda.com</p>
          <p>Phone: +94 123 456 789</p>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 RA-MODA. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
