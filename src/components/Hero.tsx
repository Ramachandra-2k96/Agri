import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
          alt="Agricultural field at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center text-white px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Empowering Farmers with AI for a Greener Future
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Transform your farming practices with cutting-edge AI technology and join a community of forward-thinking agriculturists
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 flex items-center gap-2 mx-auto">
          Get Started Today <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  );
}