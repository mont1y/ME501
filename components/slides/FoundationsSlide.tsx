import React from 'react';
import { motion } from 'framer-motion';
import { SlideProps } from '../../types';
import { TutorCharacter, StudentCharacter, MathParticles } from '../illustrations/SceneComponents';
import { Brain, Heart, TrendingUp } from 'lucide-react';

const FoundationsSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 w-full pt-20 md:pt-24 relative">
      
      {/* BU Header (Persistent) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-0 left-0 right-0 py-4 px-4 z-20 flex flex-col items-center bg-gradient-to-b from-slate-50 to-transparent"
      >
        <h2 className="text-slate-700 text-xl md:text-3xl font-serif font-black tracking-tight uppercase drop-shadow-sm mb-1">
          Boston University
        </h2>
        <p className="text-slate-600 text-xs md:text-sm font-bold tracking-widest uppercase border-t-2 border-slate-300 pt-1 mt-1">
          Wheelock College of Education & Human Development
        </p>
      </motion.div>

      {/* Background Blizzard */}
      <MathParticles />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-4">
          What is <span className="text-blue-600">Tutoring?</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-slate-100">
          "The ultimate goal is to make the tutor <span className="text-red-500 font-bold decoration-wavy underline">unnecessary</span>."
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 w-full max-w-5xl relative z-10">
        
        {/* Left Concept: Scaffolding */}
        <motion.div 
            className="flex-1 bg-white p-8 rounded-3xl border border-blue-100 shadow-xl flex flex-col items-center text-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
        >
            {/* 
                FIX: Increased height to h-64 to reserve space.
                FIX: SVG viewBox adjusted to 0 0 350 250 to contain the full height (y=220) and width of characters.
            */}
            <div className="h-64 w-full relative mb-4">
                <svg viewBox="0 0 350 250" className="w-full h-full overflow-hidden">
                    {/* Tutor - Positioned left */}
                    <motion.g 
                        transform="translate(-20, 10)" 
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.2, filter: "grayscale(100%)" }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    >
                        <TutorCharacter isSpeaking={true} />
                    </motion.g>
                    
                    {/* Student - Positioned right (moved closer with translate) */}
                    <motion.g 
                        transform="translate(20, 10)"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    >
                        <StudentCharacter emotion="happy" />
                    </motion.g>
                </svg>
            </div>
            <div className="mt-auto">
                <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center justify-center gap-2">
                    <TrendingUp className="text-blue-500" />
                    Build Independence
                </h3>
                <p className="text-slate-500 text-sm">
                    Scaffold support that fades over time. Shift focus from "Can I do this problem?" to "Do I know how to figure it out?"
                </p>
            </div>
        </motion.div>

        {/* Right Concept: Emotions */}
        <motion.div 
            className="flex-1 bg-white p-8 rounded-3xl border border-pink-100 shadow-xl flex flex-col items-center text-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
        >
             <div className="h-64 w-full relative mb-4 flex items-center justify-center">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative"
                >
                    <Heart className="w-32 h-32 text-pink-200 fill-pink-50" />
                    <Brain className="w-16 h-16 text-slate-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </motion.div>
            </div>
            <div className="mt-auto">
                <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center justify-center gap-2">
                    <Heart className="text-pink-500" />
                    Cognitive & Affective
                </h3>
                <p className="text-slate-500 text-sm">
                    Math is emotional (anxiety, shame, pride). Balance content support with emotional affirmation.
                </p>
            </div>
        </motion.div>
      </div>

      <motion.div 
        className="mt-8 bg-amber-50 border border-amber-200 p-4 rounded-xl text-center max-w-3xl relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-amber-800 font-medium">
            <span className="font-bold">Ethical Check:</span> Access to good tutoring can widen or narrow gaps. Be inclusive, patient, and check your biases.
        </p>
      </motion.div>
    </div>
  );
};

export default FoundationsSlide;