import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Essential Tips for High-Altitude Trekking",
      excerpt: "Learn the crucial tips and techniques for successful high-altitude adventures.",
      author: "Sarah Johnson",
      date: "March 1, 2024",
      image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
      category: "Tips & Guides"
    },
    {
      id: 2,
      title: "Best Season for Mountain Climbing",
      excerpt: "Discover the optimal times for mountain climbing and what each season offers.",
      author: "Mike Peterson",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      category: "Seasonal Guide"
    },
    {
      id: 3,
      title: "Mountain Photography Guide",
      excerpt: "Master the art of capturing breathtaking mountain landscapes.",
      author: "Emma Wilson",
      date: "February 25, 2024",
      image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
      category: "Photography"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mountain Mirage Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stories, tips, and insights from the mountain climbing community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-green-700 font-semibold mb-2">
                  {post.category}
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;