import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const codeRules = [
  {
    number: "01",
    text: "I'm not just a holder — I'm part of the team.\nI support the project, help the community, and never stand aside.",
  },
  {
    number: "02",
    text: "When fear rises, I stay calm.\nI buy when others panic — patience is my shield.",
  },
  {
    number: "03",
    text: "I build with conviction.\nI don't chase hype or jump from coin to coin.",
  },
  {
    number: "04",
    text: "I join raids and spread the HOLD culture.\nMemes are our weapons — unity is our strength.",
  },
  {
    number: "05",
    text: "I hold time, not charts.\nMinutes belong to traders. Years belong to holders.",
  },
  {
    number: "06",
    text: "I protect my conviction.\nNoise fades — code remains.",
  },
  {
    number: "07",
    text: "I stay humble.\nI don't flex profits — I understand the journey is long.",
  },
  {
    number: "08",
    text: "I lead by example.\nEvery true holder inspires the next one.",
  },
  {
    number: "09",
    text: "I hold the code.\nHOLD is not a token — it's a mindset.",
  },
  {
    number: "10",
    text: "We rise together — never alone.\nFrom conviction comes community. From HOLD comes GOLD.",
  },
];

export function ThePath() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      id="path"
      className="relative min-h-screen overflow-hidden py-20"
      style={{
        background: '#000000',
      }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #F3BA2F, #FFD966)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 60px rgba(243, 186, 47, 0.5)',
            }}
          >
            THE CODE OF THE TRUE HOLDER
          </motion.h2>
        </motion.div>

        {/* HOLD Logo */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="relative w-32 h-32 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(243, 186, 47, 0.3), transparent 70%)',
              border: '2px solid #F3BA2F',
              boxShadow: '0 0 60px rgba(243, 186, 47, 0.6), inset 0 0 40px rgba(243, 186, 47, 0.2)',
            }}
            animate={{
              boxShadow: [
                '0 0 60px rgba(243, 186, 47, 0.6), inset 0 0 40px rgba(243, 186, 47, 0.2)',
                '0 0 80px rgba(243, 186, 47, 0.8), inset 0 0 50px rgba(243, 186, 47, 0.3)',
                '0 0 60px rgba(243, 186, 47, 0.6), inset 0 0 40px rgba(243, 186, 47, 0.2)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div
              className="text-4xl"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                color: '#F3BA2F',
                textShadow: '0 0 20px rgba(243, 186, 47, 0.8)',
              }}
            >
              HOLD
            </div>
          </motion.div>
        </motion.div>

        {/* Code Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {codeRules.map((rule, index) => (
            <motion.div
              key={rule.number}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.div
                className="relative p-6 rounded-xl border-2 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(243, 186, 47, 0.05), rgba(0, 0, 0, 0.8))',
                  borderColor: 'rgba(243, 186, 47, 0.3)',
                }}
                whileHover={{
                  borderColor: '#F3BA2F',
                  boxShadow: '0 0 30px rgba(243, 186, 47, 0.4)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Number */}
                <div className="mb-4">
                  <span
                    className="text-4xl"
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontWeight: 700,
                      color: '#F3BA2F',
                      textShadow: '0 0 20px rgba(243, 186, 47, 0.6)',
                    }}
                  >
                    {rule.number}
                  </span>
                </div>

                {/* Rule Text */}
                <div
                  className="text-white/90 leading-relaxed whitespace-pre-line"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.95rem',
                  }}
                >
                  {rule.text}
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-xl"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(243, 186, 47, 0.15), transparent 70%)',
                    opacity: 0,
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#F3BA2F]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
}