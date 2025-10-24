import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function GoldenLightPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const pathIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.5]);
  const pathWidth = useTransform(scrollYProgress, [0, 0.5, 1], [2, 8, 4]);

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Main central light beam */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 h-[200%]"
        style={{
          width: pathWidth,
          opacity: pathIntensity,
        }}
      >
        {/* Core beam */}
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, #F3BA2F 50%, transparent 100%)',
            filter: 'blur(2px)',
            boxShadow: '0 0 40px rgba(243, 186, 47, 0.8), 0 0 80px rgba(243, 186, 47, 0.4)',
          }}
        />
      </motion.div>

      {/* Outer glow layers */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-32 h-[200%]"
        style={{
          opacity: pathIntensity,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(243, 186, 47, 0.4) 50%, transparent 100%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Pulsing heartbeat effect */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-64 h-64"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(243, 186, 47, 0.4) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Energy particles flowing along the path */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#F3BA2F]"
          style={{
            filter: 'blur(1px)',
            boxShadow: '0 0 10px rgba(243, 186, 47, 0.8)',
          }}
          animate={{
            y: ['-50%', '150%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Side accent beams */}
      {[-20, 20].map((offset, idx) => (
        <motion.div
          key={idx}
          className="absolute h-[200%] w-px"
          style={{
            left: `calc(50% + ${offset}px)`,
            background: 'linear-gradient(to bottom, transparent 0%, rgba(243, 186, 47, 0.3) 50%, transparent 100%)',
            filter: 'blur(1px)',
            opacity: pathIntensity,
          }}
        />
      ))}

      {/* Distant parallel paths (depth effect) */}
      {[-60, -40, 40, 60].map((offset, idx) => (
        <motion.div
          key={`depth-${idx}`}
          className="absolute h-[200%] w-px opacity-20"
          style={{
            left: `calc(50% + ${offset}px)`,
            background: 'linear-gradient(to bottom, transparent 0%, rgba(243, 186, 47, 0.2) 50%, transparent 100%)',
            filter: 'blur(2px)',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + idx * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
