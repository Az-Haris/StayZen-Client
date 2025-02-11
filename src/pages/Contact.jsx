import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | StayZen</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
          <p className="text-gray-600 text-lg text-center mb-8">
            Have questions? We’d love to hear from you. Reach out to us and we’ll get back to you as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-blue-600 text-2xl">📍</span>
                <p className="text-gray-700">123 StayZen Street, Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-600 text-2xl">📧</span>
                <p className="text-gray-700">support@stayzen.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-600 text-2xl">📞</span>
                <p className="text-gray-700">+880 1234-567890</p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 font-semibold">We’ll get back to you within 24 hours!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
