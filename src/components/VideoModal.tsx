import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string; // Add a prop for the video source
}

export function VideoModal({ isOpen, onClose, videoSrc }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl overflow-hidden bg-black rounded-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute z-10 p-2 transition-colors rounded-full top-4 right-4 bg-white/10 hover:bg-white/20"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="relative pt-[56.25%]">
              {/* Use the <video> element instead of <iframe> */}
              <video
                src={videoSrc}
                title="Smart Farming Technology"
                className="absolute inset-0 w-full h-full"
                controls
                autoPlay
                muted
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
