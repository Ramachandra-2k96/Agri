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
      <section className="py-20 bg-green-50">
        <div className="px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Learning Resources
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Access our comprehensive collection of farming guides, tutorials, and tools
              to enhance your agricultural knowledge and practices.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start p-6 space-x-4 bg-white shadow-lg rounded-xl"
              >
                <resource.icon className="flex-shrink-0 w-8 h-8 text-green-600" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{resource.title}</h3>
                  <p className="mb-4 text-gray-600">{resource.description}</p>
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
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
            className="p-8 mt-12 bg-white shadow-lg rounded-xl"
          >
            <h2 className="mb-6 text-2xl font-bold">Featured Content</h2>
            <div className="flex items-center justify-center overflow-hidden bg-gray-100 rounded-lg aspect-video">
            <video
                src="/assets/videos/video.mp4" 
                className="object-cover w-full h-full"
                controls
                autoPlay
                muted
              />
            </div>
            <div className="mt-4">
              <h3 className="mb-2 text-xl font-semibold">
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