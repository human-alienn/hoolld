import { motion } from 'motion/react';

export function OrbitingDataGlyphs() {
  const glyphs = ['₿', 'BNB', 'HOLD', '◈', '⬡', '▲', '●', '◇'];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {glyphs.map((glyph, i) => {
        const angle = (i * 360) / glyphs.length;
        const radius = 150;

        return (
          <motion.div
            key={i}
            className="absolute text-[#F3BA2F]"
            style={{
              fontSize: `${Math.random() * 12 + 16}px`,
              fontWeight: 700,
            }}
            animate={{
              x: [
                Math.cos((angle * Math.PI) / 180) * radius,
                Math.cos(((angle + 360) * Math.PI) / 180) * radius,
              ],
              y: [
                Math.sin((angle * Math.PI) / 180) * radius,
                Math.sin(((angle + 360) * Math.PI) / 180) * radius,
              ],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
          >
            {glyph}
          </motion.div>
        );
      })}
    </div>
  );
}
