import { motion } from 'motion/react';
import { Shield, ExternalLink } from 'lucide-react';
import { ObsidianBackground } from './ObsidianBackground';
import { GoldenPillars } from './GoldenPillars';
import { VaultDoor } from './VaultDoor';
import { AuditCard } from './AuditCard';
import { ChainLockAnimation } from './ChainLockAnimation';
import { LockingRitual } from './LockingRitual';
import { CursorParticles } from './CursorParticles';

export function Security() {
  const auditCards = [
    {
      icon: (
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute inset-0 rounded-lg bg-[#F3BA2F]/20 border-2 border-[#F3BA2F] flex items-center justify-center"
            animate={{
              boxShadow: [
                '0 0 20px rgba(243, 186, 47, 0.5)',
                '0 0 40px rgba(243, 186, 47, 0.8)',
                '0 0 20px rgba(243, 186, 47, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ExternalLink className="w-12 h-12 text-[#F3BA2F]" />
          </motion.div>
        </div>
      ),
      title: 'BscScan Verification',
      address: '0x4ff1e3c449a7f4b42d8c6f5fbb89c52b8b47fc65',
      result: 'Contract Verified on BscScan',
      quote: (
        <>
          <p className="text-white">"Our code stands open before the world —</p>
          <p className="text-white">the signature of our honesty etched forever on BNB's chain."</p>
        </>
      ),
    },
    {
      icon: (
        <div className="relative w-24 h-24">
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Shield className="w-24 h-24 text-[#F3BA2F]" strokeWidth={1.5} />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-12 h-12 rounded-full border-2 border-[#F3BA2F]"
              style={{
                background: 'radial-gradient(circle, rgba(243, 186, 47, 0.3), transparent)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      ),
      title: 'GoPlus Labs Security Check',
      result: 'Analyzed by GoPlus Labs - No vulnerabilities detected',
      quote: (
        <>
          <p className="text-white">"The guardians of code have inspected our walls.</p>
          <p className="text-white">No cracks, no hidden traps — only discipline in digital form."</p>
        </>
      ),
    },
    {
      icon: (
        <div className="relative w-24 h-24">
          {/* Honeycomb grid */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {Array.from({ length: 7 }).map((_, i) => {
              const row = Math.floor(i / 3);
              const col = i % 3;
              const x = 25 + col * 22 + (row % 2) * 11;
              const y = 20 + row * 19;
              const isSafe = i === 3; // Center cell

              return (
                <motion.g key={i}>
                  <polygon
                    points={`${x},${y - 10} ${x + 8},${y - 5} ${x + 8},${y + 5} ${x},${y + 10} ${x - 8},${y + 5} ${x - 8},${y - 5}`}
                    fill={isSafe ? 'rgba(243, 186, 47, 0.3)' : 'rgba(243, 186, 47, 0.1)'}
                    stroke="#F3BA2F"
                    strokeWidth="1"
                  />
                  {isSafe && (
                    <motion.text
                      x={x}
                      y={y + 3}
                      textAnchor="middle"
                      fill="#F3BA2F"
                      fontSize="8"
                      fontWeight="bold"
                      animate={{
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✓
                    </motion.text>
                  )}
                </motion.g>
              );
            })}
          </svg>
        </div>
      ),
      title: 'Honeypot Test',
      result: 'Honeypot.is — Result: Safe',
      quote: (
        <>
          <p className="text-white">"Temptation tested, and trust triumphed.</p>
          <p className="text-white">HOLD holds clean — no tricks beneath the honey."</p>
        </>
      ),
    },
  ];

  return (
    <section id="security" className="relative min-h-screen overflow-hidden" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      {/* Background */}
      <ObsidianBackground />

      {/* Golden pillars */}
      <GoldenPillars />

      {/* Cursor particle trail */}
      <CursorParticles />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Vault door */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <VaultDoor />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-6"
        >
          <h2
            className="text-[#F3BA2F] tracking-wide mb-4"
            style={{
              fontSize: 'clamp(1.75rem, 7vw, 4rem)',
              fontWeight: 900,
              fontFamily: 'Georgia, serif',
              textShadow: '0 0 40px rgba(243, 186, 47, 0.6)',
              letterSpacing: '0.1em',
            }}
          >
            Security & Verification
          </h2>
          <motion.div
            className="h-1 w-32 mx-auto bg-[#F3BA2F]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              boxShadow: '0 0 20px rgba(243, 186, 47, 0.8)',
            }}
          />
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center text-white mb-20"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', letterSpacing: '0.05em' }}
        >
          Transparency, safety, and proof — the pillars of the HOLD movement.
        </motion.p>

        {/* Audit cards with chain lock animation */}
        <div className="relative max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-3 gap-8">
            {auditCards.map((card, index) => (
              <AuditCard
                key={index}
                icon={card.icon}
                title={card.title}
                address={card.address}
                result={card.result}
                quote={card.quote}
                delay={index * 0.3 + 1.2}
              />
            ))}
          </div>

          {/* Chain lock connecting the cards */}
          <ChainLockAnimation />
        </div>

        {/* Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
          className="text-center mb-20 px-4"
        >
          <p className="text-xs text-white max-w-3xl mx-auto">
            Note: DexTools and Dexscreener may sometimes display incomplete data. Always verify through official audit links.
          </p>
        </motion.div>

        {/* Locking ritual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-32"
        >
          <LockingRitual />
        </motion.div>

        {/* Golden path transition */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 5 }}
          className="h-1 max-w-4xl mx-auto mb-16 origin-center"
          style={{
            background: 'linear-gradient(to right, transparent, #F3BA2F, #F3BA2F, #F3BA2F, transparent)',
            boxShadow: '0 0 30px rgba(243, 186, 47, 0.8)',
          }}
        >
          {/* Animated particles along the path */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"
            animate={{
              x: [0, 1000],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 6,
            }}
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 5.5 }}
          className="flex justify-center"
        >
          <motion.button
            className="group relative px-12 py-5 rounded-full bg-[#F3BA2F]/10 backdrop-blur-sm border-2 border-[#F3BA2F] overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05, borderColor: '#FFD700' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const nextSection = document.getElementById('roadmap');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-[#F3BA2F]"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />

            <span
              className="relative z-10 text-[#F3BA2F] group-hover:text-white transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 700, letterSpacing: '0.05em' }}
            >
              View Roadmap
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}