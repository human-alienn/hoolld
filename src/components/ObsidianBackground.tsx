import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function ObsidianBackground() {
  const [binaryLines, setBinaryLines] = useState<string[]>([]);

  useEffect(() => {
    // Generate random binary code lines
    const lines = Array.from({ length: 30 }).map(() => {
      return Array.from({ length: 100 })
        .map(() => (Math.random() > 0.5 ? '1' : '0'))
        .join('');
    });
    setBinaryLines(lines);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Obsidian gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
        }}
      />

      {/* Dark texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(40, 40, 40, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(30, 30, 30, 0.6) 0%, transparent 50%)
          `,
        }}
      />

      {/* Moving binary code lines */}
      <div className="absolute inset-0 overflow-hidden">
        {binaryLines.map((line, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F3BA2F]/20 whitespace-nowrap font-mono"
            style={{
              fontSize: '10px',
              top: `${(i / binaryLines.length) * 100}%`,
              left: '-100%',
            }}
            animate={{
              x: ['0%', '200vw'],
            }}
            transition={{
              duration: 30 + Math.random() * 20,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 10,
            }}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Vertical light pillars */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 bottom-0 w-1"
          style={{
            left: `${20 + i * 15}%`,
            background: 'linear-gradient(to bottom, transparent, rgba(243, 186, 47, 0.1), transparent)',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}
