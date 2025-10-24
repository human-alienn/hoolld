import { motion } from 'motion/react';
import { useState } from 'react';

const arcs = [
  {
    id: 'faith',
    emoji: '✦',
    title: 'Faith',
    description: 'The discipline of belief through cycles.',
    color: 'rgba(243, 186, 47, 0.8)',
  },
  {
    id: 'growth',
    emoji: '✦',
    title: 'Growth',
    description: 'The power of building through time.',
    color: 'rgba(34, 197, 94, 0.8)',
  },
  {
    id: 'community',
    emoji: '✦',
    title: 'Community',
    description: 'The unity that turns holders into builders.',
    color: 'rgba(139, 92, 246, 0.8)',
  },
];

export function ThreeArcsVisualization() {
  const [hoveredArc, setHoveredArc] = useState<string | null>(null);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Central convergence point (bottom) */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F3BA2F]"
        style={{
          boxShadow: '0 0 40px rgba(243, 186, 47, 0.8)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Three arcs */}
      {arcs.map((arc, index) => {
        const angle = -60 + index * 60; // -60, 0, 60 degrees
        const isHovered = hoveredArc === arc.id;

        return (
          <div
            key={arc.id}
            className="absolute bottom-20 left-1/2"
            style={{
              transformOrigin: 'bottom center',
              transform: `translateX(-50%) rotate(${angle}deg)`,
            }}
          >
            {/* Arc path */}
            <motion.div
              className="relative"
              style={{
                width: '2px',
                height: '400px',
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: index * 0.3,
                ease: 'easeOut',
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(to top, ${arc.color}, transparent)`,
                  filter: 'blur(1px)',
                  boxShadow: `0 0 20px ${arc.color}`,
                  opacity: isHovered ? 1 : 0.6,
                  transition: 'opacity 0.3s ease',
                }}
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 w-8 -left-3"
                style={{
                  background: `linear-gradient(to top, ${arc.color.replace('0.8', '0.3')}, transparent)`,
                  filter: 'blur(20px)',
                  opacity: isHovered ? 1 : 0.4,
                  transition: 'opacity 0.3s ease',
                }}
              />

              {/* Flowing particles along arc */}
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                  style={{
                    background: arc.color,
                    boxShadow: `0 0 10px ${arc.color}`,
                  }}
                  animate={{
                    y: ['100%', '-100%'],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}
            </motion.div>

            {/* Arc endpoint card */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer"
              style={{
                transform: `translateX(-50%) rotate(${-angle}deg)`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.3 + 1,
              }}
              onMouseEnter={() => setHoveredArc(arc.id)}
              onMouseLeave={() => setHoveredArc(null)}
              whileHover={{ scale: 1.1 }}
            >
              <div
                className="p-6 rounded-2xl backdrop-blur-md border min-w-[240px]"
                style={{
                  background: isHovered
                    ? `linear-gradient(135deg, ${arc.color.replace('0.8', '0.2')} 0%, rgba(0, 0, 0, 0.9) 100%)`
                    : 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)',
                  borderColor: isHovered ? arc.color : 'rgba(243, 186, 47, 0.2)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Emoji icon */}
                <motion.div
                  className="text-4xl mb-3 text-center"
                  animate={
                    isHovered
                      ? {
                          scale: [1, 1.2, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                  }}
                >
                  {arc.emoji}
                </motion.div>

                {/* Title */}
                <h3
                  className="text-white text-center mb-2"
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                  }}
                >
                  {arc.title}
                </h3>

                {/* Description */}
                <p
                  className="text-white/70 text-center text-sm"
                  style={{
                    fontFamily: 'system-ui, sans-serif',
                    fontWeight: 300,
                  }}
                >
                  {arc.description}
                </p>

                {/* Pulse effect on hover */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: [0, 0.3, 0], scale: 1.1 }}
                    transition={{ duration: 1 }}
                    style={{
                      border: `2px solid ${arc.color}`,
                    }}
                  />
                )}
              </div>
            </motion.div>
          </div>
        );
      })}

      {/* Merging point at top */}
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-6 h-6 rounded-full bg-[#F3BA2F]"
          style={{
            boxShadow: '0 0 60px rgba(243, 186, 47, 1)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Instructional text */}
      <motion.div
        className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p
          className="text-white/60 text-sm"
          style={{
            fontFamily: 'Space Mono, monospace',
          }}
        >
          The Path divides. Choose your conviction.
        </p>
      </motion.div>
    </div>
  );
}
