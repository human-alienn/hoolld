import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { Check } from 'lucide-react';

interface AuditCardProps {
  icon: ReactNode;
  title: string;
  address?: string;
  result: string;
  quote: ReactNode;
  delay: number;
}

export function AuditCard({ icon, title, address, result, quote, delay }: AuditCardProps) {
  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, y: 80, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1000 }}
    >
      {/* Certificate-style frame */}
      <div
        className="relative bg-gradient-to-br from-[#1A1A1A] to-black border-2 border-[#F3BA2F] rounded-lg p-8 overflow-hidden h-full flex flex-col"
        style={{
          boxShadow: '0 10px 40px rgba(243, 186, 47, 0.3)',
        }}
      >
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" fill="#F3BA2F" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-16 h-16 rotate-90">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" fill="#F3BA2F" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16 -rotate-90">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" fill="#F3BA2F" opacity="0.3" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 rotate-180">
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M0 0 L100 0 L100 20 L20 20 L20 100 L0 100 Z" fill="#F3BA2F" opacity="0.3" />
          </svg>
        </div>

        {/* Icon at top */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, type: 'spring', stiffness: 200 }}
        >
          <div className="relative">
            {icon}
            {/* Pulsing glow */}
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: 'radial-gradient(circle, rgba(243, 186, 47, 0.5), transparent)',
                filter: 'blur(20px)',
              }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <h3
          className="text-[#F3BA2F] text-center mb-4"
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            fontFamily: 'Georgia, serif',
          }}
        >
          {title}
        </h3>

        {/* Checkmark with animation */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.5 }}
        >
          <motion.div
            className="w-6 h-6 rounded-full bg-[#F3BA2F] flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.7, type: 'spring', stiffness: 300 }}
          >
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </motion.div>
          <span className="text-[#EAEAEA]">{result}</span>
        </motion.div>

        {/* Address if provided */}
        {address && (
          <motion.div
            className="text-center mb-4 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.6 }}
          >
            <p className="text-xs text-[#F3BA2F]/60 mb-1">Address:</p>
            <p className="text-xs text-white font-mono break-all">{address}</p>
          </motion.div>
        )}

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-[#F3BA2F] to-transparent my-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.8, duration: 0.4 }}
        />

        {/* Quote */}
        <div className="text-[#EAEAEA]/80 italic text-center" style={{ lineHeight: '1.8' }}>
          {quote}
        </div>

        {/* Hover pulse effect */}
        <motion.div
          className="absolute inset-0 border-2 border-[#F3BA2F] rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F3BA2F]/10 to-transparent"
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
      </div>

      {/* Glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          background: 'radial-gradient(circle, rgba(243, 186, 47, 0.3), transparent)',
          filter: 'blur(30px)',
        }}
      />
    </motion.div>
  );
}