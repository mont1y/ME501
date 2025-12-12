import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, HeartHandshake, Scale, RotateCcw } from 'lucide-react';
import { SlideProps } from '../../types';
import { MathParticles } from '../illustrations/SceneComponents';

const pillars = [
  {
    title: "Access",
    icon: <ShieldCheck className="w-12 h-12" />,
    fullDesc: "Equity isn't just about kindness. It's about ensuring every student, regardless of background, has a way to engage with rigorous math tasks.",
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200"
  },
  {
    title: "Agency",
    icon: <Zap className="w-12 h-12" />,
    fullDesc: "Stop holding the pencil! Let the student struggle productively. When they do the thinking, they build the neural pathways.",
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200"
  },
  {
    title: "Affirmation",
    icon: <HeartHandshake className="w-12 h-12" />,
    fullDesc: "Math identity is fragile. Explicitly praise their logic, not just their answers. 'I love how you connected those two ideas!'",
    bg: "bg-pink-50",
    text: "text-pink-600",
    border: "border-pink-200"
  },
  {
    title: "Rigor",
    icon: <Scale className="w-12 h-12" />,
    fullDesc: "Scaffolding shouldn't mean simplifying the math until it's trivial. Support them in reaching the high bar, don't lower it.",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200"
  }
];

const FlipCard = ({ pillar }: { pillar: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
        className="relative h-96 w-full cursor-pointer perspective-1000 group"
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face */}
        <div 
            className={`absolute inset-0 rounded-3xl border-2 ${pillar.border} bg-white flex flex-col items-center justify-center p-6 text-center hover:scale-[1.02] transition-transform z-20 shadow-xl`}
            style={{ backfaceVisibility: "hidden" }}
        >
            <div className={`p-6 rounded-full ${pillar.bg} ${pillar.text} mb-8 shadow-sm`}>
              {pillar.icon}
            </div>
            <h3 className="text-3xl font-black mb-4 text-slate-800 tracking-tight">{pillar.title}</h3>
            
            <div className="mt-auto mb-4 py-2 px-4 rounded-full bg-slate-100 text-slate-500 font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:bg-slate-200 transition-colors">
                <RotateCcw className="w-4 h-4" /> Click to see more
            </div>
        </div>

        {/* Back Face - Note rotateY(180deg) to prevent text mirroring */}
        <div 
            className={`absolute inset-0 rounded-3xl border-2 ${pillar.border} bg-white flex flex-col items-center justify-center text-center p-8 z-10 shadow-xl`}
            style={{ 
                backfaceVisibility: "hidden", 
                transform: "rotateY(180deg)" 
            }}
        >
             <h3 className={`text-2xl font-black mb-6 ${pillar.text}`}>{pillar.title}</h3>
             <p className="text-slate-600 leading-relaxed font-medium text-lg">
                {pillar.fullDesc}
             </p>
             <div className="mt-auto text-slate-300">
                <RotateCcw className="w-5 h-5" />
             </div>
        </div>
      </motion.div>
    </div>
  );
};

const PillarsSlide: React.FC<SlideProps> = () => {
  return (
    <div className="flex flex-col items-center justify-start h-full px-4 w-full relative">
      {/* Background SVG Elements */}
      <MathParticles />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-10 mt-4 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-2 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-2 inline-block shadow-sm">
            4 Pillars of <span className="text-blue-600 underline decoration-4 decoration-blue-200/50">Equitable Tutoring</span>
        </h2>
      </motion.div>

      {/* Grid adapts to screen size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mb-12 relative z-10">
        {pillars.map((pillar, index) => (
            <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
            >
                <FlipCard pillar={pillar} />
            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PillarsSlide;