import React from 'react';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex-grow py-40  bg-gray-200 px-6 lg:px-24">
        <h2 className="text-6xl text-center text-black-800 mb-8 font-extrabold">
          Get in Touch HUTTOOOOOOO !!!!!!!!!!
        </h2>
        <p className="text-center text-black-600 mb-12 mt-20">
          We'd love to hear from you! Whether you have a question about our products or just want to chat, feel free to reach out.
        </p>

        <div className="max-w-[80rem] mt-20 mx-auto bg-[#212121] p-8 rounded-[20px] shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-white mt-10 mb-12">
            Contact Form
          </h1>

          <form>
            <div className="mb-4 flex flex-wrap gap-4 justify-center">
              <div className="flex-1 min-w-[250px] max-w-[300px]">
                <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none bg-[#3d3d3d] rounded-[10px] w-full py-2 px-3 text-white text-sm leading-tight focus:outline-none focus:shadow-outline hover:bg-[#4d4d4d] hover:border-[#aaaaaa]"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="flex-1 min-w-[250px] max-w-[300px]">
                <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none bg-[#3d3d3d] rounded-[10px] w-full py-2 px-3 text-white text-sm leading-tight focus:outline-none focus:shadow-outline hover:bg-[#4d4d4d] hover:border-[#aaaaaa]"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
            </div>
            <br />

            <div className="mb-6 flex justify-center">
              <div className="w-full max-w-[650px]">
                <label className="block text-white text-sm font-bold mb-2 text-left" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none bg-[#3d3d3d] rounded-[10px] w-full py-2 px-3 text-white text-sm leading-tight focus:outline-none focus:shadow-outline hover:bg-[#4d4d4d] hover:border-[#aaaaaa]"
                  id="message"
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-white mb-10 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl group text-[#3d3d3d] rounded-[10px] font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="text-center text-black-600 mt-20">
          <p>Or reach us at:</p> <br />
          <p className="font-semibold">ramodabyravishan@gmail.com</p>
          <p className="font-semibold">+94 74 344 8585</p>
        </div>


{/* ******************************************************************************** Social Media ********************************************************************************** */}


        <div className="text-center text-black-400 mt-20">
          <p>Follow us on social media:</p>
          <ul className="flex items-center justify-center space-x-14 pt-10 h-[76px] w-full font-sans">
            <li className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-black group">
              <a href="https://www.facebook.com/profile.php?id=100085633834431" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 fill-current text-blue-600" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
            </li>

            <li className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-black group">
              <a href="https://www.tiktok.com/@_ramoda?is_from_webapp=1&sender_device=pc">
              <svg className="w-6 h-6 fill-current id=" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" >
                <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z">  </path>
              </svg>
              </a>
            </li>

            <li className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-black group">
              <a href="https://www.instagram.com/__ramoda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 fill-current text-pink-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 7.999c0-2.172-.01-2.444-.048-3.297-.04-.851-.174-1.434-.372-1.943a3.917 3.917 0 0 0-.923-1.416 3.923 3.923 0 0 0-1.416-.924c-.509-.197-1.09-.332-1.942-.372C10.445.01 10.173 0 7.999 0zm0 1.453c2.124 0 2.383.008 3.225.046.78.036 1.204.166 1.485.275.373.145.64.318.92.598.28.28.453.547.598.92.109.281.239.705.275 1.485.038.842.046 1.1.046 3.224 0 2.123-.008 2.383-.046 3.224-.036.78-.166 1.205-.275 1.485a2.477 2.477 0 0 1-.598.92c-.28.28-.547.453-.92.598-.28.109-.705.239-1.485.275-.842.038-1.1.046-3.225.046-2.124 0-2.383-.008-3.224-.046-.78-.036-1.205-.166-1.485-.275a2.484 2.484 0 0 1-.92-.598 2.474 2.474 0 0 1-.598-.92c-.109-.28-.239-.705-.275-1.485-.038-.842-.046-1.1-.046-3.224 0-2.124.008-2.383.046-3.224.036-.78.166-1.205.275-1.485a2.474 2.474 0 0 1 .598-.92c.28-.28.547-.453.92-.598.28-.109.705-.239 1.485-.275.842-.038 1.1-.046 3.224-.046zM8 3.891a4.109 4.109 0 1 0 0 8.218 4.109 4.109 0 0 0 0-8.218zm0 6.762a2.653 2.653 0 1 1 0-5.307 2.653 2.653 0 0 1 0 5.307zm5.196-7.43a.959.959 0 1 0 0 1.918.959.959 0 0 0 0-1.918z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>


{/* ****************************************************************************** /Social Media ********************************************************************************** */}




{/* ********************************************************************************* map *******************************************************************************************/}

       
        <div className="text-center text-black-400 mt-20">
        <p> Our Location </p> <br /><br />
          <div className="relative w-full h-64 md:h-80 lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.3400205895987!2d79.89465207568239!3d7.201992314905674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2eff49af70119%3A0x7f5c24a0211d6338!2sRamoda%20Flagship%20Store!5e0!3m2!1sen!2slk!4v1725262174595!5m2!1sen!2slk"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

{/* ******************************************************************************* / map *******************************************************************************************/}




        <h1 className="text-3xl font-semibold text-center text-gray-800 mt-32">
          WE PROMISE WE COMFORT
        </h1>

      </div>

      <Footer />
    </div>
  );
};

export default Contact;
