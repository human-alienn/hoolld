import { motion } from 'motion/react';
import { GoldenMist } from './GoldenMist';
import { TeacherSiziyFull } from './TeacherSiziyFull';
import { SpeechCard } from './SpeechCard';
import { OrbitalQuotes } from './OrbitalQuotes';

export function WhatIsHold() {
  const speechCards = [
    {
      title: '💫 The Beginning',
      content: (
        <>
          <p className="italic">"People once called it a typo."</p>
          <p className="italic">Now it's a belief system born of those who have seen every cycle."</p>
        </>
      ),
    },
    {
      title: '🔮 The Meaning',
      content: (
        <>
          <p className="italic">HOLD is a state of mind —</p>
          <p className="italic">the discipline of those who have lived through instability,</p>
          <p className="italic">the faith of those who chose time over panic, unity over noise, and meaning over hype.</p>
        </>
      ),
    },
    {
      title: '🔥 The Faith',
      content: (
        <>
          <p className="italic">HOLD is faith in yourself,</p>
          <p className="italic">in your community,</p>
          <p className="italic">and in the time-tested code that holds it all together.</p>
        </>
      ),
    },
    {
      title: '⚡ The Awakening',
      content: (
        <>
          <p className="italic">To HOLD is to awaken.</p>
          <p className="italic">It's the way out of the Matrix — a path to see the truth behind illusion,</p>
          <p className="italic">where patience becomes freedom, and belief becomes reality.</p>
        </>
      ),
    },
  ];

  return (
    <section id="what-is-hold" className="relative min-h-screen bg-black overflow-hidden">
      {/* Background: deep space black with golden mist */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      <GoldenMist />

      {/* Teacher Siziy - centered figure with parallax */}
      <TeacherSiziyFull />

      {/* Digital heartbeat subtle pulse overlay */}
      <motion.div
        className="absolute inset-0 bg-[#F3BA2F] mix-blend-overlay pointer-events-none"
        animate={{
          opacity: [0, 0.02, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Orbital Quotes - centered */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <OrbitalQuotes />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2
            className="text-white tracking-tight mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontWeight: 900,
              textShadow: '0 0 30px rgba(243, 186, 47, 0.4)',
            }}
          >
            What is HOLD
          </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-[#F3BA2F]/80 mb-20"
          style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', letterSpacing: '0.05em' }}
        >
          A community-driven memecoin and a cultural movement.
        </motion.p>

        {/* Speech Cards - Vertical sequence */}
        <div className="max-w-4xl mx-auto space-y-12 mb-20">
          {speechCards.map((card, index) => (
            <SpeechCard
              key={index}
              title={card.title}
              content={card.content}
              delay={index * 0.3}
            />
          ))}
        </div>

        {/* Quote overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#F3BA2F] italic"
            style={{
              fontSize: 'clamp(1.1rem, 3.5vw, 1.75rem)',
              fontWeight: 500,
              textShadow: '0 0 20px rgba(243, 186, 47, 0.3)',
            }}
          >
            "Those who hold today, lead tomorrow."
          </p>
        </motion.div>

        {/* Golden path light transition */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="h-1 max-w-2xl mx-auto bg-gradient-to-r from-transparent via-[#F3BA2F] to-transparent mb-12 origin-center"
          style={{
            boxShadow: '0 0 20px rgba(243, 186, 47, 0.6)',
          }}
        />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="flex justify-center"
        >
          <motion.button
            className="group relative px-10 py-4 rounded-full bg-black border-2 border-[#F3BA2F] overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              // Smooth scroll to next section
              const nextSection = document.getElementById('mission');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-[#F3BA2F]"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.3 }}
            />

            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: '0 0 20px rgba(243, 186, 47, 0.5)',
              }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(243, 186, 47, 0.5)',
                  '0 0 40px rgba(243, 186, 47, 0.8)',
                  '0 0 20px rgba(243, 186, 47, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <span
              className="relative z-10 text-[#F3BA2F] group-hover:text-white transition-colors duration-300 whitespace-nowrap"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 700 }}
            >
              Discover Our Mission →
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}