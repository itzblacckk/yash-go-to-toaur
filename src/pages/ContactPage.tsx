import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('/contact-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-4xl md:text-6xl font-bold text-white z-10">Contact Us</h1>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Have questions or want to book your next adventure? Reach out to us through any of the following channels:
          </p>
          <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
            <Phone className="mr-2" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center mb-4 text-gray-700 dark:text-gray-300">
            <Mail className="mr-2" />
            <span>info@mountainmirage.com</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <MapPin className="mr-2" />
            <span>123 Adventure Ave, Mountain View, CA</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Send a Message</h3>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500 dark:bg-gray-700 dark:text-white"
              placeholder="Your Message"
              rows={5}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
