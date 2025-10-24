import { motion } from 'motion/react';

export function MarbleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base black marble texture */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(30, 30, 30, 0.8) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(20, 20, 20, 0.9) 0%, transparent 50%),
            #000000
          `,
        }}
      />

      {/* Molten gold veins */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldVein1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F3BA2F" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F3BA2F" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Organic gold veins */}
        <motion.path
          d="M 0 300 Q 200 250, 400 300 T 800 300 L 800 305 Q 600 320, 400 305 T 0 305 Z"
          fill="url(#goldVein1)"
          filter="url(#glow)"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M 1920 600 Q 1600 550, 1200 600 T 400 600 L 400 605 Q 800 620, 1200 605 T 1920 605 Z"
          fill="url(#goldVein1)"
          filter="url(#glow)"
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.path
          d="M 600 0 Q 650 200, 600 400 T 600 800 L 595 800 Q 580 600, 595 400 T 595 0 Z"
          fill="url(#goldVein1)"
          filter="url(#glow)"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </svg>

      {/* Subtle marble noise texture */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
