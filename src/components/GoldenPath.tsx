import { motion } from 'motion/react';

export function GoldenPath() {
  return (
    <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px overflow-hidden">
      {/* Main path line */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F3BA2F] to-transparent opacity-30" />
      
      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F3BA2F] to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Flowing particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#F3BA2F]"
          style={{
            filter: 'blur(1px)',
          }}
          animate={{
            y: ['0%', '100%'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
