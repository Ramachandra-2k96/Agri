import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { TrendingUp, DollarSign, Sprout } from 'lucide-react';

export function YieldPredictions (){
  const yieldData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Expected Yield (tons)',
        data: [12, 19, 15, 25, 22, 30],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Actual Yield (tons)',
        data: [10, 15, 13, 20, 18, 25],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-6 space-x-2">
        <TrendingUp className="w-6 h-6 text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-800">Yield Predictions</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Yield Chart */}
        <div className="col-span-2">
          <Line data={yieldData} options={{ responsive: true }} />
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="p-6 rounded-lg bg-indigo-50"
        >
          <div className="flex items-center mb-4 space-x-2">
            <DollarSign className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-semibold text-gray-700">ROI Calculator</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Expected Yield (tons)</label>
              <input
                type="number"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                defaultValue="25"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Price per ton ($)</label>
              <input
                type="number"
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                defaultValue="1000"
              />
            </div>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-lg font-semibold text-indigo-600">Estimated Revenue: $25,000</p>
            </div>
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-lg bg-green-50"
        >
          <div className="flex items-center mb-4 space-x-2">
            <Sprout className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-700">Recommendations</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <span className="flex items-center justify-center w-5 h-5 text-sm text-white bg-green-500 rounded-full">✓</span>
              <span className="text-sm text-gray-600">Increase irrigation by 15%</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="flex items-center justify-center w-5 h-5 text-sm text-white bg-green-500 rounded-full">✓</span>
              <span className="text-sm text-gray-600">Apply nitrogen fertilizer next week</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="flex items-center justify-center w-5 h-5 text-sm text-white bg-green-500 rounded-full">✓</span>
              <span className="text-sm text-gray-600">Monitor for pest activity</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};