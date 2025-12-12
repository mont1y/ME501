import React from 'react';
import { motion } from 'framer-motion';

// --- Shared Character Styles ---
const SkinColor = "#ffcdb2"; // Warmer skin tone
const SkinColorDark = "#e5989b"; 
const ShirtTutor = "#6d6875"; // Muted purple/grey
const ShirtStudent = "#b5838d"; // Dusty rose
const HairTutor = "#353535"; // Dark grey
const HairStudent = "#6d6875";

interface CharacterProps {
  isSpeaking?: boolean;
  emotion?: string;
}

// --- Tutor Character Component ---
export const TutorCharacter: React.FC<CharacterProps> = ({ isSpeaking = false, emotion = "neutral" }) => (
  <motion.g
    initial={{ y: 2 }}
    animate={{ y: 0 }}
    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
  >
    {/* Body */}
    <path d="M40,140 Q40,180 30,220 L130,220 Q120,180 120,140 Q120,100 80,100 Q40,100 40,140" fill={ShirtTutor} />
    
    {/* Neck */}
    <rect x="70" y="85" width="20" height="20" fill={SkinColor} />
    
    {/* Head */}
    <motion.circle 
      cx="80" cy="65" r="32" fill={SkinColor} 
      animate={isSpeaking ? { rotate: [0, 1, -1, 0] } : {}}
      transition={{ duration: 0.5, repeat: isSpeaking ? Infinity : 0 }}
    />
    
    {/* Hair - Short neat cut, no bun */}
    <path d="M48,60 Q50,20 80,20 Q110,20 112,60 Q112,70 108,60" fill={HairTutor} />
    
    {/* Eyes - Simple friendly dots */}
    <circle cx="72" cy="65" r="2.5" fill="#1e293b" />
    <circle cx="88" cy="65" r="2.5" fill="#1e293b" />

    {/* Cheeks */}
    <circle cx="68" cy="72" r="3" fill="#ffb4a2" opacity="0.6" />
    <circle cx="92" cy="72" r="3" fill="#ffb4a2" opacity="0.6" />

    {/* Mouth - animated only if speaking */}
    <motion.path 
      d={emotion === "happy" ? "M72,78 Q80,85 88,78" : "M75,80 L85,80"}
      stroke="#1e293b" 
      strokeWidth="2" 
      strokeLinecap="round"
      fill="none"
      animate={isSpeaking ? { d: ["M75,80 Q80,85 85,80", "M75,80 Q80,75 85,80", "M75,80 Q80,85 85,80"] } : {}}
      transition={{ duration: 0.3, repeat: isSpeaking ? Infinity : 0 }}
    />
  </motion.g>
);

// --- Student Character Component ---
export const StudentCharacter: React.FC<CharacterProps> = ({ isSpeaking = false, emotion = "neutral" }) => (
  <motion.g
    initial={{ y: 0 }}
    animate={{ y: 3 }}
    transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
  >
    {/* Body */}
    <path d="M180,150 Q180,190 170,220 L270,220 Q260,190 260,150 Q260,110 220,110 Q180,110 180,150" fill={ShirtStudent} />
    
    {/* Neck */}
    <rect x="210" y="90" width="20" height="30" fill={SkinColorDark} />

    {/* Head */}
    <motion.circle 
      cx="220" cy="70" r="32" fill={SkinColorDark} 
      animate={isSpeaking ? { rotate: [-1, 1, -1] } : {}}
      transition={{ duration: 0.5, repeat: isSpeaking ? Infinity : 0 }}
    />

    {/* Hair (Messy/Curly) */}
    <path d="M185,70 Q180,20 220,20 Q260,20 255,70" fill={HairStudent} />
    <circle cx="185" cy="65" r="8" fill={HairStudent} />
    <circle cx="255" cy="65" r="8" fill={HairStudent} />
    <circle cx="220" cy="25" r="10" fill={HairStudent} />

    {/* Eyes */}
    <circle cx="212" cy="70" r="2.5" fill="#1e293b" />
    <circle cx="228" cy="70" r="2.5" fill="#1e293b" />

    {/* Mouth */}
     <motion.path 
      d={emotion === "confused" ? "M215,85 Q220,80 225,85" : "M212,85 Q220,92 228,85"}
      stroke="#1e293b" 
      strokeWidth="2" 
      strokeLinecap="round"
      fill="none"
      animate={isSpeaking ? { d: ["M215,85 Q220,90 225,85", "M215,85 Q220,80 225,85"] } : {}}
      transition={{ duration: 0.3, repeat: isSpeaking ? Infinity : 0 }}
    />
  </motion.g>
);

// --- New Props: Floating Books/Pencils ---
interface FloatingObjProps {
    x: number;
    y: number;
    color?: string;
    delay?: number;
}

export const FloatingBook: React.FC<FloatingObjProps> = ({ x, y, color = "#6d6875", delay = 0 }) => (
    <motion.g
        initial={{ y: y, rotate: -5 }}
        animate={{ y: y - 10, rotate: 5 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay }}
    >
        <rect x={x} y={y} width="30" height="40" rx="2" fill={color} />
        <rect x={x+2} y={y+2} width="26" height="36" rx="1" fill="white" opacity="0.3" />
        <line x1={x+5} y1={y+10} x2={x+25} y2={y+10} stroke="white" strokeWidth="2" opacity="0.5" />
        <line x1={x+5} y1={y+18} x2={x+25} y2={y+18} stroke="white" strokeWidth="2" opacity="0.5" />
    </motion.g>
);

export const FloatingPencil: React.FC<Omit<FloatingObjProps, 'color'>> = ({ x, y, delay = 0 }) => (
    <motion.g
        initial={{ y: y, rotate: 45 }}
        animate={{ y: y - 5, rotate: 50 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay }}
    >
        <path d={`M${x},${y} L${x+20},${y} L${x+25},${y+5} L${x+20},${y+10} L${x},${y+10} Z`} fill="#ffb703" />
        <path d={`M${x+25},${y+5} L${x+28},${y+5}`} stroke="#333" strokeWidth="2" />
    </motion.g>
);

// --- Background Decor ---
interface DecorCloudProps {
    x: number;
    y: number;
    scale?: number;
    delay?: number;
}

export const DecorCloud: React.FC<DecorCloudProps> = ({ x, y, scale = 1, delay = 0 }) => (
    <motion.path
        d="M10,30 Q30,10 50,30 T90,30 T130,30 V50 H10 Z"
        fill="#e2e8f0"
        transform={`translate(${x}, ${y}) scale(${scale})`}
        initial={{ x: x - 10, opacity: 0 }}
        animate={{ x: x, opacity: 1 }}
        transition={{ duration: 5, delay, repeat: Infinity, repeatType: "reverse" }}
    />
);

interface MathSymbolProps {
    x: number;
    y: number;
    symbol: string;
    color: string;
    delay: number;
}

export const MathSymbol: React.FC<MathSymbolProps> = ({ x, y, symbol, color, delay }) => (
    <motion.text
        x={x}
        y={y}
        fill={color}
        fontSize="28"
        fontWeight="bold"
        fontFamily="Nunito, sans-serif"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1.2, y: y - 15 }}
        transition={{ duration: 3, delay, repeat: Infinity, repeatType: "reverse" }}
    >
        {symbol}
    </motion.text>
);

// --- The BLIZZARD of Math ---
export const MathParticles: React.FC = () => {
    // Generate 50 random particles
    const particles = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // %
        y: Math.random() * 100, // %
        symbol: ['+', '-', '×', '÷', '=', 'π', '√', 'x', 'y', '∫'][Math.floor(Math.random() * 10)],
        color: ['#60a5fa', '#f472b6', '#a78bfa', '#34d399', '#fbbf24'][Math.floor(Math.random() * 5)],
        size: Math.random() * 20 + 10,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 2
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute font-bold opacity-30"
                    style={{ left: `${p.x}%`, top: `${p.y}%`, color: p.color, fontSize: `${p.size}px` }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        rotate: [0, 360],
                        opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: p.delay
                    }}
                >
                    {p.symbol}
                </motion.div>
            ))}
             {/* Add some geometric shapes too */}
             {[...Array(10)].map((_, i) => (
                <motion.div 
                    key={`shape-${i}`}
                    className="absolute border-2 border-slate-300/50 rounded-lg"
                    style={{ 
                        left: `${Math.random() * 100}%`, 
                        top: `${Math.random() * 100}%`,
                        width: Math.random() * 30 + 10,
                        height: Math.random() * 30 + 10
                    }}
                    animate={{ rotate: 360, scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
             ))}
        </div>
    )
}