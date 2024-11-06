import React from 'react';
import { motion } from 'framer-motion';
import {
  Droplets,
  Thermometer,
  Wind,
  Sun,
  TrendingUp,
  Calendar
} from 'lucide-react';

export function Overview() {
  const stats = [
    { icon: Droplets, label: 'Soil Moisture', value: '65%' },
    { icon: Thermometer, label: 'Temperature', value: '24°C' },
    { icon: Wind, label: 'Wind Speed', value: '12 km/h' },
    { icon: Sun, label: 'UV Index', value: 'Moderate' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              </div>
              <stat.icon className="w-8 h-8 text-green-600" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Yield Prediction</h2>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Yield prediction chart placeholder</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-sm text-gray-600"
              >
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Soil moisture level updated</span>
                <span className="text-gray-400">2h ago</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}