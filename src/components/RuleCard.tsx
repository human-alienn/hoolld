import { motion } from 'motion/react';
import { useState } from 'react';

interface RuleCardProps {
  number: number;
  text: string;
  delay: number;
}

export function RuleCard({ number, text, delay }: RuleCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay,
        },
      }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        setTimeout(() => setIsVisible(true), delay * 1000);
      }}
    >
      <motion.div
        className="relative p-6 rounded-lg border backdrop-blur-md h-full"
        whileHover={{ 
          scale: 1.02,
          borderColor: '#F3BA2F',
          boxShadow: '0 0 30px rgba(243, 186, 47, 0.4)',
        }}
        transition={{ duration: 0.3 }}
        style={{
          borderColor: isVisible ? 'rgba(243, 186, 47, 0.5)' : 'rgba(243, 186, 47, 0.2)',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(243, 186, 47, 0.05) 100%)',
          boxShadow: isVisible ? '0 0 20px rgba(243, 186, 47, 0.2)' : 'none',
        }}
      >
        {/* Glow effect */}
        {isVisible && (
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none"
            animate={{
              boxShadow: [
                '0 0 20px rgba(243, 186, 47, 0.2)',
                '0 0 40px rgba(243, 186, 47, 0.4)',
                '0 0 20px rgba(243, 186, 47, 0.2)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}

        <div className="relative z-10">
          {/* Number */}
          <div className="mb-4">
            <span
              className="text-4xl"
              style={{
                fontFamily: 'Space Mono, monospace',
                fontWeight: 700,
                color: '#F3BA2F',
                textShadow: '0 0 20px rgba(243, 186, 47, 0.6)',
              }}
            >
              {number < 10 ? `0${number}` : number}
            </span>
          </div>

          {/* Text */}
          <p
            className="text-white/90 leading-relaxed whitespace-pre-line"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.95rem',
            }}
          >
            {text}
          </p>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-lg"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(243, 186, 47, 0.15), transparent 70%)',
            opacity: 0,
          }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}