import { motion } from 'motion/react';
import { MarbleBackground } from './MarbleBackground';
import { LightBeam } from './LightBeam';
import { HolographicCoin } from './HolographicCoin';
import { OrbitingDataGlyphs } from './OrbitingDataGlyphs';
import { TokenomicsDataCard } from './TokenomicsDataCard';
import { BurnVisualization } from './BurnVisualization';
import { ExternalLink } from 'lucide-react';

export function Tokenomics() {
  const dataCards = [
    {
      icon: '✦',
      title: 'Token Overview',
      data: [
        { parameter: 'Token Name', value: 'HOLD' },
        { parameter: 'Symbol', value: 'HOLD' },
        { parameter: 'Network', value: 'Binance Smart Chain (BEP-20)' },
        { parameter: 'Decimals', value: '18' },
      ],
      content: (
        <>
          <p className="text-white">"A token forged not for greed — but for guardianship.</p>
          <p className="text-white">Built on BNB, sustained by belief."</p>
        </>
      ),
    },
    {
      icon: '✦',
      title: 'Supply',
      data: [
        { parameter: 'Initial Supply', value: '1,000,000,000 HOLD' },
        { parameter: 'Circulating Supply', value: '~800,000,000 HOLD' },
        { parameter: 'Mechanism', value: 'Continuous Burn (via Four.Meme)' },
      ],
      content: (
        <>
          <p className="text-white">"As flames consume excess, scarcity is born.</p>
          <p className="text-white">Each burn makes the believer's hand heavier with value."</p>
        </>
      ),
    },
    {
      icon: '✦',
      title: 'Tax Policy',
      data: [
        { parameter: 'Transaction Tax', value: 'None' },
        { parameter: 'Reflections', value: 'None' },
        { parameter: 'Hidden Fees', value: 'None' },
      ],
      content: (
        <>
          <p className="text-white">"No tricks. No games.</p>
          <p className="text-white">HOLD needs no toll — belief pays its own price."</p>
        </>
      ),
    },
    {
      icon: '✦',
      title: 'Burn Protocol',
      data: undefined,
      content: (
        <div className="space-y-4">
          <p className="not-italic text-[#EAEAEA]">
            Our partner Four.Meme actively purchases HOLD from the open market and sends it to the burn address — reducing supply and increasing scarcity.
          </p>
          <p className="text-[#EAEAEA]">"Value is purified in fire. Every burn is a ritual of faith."</p>
        </div>
      ),
    },
    {
      icon: '✦',
      title: 'Transparency Note',
      data: undefined,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3 py-2">
            <div className="w-8 h-8 rounded-full bg-[#F3BA2F]/20 flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-[#F3BA2F]" />
            </div>
            <span className="text-[#EAEAEA]">Verified Contract on BscScan</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <div className="w-8 h-8 rounded-full bg-[#F3BA2F]/20 flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-[#F3BA2F]" />
            </div>
            <span className="text-[#EAEAEA]">Security Checked via GoPlus Labs</span>
          </div>
          <div className="flex items-center gap-3 py-2">
            <div className="w-8 h-8 rounded-full bg-[#F3BA2F]/20 flex items-center justify-center">
              <ExternalLink className="w-4 h-4 text-[#F3BA2F]" />
            </div>
            <span className="text-[#EAEAEA]">Tested Safe on Honeypot.is</span>
          </div>
          <p className="mt-4 text-[#EAEAEA]">"Trust is not asked — it is proven.</p>
          <p className="text-[#EAEAEA]">Every audit, every check, is a promise kept."</p>
        </div>
      ),
    },
  ];

  return (
    <section id="tokenomics" className="relative min-h-screen overflow-hidden" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      {/* Background */}
      <MarbleBackground />

      {/* Light beam from above */}
      <LightBeam />

      {/* Centerpiece: Levitating coin with orbiting glyphs */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none">
        <div className="relative w-full h-full">
          <HolographicCoin />
          <OrbitingDataGlyphs />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-96">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-[#F3BA2F] tracking-wide"
            style={{
              fontSize: 'clamp(2rem, 8vw, 4rem)',
              fontWeight: 900,
              fontFamily: 'Georgia, serif',
              textShadow: '0 0 40px rgba(243, 186, 47, 0.6)',
              letterSpacing: '0.05em',
            }}
          >
            TOKENOMICS
          </h2>
          <motion.div
            className="h-1 w-32 mx-auto mt-4 bg-[#F3BA2F]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              boxShadow: '0 0 20px rgba(243, 186, 47, 0.8)',
            }}
          />
        </motion.div>

        {/* Data cards grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-24">
          {dataCards.slice(0, 3).map((card, index) => (
            <TokenomicsDataCard
              key={index}
              icon={card.icon}
              title={card.title}
              data={card.data}
              content={card.content}
              delay={index * 0.2}
            />
          ))}

          {/* Burn Protocol - Full width */}
          <div className="md:col-span-2">
            <TokenomicsDataCard
              icon={dataCards[3].icon}
              title={dataCards[3].title}
              data={dataCards[3].data}
              content={dataCards[3].content}
              delay={0.6}
            />
          </div>

          {/* Transparency Note */}
          <div className="md:col-span-2">
            <TokenomicsDataCard
              icon={dataCards[4].icon}
              title={dataCards[4].title}
              data={dataCards[4].data}
              content={dataCards[4].content}
              delay={0.8}
            />
          </div>
        </div>

        {/* Burn Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <BurnVisualization />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-center text-[#EAEAEA]/80 mt-8 italic"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
          >
            "Tokens are continuously burned — scarcity fuels strength."
          </motion.p>
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#F3BA2F] italic max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              textShadow: '0 0 20px rgba(243, 186, 47, 0.3)',
            }}
          >
            "Our foundation is discipline — our framework is belief."
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex justify-center"
        >
          <motion.button
            className="group relative px-12 py-5 rounded-full bg-[#F3BA2F]/10 backdrop-blur-sm border-2 border-[#F3BA2F] overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.05, borderColor: '#FFD700' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const nextSection = document.getElementById('security');
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

            {/* Lock icon */}
            <span
              className="relative z-10 text-[#F3BA2F] group-hover:text-white transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
              style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.25rem)', fontWeight: 700, letterSpacing: '0.05em' }}
            >
              Explore Security & Verification
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}