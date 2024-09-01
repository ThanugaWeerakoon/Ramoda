import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <p className="mb-4">We'd love to hear from you! Whether you have questions about our products, need assistance, or just want to say hello, feel free to reach out to us using the contact form below or through the contact details provided.</p>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <form
          action="#"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-700"
          >
            Send Message
          </button>
        </form>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">Email: <a href="mailto:info@yourclothingstore.com" className="text-blue-500 hover:underline">info@yourclothingstore.com</a></p>
        <p className="mb-2">Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a></p>
        <p className="mb-2">Address: 123 Fashion Street, Trendy City, TC 45678</p>
      </div>
    </div>
  );
};

export default Contact;
