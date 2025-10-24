import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
}

export function GlitchText({ children, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Main text */}
      <motion.div
        animate={
          isGlitching
            ? {
                x: [0, -2, 2, -1, 1, 0],
                textShadow: [
                  '0 0 0 transparent',
                  '2px 0 #F3BA2F, -2px 0 #fff',
                  '0 0 0 transparent',
                ],
              }
            : {}
        }
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.div>
      
      {/* Glitch overlay */}
      {isGlitching && (
        <>
          <div
            className="absolute inset-0 opacity-70"
            style={{
              color: '#F3BA2F',
              transform: 'translateX(-2px)',
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
            }}
          >
            {children}
          </div>
          <div
            className="absolute inset-0 opacity-70"
            style={{
              color: '#fff',
              transform: 'translateX(2px)',
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
            }}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
}
