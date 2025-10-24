import { motion } from 'motion/react';

export function LightBeam() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-full pointer-events-none">
      {/* Main light beam */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-full"
        style={{
          background: 'linear-gradient(to bottom, rgba(243, 186, 47, 0.4) 0%, rgba(243, 186, 47, 0.1) 30%, transparent 60%)',
          filter: 'blur(20px)',
        }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scaleX: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bright core */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-full"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 0%, rgba(243, 186, 47, 0.2) 20%, transparent 50%)',
          filter: 'blur(10px)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Particles floating in beam */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#F3BA2F]"
          style={{
            left: `${45 + Math.random() * 10}%`,
            top: '0%',
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: [0, 1000],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
