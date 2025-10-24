import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MissionSpeechCardProps {
  icon: string;
  title: string;
  content: ReactNode;
  delay: number;
}

export function MissionSpeechCard({ icon, title, content, delay }: MissionSpeechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-full"
    >
      {/* Glassmorphism panel */}
      <motion.div
        className="relative backdrop-blur-md bg-white/10 border border-[#F3BA2F]/40 rounded-2xl p-8 overflow-hidden h-full flex flex-col"
        whileHover={{
          borderColor: 'rgba(243, 186, 47, 0.8)',
          boxShadow: '0 0 40px rgba(243, 186, 47, 0.3)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Background gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at top right, rgba(243, 186, 47, 0.2), transparent)',
          }}
        />

        {/* Gold dust sparkles on hover */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#F3BA2F]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
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
              fontSize: '1.75rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            {title}
          </h3>

          {/* Content */}
          <div className="text-white/80 space-y-3" style={{ lineHeight: '1.8' }}>
            {content}
          </div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-[#F3BA2F]/10 rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Border shine effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(243, 186, 47, 0.3), transparent)',
          }}
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Shadow glow */}
      <motion.div
        className="absolute -inset-2 bg-[#F3BA2F]/20 rounded-2xl blur-xl -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.6 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
