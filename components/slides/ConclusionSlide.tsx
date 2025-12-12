import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';
import { SlideProps } from '../../types';
import { TutorCharacter, StudentCharacter, FloatingBook, FloatingPencil, MathSymbol } from '../illustrations/SceneComponents';

const ConclusionSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 relative w-full pt-10">
      
      {/* Background Burst */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none"
      >
        <div className="w-[1000px] h-[1000px] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(59,130,246,0.8)_360deg)] rounded-full" />
      </motion.div>

      {/* Main Content Container - Flex Column Centered */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl z-10">
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-5xl md:text-7xl font-black mb-6 text-slate-800 text-center"
          >
            You Are Ready!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-500 max-w-2xl mb-12 font-medium text-center"
          >
            Go make math meaningful, equitable, and <span className="text-blue-600 font-bold">fun</span>.
          </motion.p>

          {/* Character Scene - Explicitly sized to avoid overlap */}
          <div className="relative h-64 w-full flex justify-center items-end mb-12">
            <svg width="400" height="250" viewBox="0 0 400 250" className="overflow-visible">
                {/* Floating Elements */}
                <g transform="translate(20, 50)"><FloatingBook x={0} y={0} /></g>
                <g transform="translate(350, 40)"><FloatingPencil x={0} y={0} delay={1} /></g>
                <g transform="translate(50, 150)"><MathSymbol x={0} y={0} symbol="+" color="#60a5fa" delay={0.5} /></g>
                <g transform="translate(350, 150)"><MathSymbol x={0} y={0} symbol="=" color="#f472b6" delay={1.5} /></g>

                {/* Characters */}
                <g transform="translate(90, 30)">
                    <motion.g animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
                        <TutorCharacter emotion="happy" isSpeaking={false} />
                    </motion.g>
                </g>
                <g transform="translate(210, 30)">
                    <motion.g animate={{ y: [0, -15, 0] }} transition={{ duration: 1.5, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}>
                        <StudentCharacter emotion="happy" isSpeaking={false} />
                    </motion.g>
                </g>
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-lg flex items-center gap-2 text-slate-700 font-bold hover:scale-105 transition-transform">
                <Star className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                Affirm Potential
            </div>
            <div className="px-6 py-3 rounded-xl bg-white border border-slate-200 shadow-lg flex items-center gap-2 text-slate-700 font-bold hover:scale-105 transition-transform">
                 <Sparkles className="text-purple-400 w-5 h-5 fill-purple-100" />
                Build Equity
            </div>
          </motion.div>

      </div>
    </div>
  );
};

export default ConclusionSlide;