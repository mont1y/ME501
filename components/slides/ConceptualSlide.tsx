import React from 'react';
import { motion } from 'framer-motion';
import { Network, Clock, RefreshCw } from 'lucide-react';
import { SlideProps } from '../../types';
import { MathParticles, MathSymbol } from '../illustrations/SceneComponents';

const ConceptualSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 max-w-6xl mx-auto w-full relative">
      
      {/* THE BLIZZARD: Massive amounts of animated SVG particles */}
      <MathParticles />
      {/* Extra specific blizzard layers */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
         {Array.from({length: 15}).map((_, i) => (
            <MathSymbol 
                key={`sym-${i}`} 
                x={Math.random() * 800} 
                y={Math.random() * 600} 
                symbol={['∑', '∫', '≠', '≈', '∞'][i % 5]} 
                color="#cbd5e1" 
                delay={i * 0.2} 
            />
         ))}
      </svg>

      <motion.div 
        className="text-center mb-16 relative z-10 bg-white/90 backdrop-blur-sm p-6 rounded-3xl border border-slate-100 shadow-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
          From Procedures to{' '}
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500"
            style={{ 
                backgroundSize: '200% auto',
                animation: 'gradient 3s linear infinite'
            }}
          >
            Concepts
          </span>
        </h2>
        <style>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Don't just teach the steps. Teach the <span className="font-bold text-slate-700">story</span> of the math.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative z-10">
        
        {/* Card 1: Connections */}
        <motion.div 
            className="bg-white/95 p-8 rounded-3xl border border-slate-100 shadow-xl shadow-purple-100/50 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-md"
            whileHover={{ y: -10, scale: 1.02 }}
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-purple-500" />
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
                <Network className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Make Connections</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
                Link symbols to visuals. Ask "Can you show that with a drawing?"
            </p>
        </motion.div>

        {/* Card 2: Slow is Fast */}
        <motion.div 
            className="bg-white/95 p-8 rounded-3xl border border-slate-100 shadow-xl shadow-blue-100/50 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-md"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ delay: 0.1 }}
        >
             <div className="absolute top-0 left-0 w-full h-2 bg-blue-500" />
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Slow is Fast</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
                Taking time to understand <span className="font-bold text-blue-600">WHY</span> now prevents confusion later.
            </p>
        </motion.div>

        {/* Card 3: Representations */}
        <motion.div 
            className="bg-white/95 p-8 rounded-3xl border border-slate-100 shadow-xl shadow-emerald-100/50 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-md"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ delay: 0.2 }}
        >
             <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                <RefreshCw className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Deep Fluency</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
                Fluency isn't just speed. It's knowing when and how to use a tool flexibly.
            </p>
        </motion.div>

      </div>
    </div>
  );
};

export default ConceptualSlide;