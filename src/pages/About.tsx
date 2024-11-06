import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Shield, Globe } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Promoting eco-friendly farming practices for a better tomorrow"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Providing accurate, data-driven insights you can trust"
    },
    {
      icon: Globe,
      title: "Community",
      description: "Building a global network of forward-thinking farmers"
    }
  ];

  return (
    <div className="pt-16">
      <section className="relative py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize agriculture through AI technology,
              making sustainable farming practices accessible to everyone while
              ensuring food security for future generations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <value.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2024, AgriTech AI emerged from a simple yet powerful idea:
                to bridge the gap between traditional farming wisdom and cutting-edge
                technology.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve thousands of farmers across the globe,
                helping them make data-driven decisions that improve yields while
                preserving our planet's resources for future generations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
                alt="Farmers using technology"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}