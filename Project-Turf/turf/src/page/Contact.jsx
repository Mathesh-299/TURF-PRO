import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-500 via-gray-400 to-green-300 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-xl mx-auto">
          We're here to help! Reach out to us for any inquiries, bookings, or support. We value your feedback and look forward to hearing from you.
        </p>
        
        <div className="grid md:grid-cols-2 gap-16 px-4 md:px-0">
          {/* Left Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">Feel free to send us a message, and we'll get back to you as soon as possible.</p>
            <form className="space-y-6 max-w-md mx-auto">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                  required
                />
              </div>
              <div className="space-y-2">
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-800">Follow Us</h2>
            <p className="text-gray-600">Stay connected with us through social media for updates, news, and more!</p>
            <div className="flex space-x-8 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-700 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-125"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-700 hover:text-pink-600 transition duration-300 ease-in-out transform hover:scale-125"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-700 hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-125"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Back-to-Top Button */}
        <div className="mt-12">
          <a
            href="#top"
            className="inline-flex items-center text-red-500 hover:text-white font-semibold transition duration-300 ease-in-out text-4xl"
          >
            <span>Back to Top</span>
            <svg
              className="ml-2 h-6 w-6 transform transition-all duration-300 ease-in-out hover:translate-y-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7-7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
