import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function HoldLogo() {
  const [isAssembled, setIsAssembled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAssembled(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center mb-4 md:mb-8">
      {/* Pulsing glow behind logo */}
      <motion.div
        className="absolute w-48 h-48 md:w-96 md:h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(243, 186, 47, 0.4) 0%, transparent 70%)',
          filter: 'blur(40px) md:blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Logo Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10"
      >
        <motion.img
          src="/images/hold_logo.png"
          alt="HOLD Logo"
          className="w-40 sm:w-56 md:w-80 lg:w-96 h-auto mx-auto"
          style={{
            filter: 'drop-shadow(0 0 40px rgba(243, 186, 47, 0.6))',
          }}
          animate={
            isAssembled
              ? {
                  filter: [
                    'drop-shadow(0 0 40px rgba(243, 186, 47, 0.6))',
                    'drop-shadow(0 0 60px rgba(243, 186, 47, 0.9))',
                    'drop-shadow(0 0 40px rgba(243, 186, 47, 0.6))',
                  ],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
}
