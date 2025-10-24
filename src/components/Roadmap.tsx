import { motion } from 'motion/react';
import { useState } from 'react';

const milestones = [
  {
    quarter: 'Q1 2025',
    title: 'The Genesis',
    description: [
      'Deployment on Binance Smart Chain',
      'Initial liquidity and PancakeSwap listing',
      'Formation of the first HOLD community circle',
    ],
    quote:
      'Every flame begins as a spark. In February, belief found code — and HOLD was born.',
    icon: '✦',
  },
  {
    quarter: 'Q2 2025',
    title: 'The Growth',
    description: [
      'Partnership with Four.Meme',
      'Initiation of recurring burn events',
      'Community expansion and AMAs',
    ],
    quote:
      'Partnerships forged the fires. With each burn, our value purified — our unity strengthened.',
    icon: '✦',
  },
  {
    quarter: 'Q3 2025',
    title: 'The Culture Formation',
    description: [
      'Development of HOLD cultural initiatives',
      'NFT & meme ecosystem launch',
      'Social and marketing expansion',
    ],
    quote:
      'We became more than holders — we became a movement. Words turned to symbols, and symbols to stories.',
    icon: '✦',
  },
  {
    quarter: 'Q4 2025 – Q1 2026',
    title: 'The Expansion',
    description: [
      'DAO activation for community governance',
      'Ecosystem partnerships & integrations',
      'CEX listings and long-term expansion',
    ],
    quote:
      'Discipline gives birth to destiny. Now, we pass the torch to the DAO — where belief governs belief.',
    icon: '✦',
  },
];

export function Roadmap() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="roadmap"
      className="relative min-h-screen flex items-center overflow-hidden bg-black" style={{ paddingTop: '50px', paddingBottom: '50px' }}
    >
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 2 + 0.5,
              height: Math.random() * 2 + 0.5,
              opacity: Math.random() * 0.5 + 0.2,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Content container */}
      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 px-6">
          <h2
            className="text-white mb-4"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 900,
              fontFamily: 'Cinzel, serif',
              letterSpacing: '0.1em',
              textShadow: '0 0 30px rgba(243, 186, 47, 0.7), 0 0 60px rgba(243, 186, 47, 0.4)',
            }}
          >
            🗺 ROADMAP
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            The Path of Belief — Every season holds a chapter of conviction.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          {/* Central vertical line - Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 hidden md:block">
            <div 
              className="w-full h-full bg-[#F3BA2F] opacity-40"
            />
          </div>

          {/* Milestones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12 md:gap-x-16 lg:gap-x-24 md:items-stretch">
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline node - Desktop only */}
                  <div className="hidden md:block absolute top-8 z-20" style={{
                    [isLeft ? 'right' : 'left']: '-2.5rem',
                    transform: isLeft ? 'translateX(50%)' : 'translateX(-50%)',
                  }}>
                    <div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F3BA2F] to-[#D4A027] flex items-center justify-center shadow-lg relative"
                      style={{
                        boxShadow: hoveredIndex === index
                          ? '0 0 40px rgba(243, 186, 47, 0.9)'
                          : '0 0 20px rgba(243, 186, 47, 0.6)',
                        transition: 'box-shadow 0.3s ease',
                      }}
                    >
                      <span className="text-2xl">{milestone.icon}</span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className="relative p-6 rounded-2xl border-2 overflow-hidden transition-all duration-300 flex-1 flex flex-col"
                    style={{
                      borderColor: hoveredIndex === index ? '#F3BA2F' : 'rgba(243, 186, 47, 0.3)',
                      background:
                        'linear-gradient(135deg, rgba(243, 186, 47, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%)',
                      backdropFilter: 'blur(10px)',
                      transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
                    }}
                  >
                    {/* Background glow */}
                    <div
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        background:
                          'radial-gradient(circle at center, rgba(243, 186, 47, 0.2) 0%, transparent 70%)',
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Icon and Quarter - Mobile */}
                      <div className="flex items-center gap-3 mb-4 md:hidden">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F3BA2F] to-[#D4A027] flex items-center justify-center">
                          <span className="text-xl">{milestone.icon}</span>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-[#F3BA2F]/20 border border-[#F3BA2F]/40">
                          <span className="text-[#F3BA2F] text-sm" style={{ fontWeight: 600 }}>
                            {milestone.quarter}
                          </span>
                        </div>
                      </div>

                      {/* Quarter badge - Desktop */}
                      <div className={`hidden md:block mb-4 ${isLeft ? 'text-right' : 'text-left'}`}>
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#F3BA2F]/20 border border-[#F3BA2F]/40">
                          <span className="text-[#F3BA2F]" style={{ fontWeight: 600 }}>
                            {milestone.quarter}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="text-white mb-4"
                        style={{
                          fontSize: '1.75rem',
                          fontWeight: 700,
                          fontFamily: 'Cinzel, serif',
                          letterSpacing: '0.05em',
                          textShadow: '0 0 20px rgba(243, 186, 47, 0.3)',
                        }}
                      >
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <ul className={`space-y-2.5 mb-5 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                        {milestone.description.map((item, i) => (
                          <li key={i} className={`text-white/85 flex items-start gap-2.5 ${isLeft ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                            <span className="text-[#F3BA2F] text-lg mt-0.5">✦</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Quote */}
                      <div className={`pt-4 border-t border-[#F3BA2F]/30 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                        <p className="text-[#F3BA2F]/90 italic text-sm leading-relaxed">
                          "{milestone.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F3BA2F]/20 to-transparent blur-3xl pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing quote */}
        <div className="relative mt-16 md:mt-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="relative p-8 md:p-10 rounded-3xl border-2 border-[#F3BA2F]/50 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(243, 186, 47, 0.15) 0%, rgba(0, 0, 0, 0.7) 100%)',
                backdropFilter: 'blur(15px)',
              }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(243, 186, 47, 0.2) 0%, transparent 70%)',
                }}
              />

              <div className="relative z-10">
                <div className="mb-5">
                  <span className="text-[#F3BA2F] text-5xl">✦</span>
                </div>

                <blockquote
                  className="text-white italic"
                  style={{
                    fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                    fontFamily: 'Cinzel, serif',
                    lineHeight: '1.6',
                  }}
                >
                  "The journey of HOLD is not measured by price, but by persistence."
                </blockquote>

                <div
                  className="h-px w-28 mx-auto mt-4"
                  style={{
                    background: 'linear-gradient(to right, transparent, #F3BA2F, transparent)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}