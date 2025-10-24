import { motion } from 'motion/react';
import { AnimatedMatrixGrid } from './AnimatedMatrixGrid';
import { RuleCard } from './RuleCard';
import { TerminalPrompt } from './TerminalPrompt';
import { useState, useRef } from 'react';

const rules = [
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

export function TheRules() {
  const [showNarrative, setShowNarrative] = useState(false);
  const narrativeRef = useRef<HTMLDivElement>(null);

  const handleTerminalComplete = () => {
    setTimeout(() => setShowNarrative(true), 1000);
  };

  return (
    <section
      id="rules"
      className="relative min-h-screen overflow-hidden" style={{ paddingTop: '50px', paddingBottom: '50px' }}
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #0a0a0a 50%, #000000 100%)',
      }}
    >
      {/* Animated Matrix Grid Background */}
      <AnimatedMatrixGrid />

      {/* Fog effect */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%)',
          }}
        />
      </div>

      {/* Particle effects around borders */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#F3BA2F]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 5,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-white mb-4"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              fontFamily: 'Space Mono, monospace',
              letterSpacing: '0.05em',
              textShadow: '0 0 30px rgba(243, 186, 47, 0.5)',
            }}
            animate={{
              textShadow: [
                '0 0 30px rgba(243, 186, 47, 0.5)',
                '0 0 50px rgba(243, 186, 47, 0.7)',
                '0 0 30px rgba(243, 186, 47, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            THE CODE OF THE TRUE HOLDER
          </motion.h2>
        </motion.div>

        {/* Center holographic panel with rotating HOLD logo */}
        <div className="relative mb-16">
          <motion.div
            className="w-full max-w-4xl mx-auto p-8 md:p-12 rounded-2xl backdrop-blur-xl border border-[#F3BA2F]/20"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(243, 186, 47, 0.03) 100%)',
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Rotating HOLD emblem */}
            <div className="flex justify-center mb-8">
              <motion.div
                className="relative"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <img
                  src="/images/hold_logo.png"
                  alt="HOLD"
                  className="w-24 h-24 md:w-32 md:h-32"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(243, 186, 47, 0.8))',
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(243, 186, 47, 0.5)',
                      '0 0 60px rgba(243, 186, 47, 0.8)',
                      '0 0 30px rgba(243, 186, 47, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            </div>

            {/* Rules grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {rules.map((rule, index) => (
                <RuleCard
                  key={index}
                  number={index + 1}
                  text={rule.text}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Siziy's holographic silhouette and narrative */}
        <div ref={narrativeRef} className="relative max-w-3xl mx-auto mb-16">
          {/* Narrative text */}
          <motion.div
            className="relative p-8 rounded-xl border border-[#F3BA2F]/20 backdrop-blur-md"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(243, 186, 47, 0.05) 100%)',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 7 }}
          >
            <div className="mb-4 text-[#F3BA2F]/60 text-sm" style={{ fontFamily: 'Space Mono, monospace' }}>
              {'>'} HOLD.VOICE_PROTOCOL
            </div>

            <blockquote
              className="text-white/90 leading-relaxed space-y-4"
              style={{
                fontFamily: 'Cinzel, serif',
                fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
              }}
            >
              <p>"There are no leaders here. Only believers."</p>
              <p>The Code of HOLD is written not in paper, but in conviction.</p>
              <p>Each rule is a memory. Each believer, a keeper.</p>
              <p className="text-[#F3BA2F]">You are now bound by the Code."</p>
            </blockquote>
          </motion.div>
        </div>

        {/* Terminal authentication */}
        <TerminalPrompt delay={10000} onComplete={handleTerminalComplete} />

        {/* Narrative continuation */}
        {showNarrative && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="mb-8"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <p
                className="text-white/80 mb-2"
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: 'clamp(1rem, 2.6vw, 1.3rem)',
                }}
              >
                "Now you know the Code.
              </p>
              <p
                className="text-white/80"
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: 'clamp(1rem, 2.6vw, 1.3rem)',
                }}
              >
                But the Code means nothing…
              </p>
              <p
                className="text-[#F3BA2F] mt-4"
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                }}
              >
                without The Path."
              </p>
            </motion.div>

            {/* Golden trail */}
            <motion.div
              className="w-px h-32 mx-auto bg-gradient-to-b from-[#F3BA2F] to-transparent mb-8"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 2 }}
              style={{
                filter: 'blur(1px)',
                boxShadow: '0 0 20px rgba(243, 186, 47, 0.8)',
              }}
            />

            {/* Next section tease */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <p
                className="text-white/60 mb-8"
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.9rem',
                }}
              >
                {'>'} /follow_the_path
              </p>

              <a
                href="#community"
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-[#F3BA2F]/30 text-[#F3BA2F] hover:bg-[#F3BA2F]/10 hover:border-[#F3BA2F] transition-all duration-300"
              >
                <span className="whitespace-nowrap" style={{ fontWeight: 600, fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}>THE PATH — Where Conviction Becomes Culture</span>
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  →
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Bottom fade to deep space */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-30"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, #000000 100%)',
        }}
      />
    </section>
  );
}