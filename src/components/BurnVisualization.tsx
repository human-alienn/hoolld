import { motion } from 'motion/react';
import { useState } from 'react';

export function BurnVisualization() {
  const [showLock, setShowLock] = useState(false);

  // Create fire particles in a ring
  const fireParticles = Array.from({ length: 40 });

  return (
    <div className="relative w-full max-w-2xl mx-auto h-96 flex items-center justify-center">
      {/* HOLD coin at center */}
      <div className="relative z-20">
        <motion.div
          className="w-48 h-48 rounded-full border-4 border-[#F3BA2F] bg-gradient-to-br from-[#F3BA2F]/30 via-black to-[#F3BA2F]/20 flex items-center justify-center"
          style={{
            boxShadow: '0 0 40px rgba(243, 186, 47, 0.6), inset 0 0 30px rgba(243, 186, 47, 0.2)',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <span
            className="text-[#F3BA2F]"
            style={{
              fontSize: '2.5rem',
              fontWeight: 900,
              textShadow: '0 0 20px rgba(243, 186, 47, 0.8)',
            }}
          >
            HOLD
          </span>
        </motion.div>
      </div>

      {/* Ring of fire */}
      {!showLock && (
        <div className="absolute inset-0 flex items-center justify-center">
          {fireParticles.map((_, i) => {
            const angle = (i * 360) / fireParticles.length;
            const radius = 140;

            return (
              <motion.div
                key={i}
                className="absolute w-3 h-8 rounded-full"
                style={{
                  background: 'linear-gradient(to top, #FF4500 0%, #FFA500 50%, #FFD700 100%)',
                  filter: 'blur(2px)',
                  transformOrigin: 'center',
                }}
                animate={{
                  x: Math.cos((angle * Math.PI) / 180) * radius,
                  y: Math.sin((angle * Math.PI) / 180) * radius,
                  scaleY: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1 + Math.random() * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.02,
                }}
              />
            );
          })}

          {/* Inner glow from fire */}
          <motion.div
            className="absolute w-80 h-80 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 69, 0, 0.3) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Embers floating up */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`ember-${i}`}
              className="absolute w-1 h-1 rounded-full bg-orange-500"
              style={{
                left: `${45 + Math.random() * 10}%`,
                bottom: '30%',
                filter: 'blur(1px)',
              }}
              animate={{
                y: [-50, -200],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [1, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Golden lock animation (appears when fire fades) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={showLock ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lock body */}
          <motion.rect
            x="30"
            y="50"
            width="40"
            height="35"
            rx="4"
            stroke="#F3BA2F"
            strokeWidth="3"
            fill="rgba(243, 186, 47, 0.2)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Lock shackle */}
          <motion.path
            d="M 40 50 L 40 35 Q 40 25 50 25 Q 60 25 60 35 L 60 50"
            stroke="#F3BA2F"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Keyhole */}
          <motion.circle
            cx="50"
            cy="65"
            r="4"
            fill="#F3BA2F"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          />
          <motion.rect
            x="48"
            y="67"
            width="4"
            height="8"
            fill="#F3BA2F"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, delay: 1.4 }}
          />
        </svg>

        {/* Glow around lock */}
        <motion.div
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(243, 186, 47, 0.4) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Trigger lock animation after delay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => {
          setTimeout(() => setShowLock(true), 3000);
        }}
      />
    </div>
  );
}
