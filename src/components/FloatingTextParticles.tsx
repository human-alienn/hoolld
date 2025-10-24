import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function FloatingTextParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; text: string }>>([]);

  useEffect(() => {
    const codeWords = ['HOLD', 'BNB', 'BUILD', 'BELIEVE', 'PATIENT', 'FAITH', '₿', 'HODl', 'TIME', 'ALPHA'];
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      text: codeWords[Math.floor(Math.random() * codeWords.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-[#F3BA2F]/20"
          style={{
            left: `${particle.x}%`,
            bottom: '-10%',
            fontSize: `${Math.random() * 12 + 8}px`,
            fontFamily: 'monospace',
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10,
          }}
        >
          {particle.text}
        </motion.div>
      ))}
    </div>
  );
}
