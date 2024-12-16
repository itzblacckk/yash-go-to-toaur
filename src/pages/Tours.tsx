import React from 'react';
import TourCard from '../components/Tours/TourCard';
import { motion } from 'framer-motion';

const Tours = () => {
  const tours = [
    {
      title: "Alpine Adventure Trek",
      description: "Experience the breathtaking beauty of alpine meadows and peaks.",
      duration: "3 days",
      difficulty: "Moderate",
      image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1",
      price: 2899
    },
    {
      title: "Summit Expedition",
      description: "Challenge yourself with this advanced mountain climbing experience.",
      duration: "5 days",
      difficulty: "Hard",
      image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
      price: 1200
    },
    {
      title: "Valley Explorer",
      description: "Discover hidden valleys and pristine lakes in this scenic trek.",
      duration: "4 days",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
      price: 900
    },
    {
      title: "Winter Wonderland",
      description: "Experience the magic of snow-covered peaks and frozen waterfalls.",
      duration: "2 days",
      difficulty: "Moderate",
      image: "https://images.unsplash.com/photo-1491555103944-7c647fd857e6",
      price: 1000
    },
    {
      title: "Sunrise Summit",
      description: "Witness breathtaking sunrises from mountain peaks.",
      duration: "1 day",
      difficulty: "Moderate",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      price: 500
    },
    {
      title: "Advanced Mountaineering",
      description: "Technical climbing and advanced mountaineering expedition.",
      duration: "7 days",
      difficulty: "Expert",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851",
      price: 2300
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Tours</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of mountain adventures, 
            each designed to provide unique experiences for every skill level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;