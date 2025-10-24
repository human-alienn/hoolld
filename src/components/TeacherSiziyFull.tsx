import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function TeacherSiziyFull() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  // Symbols that make up the figure
  const symbols = ['H', 'O', 'L', 'D', 'B', 'N', '₿', '◈', '◇', '▲', '●'];
  const bodySymbols = Array.from({ length: 40 }).map(() => ({
    symbol: symbols[Math.floor(Math.random() * symbols.length)],
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        style={{
          rotateY,
          scale,
          opacity,
          perspective: 1000,
        }}
        className="relative w-96 h-[600px]"
      >
        {/* Cloaked figure silhouette */}
        <svg
          viewBox="0 0 300 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full absolute inset-0"
        >
          {/* Main robe shape */}
          <path
            d="M150 80 L120 120 L100 180 L90 260 L85 400 L80 550 L80 600 L220 600 L220 550 L215 400 L210 260 L200 180 L180 120 L150 80Z"
            fill="url(#robeGradient)"
            opacity="0.3"
          />
          
          {/* Hood */}
          <ellipse cx="150" cy="100" rx="60" ry="80" fill="url(#hoodGradient)" opacity="0.4" />
          
          {/* Face reveal - half lit */}
          <motion.path
            d="M150 120 Q170 110 175 130 Q175 145 170 155 Q160 170 150 170 Q150 150 150 120Z"
            fill="#F3BA2F"
            opacity="0.6"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Golden light edge */}
          <motion.path
            d="M180 120 L190 180 L200 260 L205 400 L210 550 L210 600 L220 600 L220 550 L215 400 L210 260 L200 180 L180 120Z"
            fill="#F3BA2F"
            opacity="0.3"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <defs>
            <linearGradient id="robeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="50%" stopColor="#1a1a1a" />
              <stop offset="100%" stopColor="#F3BA2F" stopOpacity="0.2" />
            </linearGradient>
            <radialGradient id="hoodGradient" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#F3BA2F" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
            </radialGradient>
          </defs>
        </svg>

        {/* Crypto symbols forming the outline */}
        {bodySymbols.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-[#F3BA2F]"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              fontSize: `${Math.random() * 12 + 8}px`,
              fontWeight: 700,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut',
            }}
          >
            {item.symbol}
          </motion.div>
        ))}

        {/* BNB logo fragments */}
        <motion.div
          className="absolute top-1/4 right-1/4"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg width="40" height="40" viewBox="0 0 126.61 126.61" fill="#F3BA2F" opacity="0.6">
            <polygon points="38.73 53.2 63.31 28.61 87.88 53.2 101.98 39.1 63.31 0.44 24.63 39.1 38.73 53.2" />
            <polygon points="0 63.31 14.09 49.21 28.19 63.31 14.09 77.4 0 63.31" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
