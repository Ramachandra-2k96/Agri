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
      <section className="py-20 bg-green-50">
        <div className="px-4 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Join Our Farming Community
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Connect with fellow farmers, share experiences, and learn from experts
              in sustainable agriculture.
            </p>
          </motion.div>

          <div className="grid gap-8 mb-12 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 text-center bg-white shadow-lg rounded-xl"
            >
              <MessageSquare className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="mb-2 text-xl font-semibold">Active Discussions</h3>
              <p className="text-gray-600">Join conversations about sustainable farming practices</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 text-center bg-white shadow-lg rounded-xl"
            >
              <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="mb-2 text-xl font-semibold">Expert Network</h3>
              <p className="text-gray-600">Learn from experienced agricultural professionals</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 text-center bg-white shadow-lg rounded-xl"
            >
              <Award className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="mb-2 text-xl font-semibold">Success Stories</h3>
              <p className="text-gray-600">Share your achievements and learn from others</p>
            </motion.div>
          </div>

          <div className="overflow-hidden bg-white shadow-lg rounded-xl">
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
                  className="p-6 transition-colors hover:bg-gray-50"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="mb-1 text-lg font-semibold">{discussion.title}</h3>
                      <p className="text-sm text-gray-600">
                        Posted by {discussion.author} · {discussion.replies} replies
                      </p>
                    </div>
                    <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">
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