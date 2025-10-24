import { motion } from 'motion/react';

export function GoldenPillars() {
  const pillars = [
    { x: '15%', delay: 0, symbols: ['🔒', '✓', '🛡️'] },
    { x: '50%', delay: 0.3, symbols: ['⚡', '◈', '✓'] },
    { x: '85%', delay: 0.6, symbols: ['🔐', '✓', '◇'] },
  ];

  return (
    <>
      {pillars.map((pillar, index) => (
        <motion.div
          key={index}
          className="absolute top-0 bottom-0"
          style={{ left: pillar.x }}
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: pillar.delay, ease: 'easeOut' }}
        >
          {/* Main pillar shaft */}
          <div
            className="relative w-16 h-full mx-auto"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(243, 186, 47, 0.15) 20%, rgba(243, 186, 47, 0.15) 80%, transparent 100%)',
              boxShadow: '0 0 40px rgba(243, 186, 47, 0.3)',
            }}
          >
            {/* Edge highlights */}
            <div
              className="absolute inset-y-0 left-0 w-1"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(243, 186, 47, 0.6), transparent)',
              }}
            />
            <div
              className="absolute inset-y-0 right-0 w-1"
              style={{
                background: 'linear-gradient(to bottom, transparent, rgba(243, 186, 47, 0.6), transparent)',
              }}
            />

            {/* Carved symbols */}
            {pillar.symbols.map((symbol, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 -translate-x-1/2 text-[#F3BA2F]"
                style={{
                  top: `${25 + i * 25}%`,
                  fontSize: '2rem',
                  textShadow: '0 0 20px rgba(243, 186, 47, 0.8)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: pillar.delay + 1 + i * 0.2, duration: 0.5 }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
              >
                {symbol}
              </motion.div>
            ))}

            {/* Pulsing light effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(243, 186, 47, 0.1), transparent)',
              }}
              animate={{
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: pillar.delay,
              }}
            />
          </div>
        </motion.div>
      ))}
    </>
  );
}
