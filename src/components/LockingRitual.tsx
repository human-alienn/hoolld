import { motion } from 'motion/react';

export function LockingRitual() {
  return (
    <div className="relative w-full max-w-2xl mx-auto h-96 flex items-center justify-center">
      {/* Three panels merging into one */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Panel 1 */}
        <motion.div
          className="absolute w-32 h-32 border-2 border-[#F3BA2F] rounded-lg bg-[#F3BA2F]/10"
          initial={{ x: -150, y: 0, scale: 1 }}
          whileInView={{ x: 0, y: 0, scale: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Panel 2 */}
        <motion.div
          className="absolute w-32 h-32 border-2 border-[#F3BA2F] rounded-lg bg-[#F3BA2F]/10"
          initial={{ x: 0, y: 0, scale: 1 }}
          whileInView={{ x: 0, y: 0, scale: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.7 }}
        />

        {/* Panel 3 */}
        <motion.div
          className="absolute w-32 h-32 border-2 border-[#F3BA2F] rounded-lg bg-[#F3BA2F]/10"
          initial={{ x: 150, y: 0, scale: 1 }}
          whileInView={{ x: 0, y: 0, scale: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.9 }}
        />

        {/* Merging into golden circle */}
        <motion.div
          className="absolute w-64 h-64 rounded-full border-4 border-[#F3BA2F]"
          style={{
            boxShadow: '0 0 60px rgba(243, 186, 47, 0.6), inset 0 0 40px rgba(243, 186, 47, 0.2)',
            background: 'radial-gradient(circle, rgba(243, 186, 47, 0.1) 0%, transparent 70%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 2 }}
        >
          {/* Rotating vault emblem */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg width="150" height="150" viewBox="0 0 100 100" fill="none">
              {/* Outer ring segments */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 360) / 8;
                const startX = 50 + Math.cos((angle * Math.PI) / 180) * 40;
                const startY = 50 + Math.sin((angle * Math.PI) / 180) * 40;
                const endX = 50 + Math.cos(((angle + 30) * Math.PI) / 180) * 40;
                const endY = 50 + Math.sin(((angle + 30) * Math.PI) / 180) * 40;
                
                return (
                  <path
                    key={i}
                    d={`M ${startX} ${startY} A 40 40 0 0 1 ${endX} ${endY}`}
                    stroke="#F3BA2F"
                    strokeWidth="3"
                    fill="none"
                  />
                );
              })}

              {/* Inner circle */}
              <circle cx="50" cy="50" r="25" stroke="#F3BA2F" strokeWidth="2" fill="rgba(243, 186, 47, 0.1)" />

              {/* Lock symbol */}
              <motion.g
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3, type: 'spring' }}
              >
                {/* Lock body */}
                <rect x="42" y="50" width="16" height="12" rx="2" fill="#F3BA2F" />
                {/* Lock shackle */}
                <path d="M 45 50 L 45 43 Q 45 38 50 38 Q 55 38 55 43 L 55 50" stroke="#F3BA2F" strokeWidth="2" fill="none" />
              </motion.g>
            </svg>
          </motion.div>

          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'radial-gradient(circle, rgba(243, 186, 47, 0.4), transparent)',
              filter: 'blur(20px)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Final inscription */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <p
          className="text-[#F3BA2F] italic"
          style={{
            fontSize: '1.5rem',
            textShadow: '0 0 20px rgba(243, 186, 47, 0.5)',
          }}
        >
          "Liquidity locked. Trust unlocked."
        </p>
      </motion.div>

      {/* Lock seal animation - the lock closes */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 2, opacity: 0 }}
        whileInView={{ scale: 1, opacity: [0, 1, 1, 0] }}
        viewport={{ once: true }}
        transition={{ delay: 4, duration: 2 }}
      >
        <div className="text-8xl">🔒</div>
      </motion.div>
    </div>
  );
}
