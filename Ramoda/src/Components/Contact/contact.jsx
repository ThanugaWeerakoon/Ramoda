import React from 'react';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex-grow py-20 bg-gray-200 px-6 lg:px-24">
        <h2 className="text-3xl font-semibold text-center text-black-800 mb-8">
          Get in Touch
        </h2>
        <p className="text-center text-black-600 mb-12">
          We'd love to hear from you! Whether you have a question about our products or just want to chat, feel free to reach out.
        </p>

        <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-black-800 mt-12 mb-12">
            Contact Form
          </h1>

          <form>
            <div className="mb-4 flex flex-wrap gap-4 justify-center">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input 
                  className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-black-700 text-sm leading-tight focus:outline-none focus:shadow-outline" 
                  id="name" 
                  type="text" 
                  placeholder="Your name" 
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input 
                  className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-black-700 text-sm leading-tight focus:outline-none focus:shadow-outline" 
                  id="email" 
                  type="email" 
                  placeholder="Your email" 
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-black-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-black-700 text-sm leading-tight focus:outline-none focus:shadow-outline" 
                id="message" 
                rows="5" 
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <button 
                className="bg-black hover:bg-gray-700 text-white rounded-lg font-bold py-2 px-4 focus:outline-none focus:shadow-outline" 
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="text-center text-black-600 mt-12">
          <p>Or reach us at:</p>
          <p className="font-semibold">ramoda@gmail.com</p>
          <p className="font-semibold">+9400000000</p>
        </div>

        <div className="text-center text-black-400 mt-10">
          <p>Follow us on social media:</p>
          <ul className="flex items-center justify-center space-x-14 pt-10 h-[76px] w-full font-sans">
            <li className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-xl group">
              <svg className="w-6 h-6 fill-current text-blue-600" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>
            </li>

            <li className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-xl group">
              <svg className="w-7 h-7 fill-current text-blue-500" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
              </svg>
            </li>

            <li className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-xl group">
              <svg className="w-6 h-6 fill-current text-pink-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 7.999c0-2.172-.01-2.444-.048-3.297-.04-.851-.174-1.434-.372-1.943a3.917 3.917 0 0 0-.923-1.416 3.923 3.923 0 0 0-1.416-.924c-.509-.197-1.09-.332-1.942-.372C10.445.01 10.173 0 7.999 0zm0 1.453c2.124 0 2.383.008 3.225.046.78.036 1.204.166 1.485.275.373.145.64.318.92.598.28.28.453.547.598.92.109.281.239.705.275 1.485.038.842.046 1.1.046 3.224 0 2.123-.008 2.383-.046 3.224-.036.78-.166 1.205-.275 1.485a2.477 2.477 0 0 1-.598.92c-.28.28-.547.453-.92.598-.28.109-.705.239-1.485.275-.842.038-1.1.046-3.225.046-2.124 0-2.383-.008-3.224-.046-.78-.036-1.205-.166-1.485-.275a2.484 2.484 0 0 1-.92-.598 2.474 2.474 0 0 1-.598-.92c-.109-.28-.239-.705-.275-1.485-.038-.842-.046-1.1-.046-3.224 0-2.124.008-2.383.046-3.224.036-.78.166-1.205.275-1.485a2.474 2.474 0 0 1 .598-.92c.28-.28.547-.453.92-.598.28-.109.705-.239 1.485-.275.842-.038 1.1-.046 3.224-.046zM8 3.891a4.109 4.109 0 1 0 0 8.218 4.109 4.109 0 0 0 0-8.218zm0 6.762a2.653 2.653 0 1 1 0-5.307 2.653 2.653 0 0 1 0 5.307zm5.196-7.43a.959.959 0 1 0 0 1.918.959.959 0 0 0 0-1.918z"></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
