import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Download, Calendar } from 'lucide-react';

export function Resources() {
  const resources = [
    {
      title: "AI in Agriculture Guide",
      type: "PDF Guide",
      icon: BookOpen,
      description: "Comprehensive guide on implementing AI in farming practices"
    },
    {
      title: "Soil Analysis Masterclass",
      type: "Video Course",
      icon: Video,
      description: "Learn advanced techniques for soil health monitoring"
    },
    {
      title: "Weather Prediction Tools",
      type: "Software",
      icon: Download,
      description: "Download our latest weather forecasting tools"
    },
    {
      title: "Expert Webinars",
      type: "Events",
      icon: Calendar,
      description: "Join live sessions with agricultural experts"
    }
  ];

  return (
    <div className="pt-16">
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Learning Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive collection of farming guides, tutorials, and tools
              to enhance your agricultural knowledge and practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4"
              >
                <resource.icon className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {resource.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">Featured video content placeholder</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">
                Introduction to Smart Farming
              </h3>
              <p className="text-gray-600">
                Learn the basics of implementing smart farming techniques using our AI
                platform. This comprehensive guide covers everything from soil analysis
                to yield prediction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}