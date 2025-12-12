import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#fdfbf7]">
      {/* Soft Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-0 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-green-100/50 rounded-full blur-3xl"
      />
      
      {/* Pattern Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#000" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
};

export default Background;