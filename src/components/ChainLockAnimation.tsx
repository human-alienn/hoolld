import { motion } from 'motion/react';

export function ChainLockAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Horizontal chains connecting the cards */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="chainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F3BA2F" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#F3BA2F" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F3BA2F" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Chain link 1-2 */}
        <motion.path
          d="M 33% 50% Q 41% 45%, 50% 50%"
          stroke="url(#chainGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />

        {/* Chain link 2-3 */}
        <motion.path
          d="M 50% 50% Q 58% 55%, 66% 50%"
          stroke="url(#chainGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 2 }}
        />

        {/* Animated particles along chain */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.circle
            key={i}
            r="3"
            fill="#F3BA2F"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M 33% 50% Q 41% 45%, 50% 50% Q 58% 55%, 66% 50%"
            />
          </motion.circle>
        ))}
      </svg>

      {/* Lock icons at connection points */}
      <motion.div
        className="absolute top-1/2 left-[41.5%] -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      >
        <div
          className="text-[#F3BA2F] text-2xl"
          style={{ textShadow: '0 0 10px rgba(243, 186, 47, 0.8)' }}
        >
          🔗
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-[58.5%] -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: 90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.3, type: 'spring', stiffness: 200 }}
      >
        <div
          className="text-[#F3BA2F] text-2xl"
          style={{ textShadow: '0 0 10px rgba(243, 186, 47, 0.8)' }}
        >
          🔗
        </div>
      </motion.div>
    </div>
  );
}
