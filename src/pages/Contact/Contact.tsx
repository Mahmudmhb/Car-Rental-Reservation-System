import { motion } from "framer-motion";
import bg from "../../../src/assets/image/handsome-customer-checking-the-car-interior-e1631573837115.jpg";

const ContactPage = () => {
  return (
    <div className="mx-auto px-4">
      {/* Hero Section */}
      <motion.div
        className="min-h-screen bg-container my-20 text-white flex bg-fixed items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="bg-[#fab637] bg-opacity-70 py-20 w-3/4 lg:w-1/2 mx-auto items-center justify-center text-center rounded-lg shadow-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.h1
            className="text-4xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <p className="text-xl font-medium text-gray-100">
            Have any questions or feedback? We'd love to hear from you!
          </p>
        </motion.div>
      </motion.div>

      {/* Contact Form Section */}
      <div className="w-11/12 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Form Section */}
        <motion.section
          className="p-6 bg-white shadow-md rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Leave a Message
          </h2>
          <form className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            {/* Description Input */}
            <div>
              <label htmlFor="description" className="block text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter your message or feedback"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </motion.section>

        {/* Image Section */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src={bg} /* Replace with your actual image path */
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
