import React from 'react';
import { Sprout, Cloud, Users2, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Sprout, title: "Soil Analysis", desc: "AI-powered soil health monitoring and recommendations" },
  { icon: Cloud, title: "Weather Insights", desc: "Precise weather forecasting for better crop planning" },
  { icon: Users2, title: "Community Knowledge", desc: "Connect with expert farmers and share insights" },
  { icon: LineChart, title: "Yield Prediction", desc: "Data-driven harvest predictions and optimization" }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionizing Agriculture</h2>
          <p className="text-xl text-gray-600">Harness the power of AI to optimize your farming practices</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <feature.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}