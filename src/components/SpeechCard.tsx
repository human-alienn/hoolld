import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SpeechCardProps {
  title: string;
  content: ReactNode;
  delay: number;
}

export function SpeechCard({ title, content, delay }: SpeechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: 'easeOut',
      }}
      className="relative group"
    >
      {/* Card container */}
      <div className="relative bg-black/60 backdrop-blur-sm border-2 border-[#F3BA2F]/40 rounded-lg p-8 overflow-hidden">
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'linear-gradient(45deg, transparent, rgba(243, 186, 47, 0.2), transparent)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: delay,
          }}
        />

        {/* Light sweep effect on entrance */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3BA2F]/30 to-transparent"
          initial={{ x: '-100%' }}
          whileInView={{ x: '200%' }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: delay + 0.3,
            ease: 'easeInOut',
          }}
        />

        {/* Gentle gold sparks */}
        <motion.div
          className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#F3BA2F]"
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: delay + 1,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-[#F3BA2F] mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            {title}
          </h3>
          <div className="text-white/80 space-y-3" style={{ lineHeight: '1.8' }}>
            {content}
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-20">
          <svg viewBox="0 0 100 100" fill="none">
            <path
              d="M100 100 L100 80 Q100 70 90 70 L70 70 Q60 70 60 60 L60 40 Q60 30 50 30 L30 30 Q20 30 20 20 L20 0 L0 0 L0 20 Q0 40 20 40 L40 40 Q50 40 50 50 L50 70 Q50 80 60 80 L80 80 Q100 80 100 100Z"
              fill="#F3BA2F"
            />
          </svg>
        </div>
      </div>

      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-[#F3BA2F] pointer-events-none"
        animate={{
          opacity: [0, 0.5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 2,
        }}
      />
    </motion.div>
  );
}
