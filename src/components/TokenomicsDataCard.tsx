import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

interface TokenomicsDataCardProps {
  icon: string;
  title: string;
  data?: { parameter: string; value: string | ReactNode }[];
  content: ReactNode;
  delay: number;
}

export function TokenomicsDataCard({ icon, title, data, content, delay }: TokenomicsDataCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative group cursor-pointer h-full"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Golden glowing border */}
      <motion.div
        className="absolute -inset-[2px] rounded-xl"
        style={{
          background: 'linear-gradient(135deg, #F3BA2F 0%, #FFD700 50%, #F3BA2F 100%)',
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        }}
      />

      {/* Card content */}
      <motion.div
        className="relative bg-black rounded-xl p-8 overflow-hidden h-full flex flex-col"
        animate={{
          height: isExpanded ? 'auto' : 'auto',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #F3BA2F 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Sparkles on hover */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#F3BA2F]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Icon */}
        <motion.div
          className="mb-4"
          style={{ fontSize: '2.5rem' }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {icon}
        </motion.div>

        {/* Title */}
        <h3
          className="text-[#F3BA2F] mb-4"
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            fontFamily: 'Georgia, serif',
          }}
        >
          {title}
        </h3>

        {/* Data table if provided */}
        {data && (
          <div className="mb-4 space-y-2">
            {data.map((item, i) => (
              <motion.div
                key={i}
                className="flex justify-between items-center py-2 border-b border-[#F3BA2F]/20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.1 * i }}
              >
                <span className="text-white">{item.parameter}</span>
                <motion.span
                  className="text-[#F3BA2F]"
                  animate={{
                    textShadow: [
                      '0 0 5px rgba(243, 186, 47, 0.5)',
                      '0 0 10px rgba(243, 186, 47, 0.8)',
                      '0 0 5px rgba(243, 186, 47, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{ fontWeight: 600 }}
                >
                  {item.value}
                </motion.span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Content / Quote */}
        <div className="text-white italic" style={{ lineHeight: '1.8' }}>
          {content}
        </div>

        {/* Hover indicator */}
        <motion.div
          className="absolute bottom-2 right-2 text-[#F3BA2F]/50 text-xs"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {isExpanded ? 'Click to collapse' : 'Click to expand'}
        </motion.div>

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3BA2F]/10 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Lock-in effect - corners glow when in view */}
      <motion.div
        className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#F3BA2F]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.5, duration: 0.5 }}
      />
      <motion.div
        className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#F3BA2F]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.6, duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#F3BA2F]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.7, duration: 0.5 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#F3BA2F]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.8, duration: 0.5 }}
      />
    </motion.div>
  );
}
