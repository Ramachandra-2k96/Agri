import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, Share2 } from 'lucide-react';
import { format } from 'date-fns';

export function CommunityUpdates(){
  const updates = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      content: "Just implemented new irrigation system - seeing 20% water savings already!",
      likes: 24,
      comments: 8,
      timestamp: new Date(2024, 1, 15),
    },
    {
      id: 2,
      author: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      content: "Anyone experiencing unusual pest activity in their corn fields this season?",
      likes: 15,
      comments: 12,
      timestamp: new Date(2024, 1, 14),
    },
    {
      id: 3,
      author: "Emma Davis",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      content: "Hosting a sustainable farming workshop next weekend. All welcome!",
      likes: 32,
      comments: 5,
      timestamp: new Date(2024, 1, 13),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Users className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-800">Community Updates</h2>
        </div>
        <button className="px-4 py-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700">
          New Post
        </button>
      </div>

      <div className="space-y-6">
        {updates.map((update, index) => (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="pb-6 border-b border-gray-100 last:border-0 last:pb-0"
          >
            <div className="flex items-start space-x-4">
              <img
                src={update.avatar}
                alt={update.author}
                className="object-cover w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">{update.author}</h3>
                  <span className="text-sm text-gray-500">
                    {format(update.timestamp, 'MMM d')}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{update.content}</p>
                <div className="flex items-center mt-4 space-x-6">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{update.likes}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">{update.comments}</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-purple-600">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
