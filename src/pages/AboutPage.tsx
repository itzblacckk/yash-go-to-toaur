import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: "url('/about-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-4xl md:text-6xl font-bold text-white z-10">About Us</h1>
      </section>

      {/* Content */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">Our Mission</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto">
          At Mountain Mirage, we strive to provide unforgettable experiences, guiding adventurers through the breathtaking beauty of mountain ranges. Our goal is to connect people with nature, challenge limits, and make every peak a dream fulfilled.
        </p>
        <div className="flex flex-wrap justify-center mt-12">
          <div className="p-6 max-w-sm">
            <img src="/adventure.jpg" alt="Adventure" className="rounded-lg shadow-lg" />
            <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">Adventure Awaits</h3>
          </div>
          <div className="p-6 max-w-sm">
            <img src="/safety.jpg" alt="Safety" className="rounded-lg shadow-lg" />
            <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">Your Safety First</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
