import { motion } from 'motion/react';
import { useState } from 'react';

export function VaultDoor() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-[600px] flex items-center justify-center">
      {/* Vault door */}
      <motion.div
        className="relative w-96 h-96"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => {
          setTimeout(() => setIsOpen(true), 500);
        }}
        transition={{ duration: 1 }}
      >
        {/* Door frame */}
        <div
          className="absolute inset-0 rounded-full border-8 border-[#F3BA2F]"
          style={{
            boxShadow: '0 0 60px rgba(243, 186, 47, 0.6), inset 0 0 40px rgba(243, 186, 47, 0.2)',
          }}
        />

        {/* Rotating door */}
        <motion.div
          className="absolute inset-4 rounded-full overflow-hidden"
          style={{
            background: 'radial-gradient(circle, rgba(243, 186, 47, 0.2) 0%, rgba(10, 10, 10, 0.95) 60%)',
            border: '4px solid rgba(243, 186, 47, 0.4)',
          }}
          animate={{
            rotateY: isOpen ? [0, 90] : 0,
            scale: isOpen ? [1, 0.8] : 1,
            opacity: isOpen ? [1, 0] : 1,
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          {/* Lock mechanism on door */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
              {/* Central lock circle */}
              <circle cx="50" cy="50" r="30" stroke="#F3BA2F" strokeWidth="2" fill="rgba(243, 186, 47, 0.1)" />
              
              {/* Lock spokes */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 360) / 8;
                return (
                  <motion.line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={50 + Math.cos((angle * Math.PI) / 180) * 25}
                    y2={50 + Math.sin((angle * Math.PI) / 180) * 25}
                    stroke="#F3BA2F"
                    strokeWidth="2"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{ transformOrigin: '50px 50px' }}
                  />
                );
              })}
              
              {/* Center dot */}
              <circle cx="50" cy="50" r="5" fill="#F3BA2F" />
            </svg>
          </div>
        </motion.div>

        {/* Light rays spilling out when open */}
        {isOpen && (
          <>
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 360) / 12;
              return (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 origin-left"
                  style={{
                    width: '400px',
                    height: '4px',
                    background: 'linear-gradient(to right, rgba(243, 186, 47, 0.8), transparent)',
                    transform: `rotate(${angle}deg)`,
                    filter: 'blur(2px)',
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 1, 0.6] }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.05,
                    ease: 'easeOut',
                  }}
                />
              );
            })}

            {/* Central glow */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
            >
              <div
                className="w-64 h-64 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(243, 186, 47, 0.6) 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
              />
            </motion.div>
          </>
        )}

        {/* Verified contract revealed */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={isOpen ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="text-center space-y-4">
            <motion.div
              className="text-[#F3BA2F]"
              style={{
                fontSize: '4rem',
                textShadow: '0 0 30px rgba(243, 186, 47, 0.8)',
              }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ✓
            </motion.div>
            <div className="text-[#F3BA2F] text-sm px-4">
              Verified Contract
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
