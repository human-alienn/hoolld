import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { FloatingTextParticles } from './FloatingTextParticles';
import { HolographicCoin } from './HolographicCoin';
import { MissionSpeechCard } from './MissionSpeechCard';

export function OurMission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const coinY = useTransform(scrollYProgress, [0, 0.5, 1], ['20%', '0%', '-20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  const speechCards = [
    {
      icon: '✦',
      title: '1. Wake up the crypto community from its slumber.',
      content: (
        <>
          <p className="italic">The red pill is the moment when you stop trading noise and begin to understand the code.</p>
        </>
      ),
    },
    {
      icon: '✦',
      title: '2. Unite the owners.',
      content: (
        <>
          <p className="italic">We are a collective of those who choose unity instead of chaos, strength instead of fear, faith instead of doubt.</p>
        </>
      ),
    },
    {
      icon: '✦',
      title: '3. Turn patience into a superpower.',
      content: (
        <>
          <p className="italic">While others are pressing "sell", we are making coffee.</p>
          <p className="italic">Time is working for us.</p>
          <p className="italic">Every holder knows that diamond hands don't shake. 💎✋</p>
        </>
      ),
    },
    {
      icon: '✦',
      title: '4. Build the eternal, not the hype.',
      content: (
        <>
          <p className="italic">We are not looking for the "next 100x". We are building a code that will outlive the market.</p>
          <p className="italic">Let them play trading — we create a legend.</p>
        </>
      ),
    },
  ];

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background gradient: dark gold to dawn gold */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #1a1200 0%, #2d1f00 20%, #F3BA2F 70%, #FFF4D0 100%)',
          y: backgroundY,
        }}
      />

      {/* Floating text particles */}
      <FloatingTextParticles />

      {/* Gold sparkles drifting upward */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#F3BA2F]"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-5%',
              filter: 'blur(1px)',
            }}
            animate={{
              y: [0, -window.innerHeight - 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div className="relative z-10 container mx-auto px-6" style={{ opacity, paddingTop: '50px', paddingBottom: '50px' }}>
        {/* Holographic coin - centered */}
        <motion.div
          className="flex justify-center mb-12"
          style={{ y: coinY }}
        >
          <HolographicCoin />
        </motion.div>

        {/* Mission heading with reflection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <h2
            className="text-white tracking-wide relative"
            style={{
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '0.1em',
              textShadow: '0 0 30px rgba(243, 186, 47, 0.6)',
            }}
          >
            Our Mission
          </h2>

          {/* Reflection effect */}
          <motion.div
            className="absolute top-full left-0 right-0 overflow-hidden h-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h2
              className="text-white tracking-wide"
              style={{
                fontSize: 'clamp(2rem, 8vw, 4rem)',
                fontWeight: 900,
                letterSpacing: '0.1em',
                transform: 'scaleY(-1)',
                background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Our Mission
            </h2>
          </motion.div>
        </motion.div>

        {/* Speech cards grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
          {speechCards.map((card, index) => (
            <MissionSpeechCard
              key={index}
              icon={card.icon}
              title={card.title}
              content={card.content}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-12"
        >
          <p
            className="text-white italic max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            "HOLD isn't about speculation — it's about stability, faith, and community."
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center"
        >
          <motion.button
            className="group relative px-12 py-5 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/40 overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.8)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const nextSection = document.getElementById('tokenomics');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            {/* Animated shine */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />

            <span
              className="relative z-10 text-white group-hover:text-white transition-colors duration-300 whitespace-nowrap"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 700, letterSpacing: '0.05em' }}
            >
              View Tokenomics →
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </section>
  );
}