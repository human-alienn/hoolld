import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function RoadmapEndTransition() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Converging golden lines */}
        <div className="relative h-64 md:h-80 mb-12">
          {/* Lines from all directions converging to center */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 origin-left"
                style={{
                  transform: `rotate(${angle}deg)`,
                  width: '50%',
                  height: '2px',
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={
                  isInView
                    ? {
                        scaleX: [0, 1, 0.95],
                        opacity: [0, 1, 0.8],
                      }
                    : { scaleX: 0, opacity: 0 }
                }
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  ease: 'easeOut',
                }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: `linear-gradient(to right, rgba(243, 186, 47, 0.8), transparent)`,
                    boxShadow: '0 0 10px rgba(243, 186, 47, 0.6)',
                  }}
                />
              </motion.div>
            );
          })}

          {/* Central glow that intensifies */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView
                ? {
                    opacity: [0, 0.8, 1],
                    scale: [0, 1.5, 1],
                  }
                : { opacity: 0, scale: 0 }
            }
            transition={{
              duration: 2.5,
              delay: 1,
              ease: 'easeOut',
            }}
            style={{
              background: 'radial-gradient(circle, rgba(243, 186, 47, 0.6) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* HOLD Logo appears in the center */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={
              isInView
                ? {
                    opacity: [0, 1],
                    scale: [0, 1.2, 1],
                    rotate: [20, 0],
                  }
                : { opacity: 0, scale: 0 }
            }
            transition={{
              duration: 1.5,
              delay: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.img
              src="/images/hold_logo.png"
              alt="HOLD Logo"
              className="w-40 md:w-56 h-auto"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(243, 186, 47, 0.8))',
              }}
              animate={
                isInView
                  ? {
                      filter: [
                        'drop-shadow(0 0 30px rgba(243, 186, 47, 0.8))',
                        'drop-shadow(0 0 60px rgba(243, 186, 47, 1))',
                        'drop-shadow(0 0 30px rgba(243, 186, 47, 0.8))',
                      ],
                      scale: [1, 1.05, 1],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                delay: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>

        {/* Siziy's whisper */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <div className="relative inline-block">
            {/* Glow behind text */}
            <motion.div
              className="absolute inset-0 blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background: 'radial-gradient(circle, rgba(243, 186, 47, 0.4) 0%, transparent 70%)',
              }}
            />

            <blockquote
              className="relative text-white italic px-8 py-4"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                fontFamily: 'Cinzel, serif',
                lineHeight: '1.5',
                textShadow: '0 0 20px rgba(243, 186, 47, 0.5)',
              }}
            >
              "Together, we are unbreakable."
            </blockquote>
            <motion.p
              className="text-[#F3BA2F]/70 mt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
            >
              — Teacher Siziy
            </motion.p>
          </div>
        </motion.div>

        {/* Particles radiating from logo */}
        {isInView &&
          Array.from({ length: 20 }).map((_, i) => {
            const angle = (i * 360) / 20;
            const distance = 150 + Math.random() * 100;
            return (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-[#F3BA2F]"
                style={{
                  filter: 'blur(1px)',
                }}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: Math.cos((angle * Math.PI) / 180) * distance,
                  y: Math.sin((angle * Math.PI) / 180) * distance,
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 2.5 + i * 0.05,
                  ease: 'easeOut',
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
