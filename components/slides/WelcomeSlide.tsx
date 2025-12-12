import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { TutorCharacter, StudentCharacter, DecorCloud, MathSymbol, FloatingBook, FloatingPencil } from '../illustrations/SceneComponents';

const WelcomeSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 relative pt-24 pb-12">
      
      {/* Header Info - BU "Logo" Style */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="absolute top-0 left-0 right-0 py-6 px-4 z-20 flex flex-col items-center bg-gradient-to-b from-white/90 to-transparent"
      >
        <h2 className="text-slate-700 text-3xl md:text-5xl font-serif font-black tracking-tight uppercase drop-shadow-sm mb-1">
          Boston University
        </h2>
        <p className="text-slate-600 text-sm md:text-lg font-bold tracking-widest uppercase border-t-2 border-slate-300 pt-2 mt-1">
          Wheelock College of Education & Human Development
        </p>
      </motion.div>

      {/* Animated Illustration Scene */}
      <div className="relative w-full max-w-lg h-56 md:h-64 mb-6 mt-8">
        <svg viewBox="0 0 300 220" className="w-full h-full overflow-visible">
            {/* Background Decor */}
            <DecorCloud x={20} y={40} scale={0.8} delay={0} />
            <DecorCloud x={220} y={20} scale={0.6} delay={2} />
            
            {/* Math Symbols floating */}
            <MathSymbol x={50} y={100} symbol="+" color="#3b82f6" delay={0.5} />
            <MathSymbol x={250} y={80} symbol="÷" color="#f59e0b" delay={1.5} />
            <MathSymbol x={150} y={50} symbol="x" color="#ec4899" delay={1} />
            
            {/* Extra Props */}
            <g transform="translate(10, 150) scale(0.8)"><FloatingBook x={0} y={0} /></g>
            <g transform="translate(260, 140) scale(0.8)"><FloatingPencil x={0} y={0} delay={1} /></g>

            {/* Characters */}
            <g transform="translate(-20, 0)">
                <TutorCharacter isSpeaking={true} emotion="happy" />
            </g>
            <g transform="translate(20, 0)">
                <StudentCharacter isSpeaking={false} emotion="happy" />
            </g>
        </svg>
      </div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-6xl md:text-8xl font-black mb-6 text-slate-800 tracking-tighter leading-[0.9]"
      >
        The Art of<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Math Tutoring</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-medium mb-12"
      >
        A guide to building <span className="text-blue-600 font-bold bg-blue-50 px-2 rounded">confidence</span>, 
        fostering <span className="text-amber-500 font-bold bg-amber-50 px-2 rounded">equity</span>, and 
        igniting <span className="text-emerald-600 font-bold bg-emerald-50 px-2 rounded">understanding</span>.
      </motion.p>

      {/* Credits - Enhanced Visibility */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full max-w-4xl bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
      >
        <div className="flex flex-col items-center group">
            <span className="text-slate-400 text-xs uppercase tracking-[0.25em] font-bold mb-2 group-hover:text-blue-500 transition-colors">Course Instructor</span>
            <span className="text-2xl md:text-3xl font-black text-slate-800 text-center">Professor Aaron Brakoniecki</span>
        </div>
        
        <div className="hidden md:block w-px h-16 bg-slate-200"></div>

        <div className="flex flex-col items-center group">
             <span className="text-slate-400 text-xs uppercase tracking-[0.25em] font-bold mb-2 group-hover:text-blue-500 transition-colors">Presented By</span>
             <span className="text-2xl md:text-3xl font-black text-slate-800 text-center">Tiannu (Monty) Zhang</span>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeSlide;