import { motion } from 'motion/react';

export function HolographicCoin() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        className="absolute w-full h-full rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(243, 186, 47, 0.3) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Rotating holographic coin */}
      <motion.div
        className="relative w-48 h-48"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
      >
        {/* Coin face */}
        <div
          className="absolute inset-0 rounded-full border-4 border-[#F3BA2F] bg-gradient-to-br from-[#F3BA2F]/20 via-transparent to-[#F3BA2F]/30 backdrop-blur-sm flex items-center justify-center overflow-hidden"
          style={{
            boxShadow: '0 0 40px rgba(243, 186, 47, 0.6), inset 0 0 30px rgba(243, 186, 47, 0.2)',
          }}
        >
          {/* HOLD text in center */}
          <div className="relative">
            {/* Main HOLD text */}
            <motion.div
              className="text-[#F3BA2F]"
              style={{
                fontSize: '3rem',
                fontWeight: 900,
                textShadow: '0 0 20px rgba(243, 186, 47, 0.8)',
              }}
              animate={{
                textShadow: [
                  '0 0 20px rgba(243, 186, 47, 0.8)',
                  '0 0 30px rgba(243, 186, 47, 1)',
                  '0 0 20px rgba(243, 186, 47, 0.8)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              HOLD
            </motion.div>

            {/* Light refraction effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
              }}
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          {/* Holographic scan lines */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(243, 186, 47, 0.1) 2px, rgba(243, 186, 47, 0.1) 4px)',
            }}
            animate={{
              y: [0, 20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        {/* Edge highlights */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, transparent 50%, rgba(243, 186, 47, 0.4) 100%)',
            mixBlendMode: 'overlay',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Sparkles around coin */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#F3BA2F]"
          style={{
            top: '50%',
            left: '50%',
            filter: 'blur(1px)',
          }}
          animate={{
            x: [0, Math.cos((i * Math.PI * 2) / 8) * 120],
            y: [0, Math.sin((i * Math.PI * 2) / 8) * 120],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
