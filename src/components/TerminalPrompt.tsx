import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface TerminalPromptProps {
  delay?: number;
  onComplete?: () => void;
}

export function TerminalPrompt({ delay = 0, onComplete }: TerminalPromptProps) {
  const [isInView, setIsInView] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const timers = [
      setTimeout(() => setCurrentStep(1), delay),
      setTimeout(() => setCurrentStep(2), delay + 1500),
      setTimeout(() => setCurrentStep(3), delay + 3000),
      setTimeout(() => {
        setCurrentStep(4);
        onComplete?.();
      }, delay + 4000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [isInView, delay, onComplete]);

  return (
    <div ref={sectionRef} className="w-full max-w-2xl mx-auto">
      <div
        className="p-6 rounded-lg border border-[#F3BA2F]/30 backdrop-blur-md"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(243, 186, 47, 0.03) 100%)',
          fontFamily: 'Space Mono, monospace',
        }}
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#F3BA2F]/20">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-[#F3BA2F]/60 text-xs ml-2">HOLD_TERMINAL_v1.0</span>
        </div>

        {/* Terminal content */}
        <div className="space-y-2 text-sm">
          {currentStep >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-white/70"
            >
              <span className="text-[#F3BA2F]">█</span>
              <span>Uploading conviction...</span>
            </motion.div>
          )}

          {currentStep >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-white/70"
            >
              <span className="text-[#F3BA2F]">█</span>
              <span>Verifying belief signature...</span>
            </motion.div>
          )}

          {currentStep >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 text-green-400 mt-4"
            >
              <span className="text-[#F3BA2F]">█</span>
              <span>HOLD Network Authentication: SUCCESS ✅</span>
            </motion.div>
          )}

          {currentStep >= 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 pt-4 border-t border-[#F3BA2F]/20"
            >
              <div className="flex items-center gap-2 text-[#F3BA2F]/60">
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ▊
                </motion.span>
                <span className="text-xs">type /enter to continue...</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Golden pulse on success */}
      {currentStep >= 3 && (
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 2,
            ease: 'easeOut',
          }}
          style={{
            background: 'radial-gradient(circle, rgba(243, 186, 47, 0.3) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      )}
    </div>
  );
}
