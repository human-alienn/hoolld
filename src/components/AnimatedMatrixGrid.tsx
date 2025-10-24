import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function AnimatedMatrixGrid() {
  const [dataStreams, setDataStreams] = useState<
    Array<{ id: number; x: number; delay: number; words: string[] }>
  >([]);

  useEffect(() => {
    const words = ['BELIEF', 'TIME', 'LOYALTY', 'HOLD', 'FAITH', 'PATIENCE', 'CONVICTION'];
    const streams = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: (i / 15) * 100,
      delay: Math.random() * 5,
      words: Array.from({ length: 10 }, () => words[Math.floor(Math.random() * words.length)]),
    }));
    setDataStreams(streams);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {/* Grid lines */}
      <div className="absolute inset-0">
        {/* Vertical lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${(i / 20) * 100}%`,
              background: 'linear-gradient(to bottom, transparent, rgba(243, 186, 47, 0.2), transparent)',
            }}
          />
        ))}
        {/* Horizontal lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${(i / 20) * 100}%`,
              background: 'linear-gradient(to right, transparent, rgba(243, 186, 47, 0.2), transparent)',
            }}
          />
        ))}
      </div>

      {/* Data flow streams */}
      {dataStreams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute"
          style={{
            left: `${stream.x}%`,
            top: 0,
            width: '2px',
          }}
          initial={{ y: '-100%' }}
          animate={{ y: '200%' }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: stream.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div
            className="h-screen"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(34, 197, 94, 0.4), rgba(243, 186, 47, 0.6), transparent)',
            }}
          />
        </motion.div>
      ))}

      {/* Scrolling binary/text */}
      {dataStreams.slice(0, 8).map((stream) => (
        <motion.div
          key={`text-${stream.id}`}
          className="absolute"
          style={{
            left: `${stream.x}%`,
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.7rem',
            color: 'rgba(243, 186, 47, 0.3)',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            letterSpacing: '0.3em',
          }}
          initial={{ y: '-100%' }}
          animate={{ y: '200%' }}
          transition={{
            duration: 20,
            delay: stream.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {stream.words.join(' ')}
        </motion.div>
      ))}

      {/* Diagonal light streaks */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`streak-${i}`}
          className="absolute w-1 h-96 rotate-45"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(243, 186, 47, 0.3), transparent)',
            filter: 'blur(2px)',
          }}
          initial={{
            x: '-10%',
            y: `${i * 25}%`,
          }}
          animate={{
            x: '110%',
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
