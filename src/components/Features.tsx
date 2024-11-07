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
      <div className="px-4 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Revolutionizing Agriculture</h2>
          <p className="text-xl text-gray-600">Harness the power of AI to optimize your farming practices</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="p-6 transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-12 h-12 mb-4 text-green-600" />
              </motion.div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}