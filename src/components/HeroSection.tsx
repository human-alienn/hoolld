import { motion } from 'motion/react';
import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { MatrixBackground } from './MatrixBackground';
import { HoldLogo } from './HoldLogo';
import { SoundwavePattern } from './SoundwavePattern';
import { TeacherSilhouette } from './TeacherSilhouette';
import { GlitchText } from './GlitchText';

export function HeroSection() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const handleEnterBurrow = () => {
    // Smooth scroll to the next section
    const nextSection = document.querySelector('#what-is-hold');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none z-50">
        <div
          className="w-full h-full"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.8) 100%)',
          }}
        />
      </div>

      {/* Matrix Background */}
      <MatrixBackground />

      {/* Teacher Siziy Silhouette */}
      <TeacherSilhouette />

      {/* Soundwave Pattern */}
      <SoundwavePattern />

      {/* Top-right navigation */}
      <motion.div
        className="absolute top-4 right-4 md:top-8 md:right-8 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <button
          onClick={handleEnterBurrow}
          className="px-3 py-1.5 md:px-4 md:py-2 border border-[#F3BA2F]/30 rounded-full text-[#F3BA2F] hover:bg-[#F3BA2F]/10 hover:border-[#F3BA2F] transition-all duration-300 text-sm md:text-base cursor-pointer"
        >
          Enter HOLD
        </button>
      </motion.div>

      {/* Audio toggle - bottom-left */}
      <motion.button
        className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-40 p-2 md:p-3 rounded-full border border-[#F3BA2F]/30 bg-black/50 hover:bg-[#F3BA2F]/10 hover:border-[#F3BA2F] transition-all duration-300"
        onClick={() => setSoundEnabled(!soundEnabled)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {soundEnabled ? (
          <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-[#F3BA2F]" />
        ) : (
          <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-[#F3BA2F]" />
        )}
      </motion.button>

      {/* Main content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 md:px-6">
        {/* HOLD Logo */}
        <HoldLogo />

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mb-3 md:mb-4"
        >
          <h1
            className="text-center text-white tracking-tight text-2xl md:text-4xl lg:text-5xl px-2"
            style={{
              fontWeight: 900,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              textShadow: '0 0 20px rgba(243, 186, 47, 0.3)',
            }}
          >
            <GlitchText>🟡 HOLD — The Strongest Narrative on BNB</GlitchText>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="text-[#F3BA2F]/80 mb-6 md:mb-8 text-center text-base md:text-lg lg:text-xl"
        >
          Ready to become a holder?
        </motion.p>

        {/* Narrative quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="max-w-2xl mx-auto mb-8 md:mb-12 px-4 md:px-6"
        >
          <blockquote className="text-center text-white/70 italic border-l-2 md:border-l-4 border-[#F3BA2F] pl-3 md:pl-6 space-y-1 md:space-y-2 text-sm md:text-base">
            <p>"Welcome to HOLD."</p>
            <p>This is not just another token launch — it's the awakening of a mindset.</p>
            <p>HOLD is the belief that time is the real alpha.</p>
            <p>If you can't hold, you won't be rich.</p>
            <p>Ready to wake up, holder?"</p>
          </blockquote>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          onClick={handleEnterBurrow}
          className="group relative px-8 md:px-12 py-3 md:py-4 rounded-full bg-black border-2 border-[#F3BA2F] overflow-hidden transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-[#F3BA2F]"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: '0 0 20px rgba(243, 186, 47, 0.5)',
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(243, 186, 47, 0.5)',
                '0 0 40px rgba(243, 186, 47, 0.8)',
                '0 0 20px rgba(243, 186, 47, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <span
            className="relative z-10 text-[#F3BA2F] group-hover:text-white transition-colors duration-300 text-base md:text-lg lg:text-xl"
            style={{ fontWeight: 700 }}
          >
            Enter the Burrow
          </span>
        </motion.button>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-[#F3BA2F]/50 text-sm md:text-base"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Scroll or Enter →
          </motion.div>
        </motion.div>
      </div>

      {/* Code flicker overlay effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        animate={{
          opacity: [0, 0.03, 0, 0.05, 0],
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatDelay: Math.random() * 5 + 3,
        }}
      >
        <div className="w-full h-full bg-[#F3BA2F] mix-blend-overlay" />
      </motion.div>
    </motion.div>
  );
}