import { motion } from 'motion/react';
import { MatrixBackground } from './MatrixBackground';
import { FloatingTextParticles } from './FloatingTextParticles';
import { HoldLogo } from './HoldLogo';

interface EntryScreenProps {
  onAccept: () => void;
}

export function EntryScreen({ onAccept }: EntryScreenProps) {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Matrix background with falling particles */}
      <MatrixBackground />
      <FloatingTextParticles />
      
      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/40 to-black pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* HOLD Logo with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8"
        >
          <HoldLogo />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4"
        >
          <h2 
            className="text-2xl md:text-4xl text-white tracking-wide"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            HOLD — The Strongest Narrative on BNB
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <p 
            className="text-lg md:text-xl text-[#F3BA2F]/80 tracking-wide"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Patience is the code. Time is the alpha.
          </p>
        </motion.div>

        {/* Accept HOLD Button - Pulsing and scaling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.button
            onClick={onAccept}
            className="relative px-12 py-5 bg-transparent border-2 border-[#F3BA2F] text-[#F3BA2F] overflow-hidden group"
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontSize: '20px',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
            animate={{
              scale: [1, 1.08, 1],
              boxShadow: [
                '0 0 20px rgba(243, 186, 47, 0.4)',
                '0 0 40px rgba(243, 186, 47, 0.8)',
                '0 0 20px rgba(243, 186, 47, 0.4)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            whileHover={{ 
              scale: 1.12,
              backgroundColor: 'rgba(243, 186, 47, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated glow background */}
            <motion.div
              className="absolute inset-0 bg-[#F3BA2F]/10"
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            {/* Button text with blink effect */}
            <motion.span
              className="relative z-10"
              animate={{
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              Accept HOLD
            </motion.span>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#F3BA2F]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#F3BA2F]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#F3BA2F]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#F3BA2F]" />
          </motion.button>
        </motion.div>

        {/* Subtitle text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12"
        >
          <p 
            className="text-sm text-gray-500 italic tracking-wide max-w-xl"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            "Welcome to HOLD."
          </p>
          <p 
            className="text-sm text-gray-600 italic tracking-wide max-w-xl mt-2"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            This is not just another token launch — it's the awakening of a mindset.
          </p>
          <p 
            className="text-sm text-gray-600 italic tracking-wide max-w-xl mt-1"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            HOLD is the belief that time is the real alpha.
          </p>
        </motion.div>
      </div>
    </div>
  );
}