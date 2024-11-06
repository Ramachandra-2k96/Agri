import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, Award } from 'lucide-react';

export function Community() {
  const discussions = [
    {
      title: "Sustainable Irrigation Techniques",
      author: "Sarah Chen",
      replies: 24,
      category: "Water Management"
    },
    {
      title: "AI Predictions for Winter Crops",
      author: "John Smith",
      replies: 18,
      category: "AI Insights"
    },
    {
      title: "Organic Pest Control Methods",
      author: "Maria Garcia",
      replies: 32,
      category: "Organic Farming"
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
              Join Our Farming Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with fellow farmers, share experiences, and learn from experts
              in sustainable agriculture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Active Discussions</h3>
              <p className="text-gray-600">Join conversations about sustainable farming practices</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Network</h3>
              <p className="text-gray-600">Learn from experienced agricultural professionals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
              <p className="text-gray-600">Share your achievements and learn from others</p>
            </motion.div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold">Recent Discussions</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {discussions.map((discussion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{discussion.title}</h3>
                      <p className="text-sm text-gray-600">
                        Posted by {discussion.author} · {discussion.replies} replies
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {discussion.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}