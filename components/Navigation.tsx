import React from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavigationProps {
  onNext: () => void;
  onPrev: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  currentSlide: number;
  totalSlides: number;
}

const Navigation: React.FC<NavigationProps> = ({ 
  onNext, 
  onPrev, 
  canGoNext, 
  canGoPrev,
  currentSlide,
  totalSlides
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center gap-4 pb-8 pt-4 bg-gradient-to-t from-slate-50 to-transparent">
      {/* Progress Dots */}
      <div className="flex gap-3 mb-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-sm">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <motion.div
            key={idx}
            initial={false}
            animate={{
              scale: currentSlide === idx ? 1.3 : 1,
              backgroundColor: currentSlide === idx ? '#3b82f6' : '#cbd5e1',
            }}
            className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
          />
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={onPrev}
          disabled={!canGoPrev}
          className={`p-4 rounded-full bg-white shadow-lg border border-slate-100 transition-all duration-300 ${
            !canGoPrev ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:shadow-xl text-slate-700'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <motion.button
          onClick={onNext}
          disabled={!canGoNext}
          whileHover={canGoNext ? { scale: 1.05 } : {}}
          whileTap={canGoNext ? { scale: 0.95 } : {}}
          className={`group px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all duration-300 shadow-lg ${
            !canGoNext 
              ? 'opacity-50 bg-slate-200 cursor-not-allowed text-slate-400' 
              : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-xl'
          }`}
        >
          {currentSlide === totalSlides - 1 ? 'Finish' : 'Next Topic'}
          <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${canGoNext ? 'group-hover:translate-x-1' : ''}`} />
        </motion.button>
      </div>
    </div>
  );
};

export default Navigation;