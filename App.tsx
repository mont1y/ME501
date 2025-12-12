import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Background from './components/Background';
import Navigation from './components/Navigation';
import { SlideIndex } from './types';

// Slides
import WelcomeSlide from './components/slides/WelcomeSlide';
import FoundationsSlide from './components/slides/FoundationsSlide';
import PillarsSlide from './components/slides/PillarsSlide';
import DialogueSlide from './components/slides/DialogueSlide';
import ConceptualSlide from './components/slides/ConceptualSlide';
import ConclusionSlide from './components/slides/ConclusionSlide';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides = 6; // Increased to 6

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slideProps = {
    onNext: nextSlide,
    onPrev: prevSlide,
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case SlideIndex.WELCOME:
        return <WelcomeSlide {...slideProps} isFirst />;
      case SlideIndex.FOUNDATIONS:
        return <FoundationsSlide {...slideProps} />;
      case SlideIndex.PILLARS:
        return <PillarsSlide {...slideProps} />;
      case SlideIndex.DIALOGUE:
        return <DialogueSlide {...slideProps} />;
      case SlideIndex.UNDERSTANDING:
        return <ConceptualSlide {...slideProps} />;
      case SlideIndex.CONCLUSION:
        return <ConclusionSlide {...slideProps} isLast />;
      default:
        return <WelcomeSlide {...slideProps} />;
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-slate-50 text-slate-800 selection:bg-blue-200 font-sans">
      <Background />
      
      <main className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Animated Slide Container */}
        {/* Added pb-32 to ensure content is never hidden behind the fixed navigation */}
        <div className="flex-1 w-full relative p-4 pb-40 md:pb-32 flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full max-w-7xl mx-auto"
            >
              {renderSlide()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Bar */}
        <Navigation 
          onNext={nextSlide} 
          onPrev={prevSlide}
          canGoNext={currentSlide < totalSlides - 1}
          canGoPrev={currentSlide > 0}
          currentSlide={currentSlide}
          totalSlides={totalSlides}
        />
      </main>
    </div>
  );
};

export default App;