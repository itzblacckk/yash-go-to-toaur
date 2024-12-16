import React from 'react';
import { Calendar, Clock, Mountain, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface TourCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: string;
  image: string;
  price: number;
}

const TourCard: React.FC<TourCardProps> = ({
  title,
  description,
  duration,
  difficulty,
  image,
  price,
}) => {
  const handleWhatsAppClick = () => {
    const message = `Hi, I am interested in the tour "${title}".\n\nDetails:\n- Description: ${description}\n- Duration: ${duration}\n- Difficulty: ${difficulty}\n- Price: ₹${price}\n\nPlease share more details.`;
    window.open(`https://wa.me/8097621390?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1 text-green-700" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center">
            <Mountain className="w-4 h-4 mr-1 text-green-700" />
            <span className="text-sm">{difficulty}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-700">₹{price}</span>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center space-x-2 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Contact on WhatsApp</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
