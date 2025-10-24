import { motion } from 'motion/react';

export function SoundwavePattern() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
      <div className="flex gap-1 items-center">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-1 bg-[#F3BA2F]"
            style={{
              height: 20 + Math.random() * 60,
            }}
            animate={{
              height: [
                20 + Math.random() * 60,
                40 + Math.random() * 80,
                20 + Math.random() * 60,
              ],
            }}
            transition={{
              duration: 1 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.05,
            }}
          />
        ))}
      </div>
    </div>
  );
}
