import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Droplets, Leaf, TestTube } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function SoilHealth() {
  const moistureData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Moisture Content (%)',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const nutrients = [
    { name: 'Nitrogen (N)', level: 75, color: 'bg-blue-500' },
    { name: 'Phosphorus (P)', level: 60, color: 'bg-green-500' },
    { name: 'Potassium (K)', level: 85, color: 'bg-purple-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-6 space-x-2">
        <TestTube className="w-6 h-6 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800">Soil Health</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Nutrient Levels */}
        <div className="space-y-4">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">Nutrient Levels</h3>
          {nutrients.map((nutrient, index) => (
            <motion.div
              key={nutrient.name}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: index * 0.2 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm text-gray-600">
                <span>{nutrient.name}</span>
                <span>{nutrient.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${nutrient.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`h-full rounded-full ${nutrient.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Moisture Content Graph */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-700">Moisture Trends</h3>
          <Line data={moistureData} options={{ responsive: true }} />
        </div>

        {/* Soil Health Score */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="col-span-1 p-6 mt-4 rounded-lg md:col-span-2 bg-green-50"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Overall Soil Health Score</h3>
              <p className="text-sm text-gray-500">Based on nutrient levels and moisture content</p>
            </div>
            <div className="text-4xl font-bold text-green-600">85</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};