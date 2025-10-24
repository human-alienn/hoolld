import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface RoadmapMilestoneCardProps {
  quarter: string;
  title: string;
  description: string[];
  siziyQuote: string;
  index: number;
  icon: string;
}

export function RoadmapMilestoneCard({
  quarter,
  title,
  description,
  siziyQuote,
  index,
  icon,
}: RoadmapMilestoneCardProps) {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div ref={cardRef} className="relative flex items-center justify-center py-12 md:py-20">
      {/* Timeline node */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#F3BA2F] to-[#D4A027] flex items-center justify-center shadow-lg relative"
          animate={
            isInView
              ? {
                  boxShadow: [
                    '0 0 20px rgba(243, 186, 47, 0.6)',
                    '0 0 40px rgba(243, 186, 47, 0.9)',
                    '0 0 20px rgba(243, 186, 47, 0.6)',
                  ],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <span className="text-lg md:text-xl">{icon}</span>
          
          {/* Outer ring pulse */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#F3BA2F]"
            animate={
              isInView
                ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.8, 0, 0.8],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Content card */}
      <motion.div
        className={`w-full md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div
          className="relative p-6 md:p-8 rounded-2xl border border-[#F3BA2F]/20 backdrop-blur-md overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(243, 186, 47, 0.05) 0%, rgba(0, 0, 0, 0.3) 100%)',
          }}
        >
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
          
          {/* Glow on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at center, rgba(243, 186, 47, 0.1) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10">
            {/* Quarter */}
            <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#F3BA2F]/10 border border-[#F3BA2F]/30">
              <span className="text-[#F3BA2F]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                {quarter}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-white mb-4"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                fontFamily: 'Cinzel, serif',
                letterSpacing: '0.05em',
              }}
            >
              {title}
            </h3>

            {/* Description */}
            <ul className="space-y-2 mb-6">
              {description.map((item, i) => (
                <motion.li
                  key={i}
                  className="text-white/70 flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                >
                  <span className="text-[#F3BA2F] mt-1">✦</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Siziy quote */}
            <motion.div
              className="pt-4 border-t border-[#F3BA2F]/20"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-[#F3BA2F]/80 italic text-sm leading-relaxed">
                "{siziyQuote}"
              </p>
              <p className="text-[#F3BA2F]/60 text-xs mt-2">— Teacher Siziy</p>
            </motion.div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#F3BA2F]/10 to-transparent blur-2xl" />
        </div>
      </motion.div>
    </div>
  );
}
