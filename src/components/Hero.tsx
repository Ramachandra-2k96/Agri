import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Shield, BarChart3, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VideoModal } from './VideoModal';

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80"
            alt="Aerial view of farmland"
            className="object-cover w-full h-full"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative flex items-center h-screen px-4 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 pt-16 lg:grid-cols-2 md:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
              Transform Your Farm with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                {" "}AI Innovation
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-300">
              Harness the power of artificial intelligence to revolutionize your farming practices.
              Join thousands of farmers already growing smarter.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/signup"
                className="flex items-center justify-center px-8 py-4 font-semibold text-white transition-all transform rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-105 group"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center justify-center px-8 py-4 font-semibold text-white transition-all rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 group"
              >
                <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden grid-cols-2 gap-6 lg:grid"
          >
            {[
              { icon: Leaf, title: "Smart Farming", value: "85% More Efficient" },
              { icon: Shield, title: "Crop Protection", value: "99.9% Accuracy" },
              { icon: BarChart3, title: "Yield Increase", value: "40% Average" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-2xl backdrop-blur-md ${
                  index === 2 ? "col-span-2" : ""
                } ${
                  index % 2 === 0 ? "bg-white/10" : "bg-green-500/20"
                }`}
              >
                <stat.icon className="w-8 h-8 mb-4 text-green-400" />
                <p className="text-sm text-gray-300">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <div className="flex justify-center w-6 h-10 border-2 rounded-full border-white/30">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="src/assets/videos/video.mp4" // Change this to your local or remote video file
      />
    </div>
  );
}