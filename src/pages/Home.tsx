import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

export function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 h-32 -mt-20 bg-gradient-to-b from-transparent to-gray-50"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Features />
      </motion.div>
      <Pricing />
      <Footer />
    </div>
  );
}