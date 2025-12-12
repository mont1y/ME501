import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { SlideProps } from '../../types';
import { TutorCharacter, StudentCharacter, DecorCloud } from '../illustrations/SceneComponents';

const moves = [
  {
    id: 'elicit',
    title: "Elicit Thinking",
    question: "Tell me more about how you started...",
    response: "Well, I drew a number line first.",
    tutorEmotion: "happy",
    studentEmotion: "neutral"
  },
  {
    id: 'revoice',
    title: "Revoice",
    question: "So you're saying the 5 represents...",
    response: "Yeah! It's the number of groups.",
    tutorEmotion: "happy",
    studentEmotion: "happy"
  },
  {
    id: 'press',
    title: "Press for Reasoning",
    question: "Why does that step work?",
    response: "Because... wait, let me check.",
    tutorEmotion: "neutral",
    studentEmotion: "confused"
  }
];

const DialogueSlide: React.FC<SlideProps> = () => {
  const [activeChat, setActiveChat] = useState<number>(0);

  return (
    <div className="flex flex-col items-center justify-start h-full px-4 w-full max-w-6xl mx-auto pt-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-2">The Art of Talk</h2>
        <p className="text-slate-500 font-medium text-lg">Good tutoring isn't explaining. It's <span className="text-blue-600 font-bold bg-blue-50 px-1 rounded">asking</span>.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full items-stretch">
        
        {/* Left: Interactive List */}
        <div className="flex flex-col gap-3 flex-1">
          {moves.map((move, idx) => (
            <button
              key={move.id}
              onClick={() => setActiveChat(idx)}
              className={`p-5 rounded-2xl border-2 text-left flex items-center justify-between transition-all duration-200 group relative overflow-hidden ${
                activeChat === idx 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-[1.02]' 
                  : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-4 relative z-10">
                  <div className={`p-2 rounded-lg transition-colors ${activeChat === idx ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-white'}`}>
                    <MessageCircle className={`w-5 h-5 ${activeChat === idx ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                  <div>
                    <span className="font-bold text-lg block">{move.title}</span>
                    <span className={`text-xs ${activeChat === idx ? 'text-blue-100' : 'text-slate-400'}`}>Click to simulate</span>
                  </div>
              </div>
              {activeChat === idx && <ArrowRight className="w-5 h-5 animate-pulse" />}
            </button>
          ))}
        </div>

        {/* Right: SVG Scene Animation */}
        <div className="flex-[1.5] relative bg-white rounded-3xl border border-slate-200 shadow-xl p-4 md:p-8 min-h-[400px] md:h-[500px] flex flex-col overflow-hidden">
             
             {/* Scene Content */}
             <div className="flex-1 w-full flex justify-between items-end relative z-10 pb-4 px-2 md:px-8">
                
                {/* Tutor */}
                <div className="relative flex flex-col items-center">
                     {/* Tutor Bubble */}
                     <AnimatePresence mode="wait">
                        <motion.div
                            key={`tutor-${activeChat}`}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                            className="absolute bottom-[220px] left-0 md:left-auto bg-blue-50 text-blue-900 p-4 rounded-2xl rounded-bl-none w-40 md:w-56 shadow-sm border-2 border-blue-100 z-20"
                        >
                            <p className="text-sm font-bold leading-snug">"{moves[activeChat].question}"</p>
                        </motion.div>
                    </AnimatePresence>
                    
                    <svg width="140" height="200" viewBox="0 0 150 220" className="overflow-visible">
                        <TutorCharacter isSpeaking={true} emotion={moves[activeChat].tutorEmotion} />
                    </svg>
                </div>

                {/* Student */}
                <div className="relative flex flex-col items-center">
                     {/* Student Bubble */}
                     <AnimatePresence mode="wait">
                        <motion.div
                            key={`student-${activeChat}`}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                            className="absolute bottom-[220px] right-0 md:right-auto bg-amber-50 text-amber-900 p-4 rounded-2xl rounded-br-none w-40 md:w-56 shadow-sm border-2 border-amber-100 z-20"
                        >
                            <p className="text-sm font-bold leading-snug">"{moves[activeChat].response}"</p>
                        </motion.div>
                    </AnimatePresence>

                    <svg width="140" height="200" viewBox="0 0 150 220" className="overflow-visible">
                        <g transform="translate(-110, 0)">
                             <StudentCharacter isSpeaking={true} emotion={moves[activeChat].studentEmotion} />
                        </g>
                    </svg>
                </div>
             </div>

             {/* Floor/Decor */}
             <div className="absolute bottom-0 left-0 right-0 h-6 bg-slate-100 border-t border-slate-200" />
             <div className="absolute top-10 left-10 opacity-50"><DecorCloud x={0} y={0} scale={0.5} /></div>
             <div className="absolute top-20 right-20 opacity-50"><DecorCloud x={0} y={0} scale={0.7} delay={1} /></div>
        </div>

      </div>
    </div>
  );
};

export default DialogueSlide;