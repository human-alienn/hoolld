import { motion } from 'motion/react';

export function TeacherSilhouette() {
  return (
    <motion.div
      className="absolute bottom-0 left-1/4 w-64 h-96 opacity-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 0.2, y: 0 }}
      transition={{ duration: 2, delay: 1 }}
    >
      {/* Hooded figure silhouette */}
      <svg
        viewBox="0 0 200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Cloak/robe */}
        <path
          d="M100 50 L70 80 L50 120 L40 180 L35 250 L35 300 L165 300 L165 250 L160 180 L150 120 L130 80 L100 50Z"
          fill="url(#silhouetteGradient)"
          opacity="0.6"
        />
        
        {/* Hood */}
        <ellipse cx="100" cy="60" rx="40" ry="50" fill="url(#silhouetteGradient)" opacity="0.8" />
        
        {/* Half-lit edge (gold light from right) */}
        <path
          d="M130 80 L140 120 L145 180 L148 250 L148 300 L165 300 L165 250 L160 180 L150 120 L130 80Z"
          fill="#F3BA2F"
          opacity="0.15"
        />
        
        {/* Hood highlight */}
        <path
          d="M120 60 Q130 50 135 65 L125 75 Z"
          fill="#F3BA2F"
          opacity="0.2"
        />
        
        <defs>
          <linearGradient id="silhouetteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
