import { motion } from 'motion/react';
import { Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const categories = [
  {
    id: 'creators',
    title: 'Real People',
    subtitle: 'Creators, Investors, Philosophers',
    icon: '🧠',
    color: 'gold-black',
    gradient: 'linear-gradient(135deg, rgba(243, 186, 47, 0.2), rgba(0, 0, 0, 0.95))',
    borderColor: 'rgba(243, 186, 47, 0.4)',
    people: [
      {
        name: 'CZ',
        title: 'Binance',
        quote: 'Fear fades. Code remains.',
        description: 'CZ didn\'t hold tokens — he held an ecosystem. When other projects fell, he kept building. He chose faith in time, not hype. Now he\'s the architect of a new world.',
        emoji: '💎',
        image: '/images/cz.png',
      },
      {
        name: 'Elon Musk',
        title: 'Tesla & SpaceX',
        quote: 'When rockets were falling, I didn\'t sell the dream.',
        description: 'He HOLDed the idea when the world laughed. Tesla and SpaceX stood on the edge of collapse — but he didn\'t sell. He chose the path of time. Now he flies above them all.',
        emoji: '🚀',
        image: '/images/elon_musk.png',
      },
      {
        name: 'Masayoshi Son',
        title: 'SoftBank',
        quote: 'I held Alibaba for 14 years. That\'s HOLD.',
        description: 'He invested when everyone said he was crazy. Fourteen years of patience turned into billions. For him, HOLD is not a strategy — it\'s a belief.',
        emoji: '⏳',
        image: '/images/masayoshi_son.png',
      },
      {
        name: 'Jack Ma',
        title: 'Alibaba',
        quote: 'Today is hard. Tomorrow will be worse. But the day after tomorrow — the sun will rise.',
        description: 'He built Alibaba when China didn\'t believe in the internet. His HOLD is patience and persistence. He proved: the sun rises for those who don\'t sell their dreams.',
        emoji: '☀️',
        image: '/images/jack_ma.png',
      },
    ],
  },
  {
    id: 'warriors',
    title: 'Athletes & Warriors',
    subtitle: 'Patience, Strength, and Discipline',
    icon: '⚔️',
    color: 'red-black',
    gradient: 'linear-gradient(135deg, rgba(220, 38, 38, 0.2), rgba(0, 0, 0, 0.95))',
    borderColor: 'rgba(220, 38, 38, 0.4)',
    people: [
      {
        name: 'Bruce Lee',
        title: 'Martial Artist',
        quote: 'HOLD is not inaction. It\'s self-control.',
        description: 'He trained for years for a perfect strike. Every movement — the embodiment of patience. He proved: true speed is born from stillness.',
        emoji: '🥋',
        image: '/images/bruce_lee.png',
      },
      {
        name: 'Miyamoto Musashi',
        title: 'Legendary Samurai',
        quote: 'The hardest victory is victory over yourself.',
        description: 'Sixty duels. Not a single defeat. He HOLDed his principles even when his life was at stake. His sword is willpower. His will — HOLD.',
        emoji: '⚔️',
        image: '/images/musashi.png',
      },
      {
        name: 'Cristiano Ronaldo',
        title: 'Football Legend',
        quote: 'I train while others rest.',
        description: 'He HOLDed his dream since childhood. He fell, endured, rose again. His faith in hard work is stronger than luck.',
        emoji: '⚽️',
        image: '/images/ronaldo.png',
      },
      {
        name: 'Michael Jordan',
        title: 'Basketball Icon',
        quote: 'I missed 9,000 shots. But I never gave up.',
        description: 'He turned failure into fuel. For him, HOLD means never stopping. He didn\'t trade success — he held the journey.',
        emoji: '🏀',
        image: '/images/michael_jordan.png',
      },
    ],
  },
  {
    id: 'heroes',
    title: 'Heroes from Movies & Anime',
    subtitle: 'Symbols of Awakening',
    icon: '🌀',
    color: 'blue-gold',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(243, 186, 47, 0.1))',
    borderColor: 'rgba(59, 130, 246, 0.4)',
    people: [
      {
        name: 'Neo',
        title: 'The Matrix',
        quote: 'I don\'t see charts. I see code.',
        description: 'He chose the red pill. He realized reality is faith, not numbers. He HOLDed the truth even when it shattered illusion.',
        emoji: '💊',
        image: '/images/neo.png',
      },
      {
        name: 'Naruto Uzumaki',
        title: 'Naruto',
        quote: 'Dattebayo! I\'ve followed the path of HOLD all my life!',
        description: 'He didn\'t give up, even when the world turned away. He didn\'t sell his friendship for short-term gain. He HOLDed loyalty — and became Hokage.',
        emoji: '💫',
        image: '/images/naruto.png',
      },
      {
        name: 'Son Goku',
        title: 'Dragon Ball',
        quote: 'Power builds through patience.',
        description: 'He trained while others slept. Each cycle — a new level. HOLD is his Super Saiyan form.',
        emoji: '⚡️',
        image: '/images/son_goku.png',
      },
      {
        name: 'Saitama',
        title: 'One Punch Man',
        quote: 'I trained for 3 years without a break. That\'s HOLD.',
        description: 'He kept discipline when everyone else quit. Now he wins with one punch. True HOLD doesn\'t make noise — it simply wins.',
        emoji: '👊',
        image: '/images/saitama.png',
      },
    ],
  },
  {
    id: 'historical',
    title: 'Historical Figures',
    subtitle: 'Those Who Held the Truth',
    icon: '🕰',
    color: 'white-gold',
    gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(243, 186, 47, 0.1))',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    people: [
      {
        name: 'Socrates',
        title: 'Philosopher',
        quote: 'I hold one knowledge — that I know nothing.',
        description: 'He didn\'t trade truth for approval. His HOLD was wisdom born of doubt.',
        emoji: '🧠',
        image: '/images/socrates.png',
      },
      {
        name: 'Confucius',
        title: 'Philosopher',
        quote: 'Patience is the foundation of harmony.',
        description: 'He taught that everything comes in its time. HOLD is not a strategy — it\'s the nature of things.',
        emoji: '☯️',
        image: '/images/confucius.png',
      },
      {
        name: 'Leonardo da Vinci',
        title: 'Renaissance Master',
        quote: 'I created for centuries.',
        description: 'He HOLDed his ideas until the world was ready. Every work — a code of time.',
        emoji: '🖋',
        image: '/images/leonardo.png',
      },
      {
        name: 'Walt Disney',
        title: 'Visionary Creator',
        quote: 'If you can dream it — you can HOLD it.',
        description: 'He went bankrupt, lost everything, but never gave up. His patience became an eternal brand.',
        emoji: '🎠',
        image: '/images/walt_disney.png',
      },
    ],
  },
];

export function WhoAcceptedHold() {
  const [activeTab, setActiveTab] = useState('creators');
  const currentIndex = categories.findIndex(cat => cat.id === activeTab);

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : categories.length - 1;
    setActiveTab(categories[newIndex].id);
  };

  const handleNext = () => {
    const newIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : 0;
    setActiveTab(categories[newIndex].id);
  };

  return (
    <section className="relative min-h-screen py-16 md:py-32 px-4 overflow-hidden bg-black">
      {/* Matrix rain background effect */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(243, 186, 47, 0.03) 2px,
              rgba(243, 186, 47, 0.03) 4px
            )`,
            animation: 'matrix-fall 20s linear infinite',
          }}
        />
      </div>

      {/* Radial glow */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(243, 186, 47, 0.15) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#F3BA2F]" />
            <h2 
              className="text-white text-2xl md:text-4xl lg:text-5xl"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                letterSpacing: '0.1em',
                textShadow: '0 0 30px rgba(243, 186, 47, 0.5)',
              }}
            >
              WHO ACCEPTED THE HOLD
            </h2>
            <Shield className="w-6 h-6 md:w-8 md:h-8 text-[#F3BA2F]" />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 max-w-3xl mx-auto text-sm md:text-base lg:text-lg px-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.8',
            }}
          >
            They HOLD when others give up. They didn't trade faith — they built it.
          </motion.p>
        </motion.div>

        {/* Tabs navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="relative mb-12">
            {/* Navigation arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/80 border border-[#F3BA2F]/30 flex items-center justify-center hover:bg-[#F3BA2F]/20 transition-colors"
              style={{ marginLeft: '-20px' }}
            >
              <ChevronLeft className="w-5 h-5 text-[#F3BA2F]" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/80 border border-[#F3BA2F]/30 flex items-center justify-center hover:bg-[#F3BA2F]/20 transition-colors"
              style={{ marginRight: '-20px' }}
            >
              <ChevronRight className="w-5 h-5 text-[#F3BA2F]" />
            </button>

            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 bg-transparent p-0 h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-transparent relative px-3 md:px-6 py-3 md:py-4 rounded-lg transition-all duration-300"
                  style={{
                    background: activeTab === category.id ? category.gradient : 'rgba(20, 20, 20, 0.8)',
                    border: `1px solid ${activeTab === category.id ? category.borderColor : 'rgba(243, 186, 47, 0.2)'}`,
                    boxShadow: activeTab === category.id ? `0 0 30px ${category.borderColor}` : 'none',
                  }}
                >
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <span className="text-xl md:text-2xl">{category.icon}</span>
                    <div className="text-center">
                      <div 
                        className="text-white text-xs md:text-sm"
                        style={{ fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em' }}
                      >
                        {category.title}
                      </div>
                      <div 
                        className="text-white/60 text-[10px] md:text-xs mt-0.5 md:mt-1 hidden md:block"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {category.subtitle}
                      </div>
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab content */}
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
              >
                {category.people.map((person, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group h-full"
                  >
                    <div
                      className="relative p-6 rounded-lg backdrop-blur-md overflow-hidden h-full flex flex-col"
                      style={{
                        background: category.gradient,
                        border: `1px solid ${category.borderColor}`,
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {/* Top glow on hover */}
                      <div
                        className="absolute inset-x-0 top-0 h-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(to bottom, ${category.borderColor}, transparent)`,
                        }}
                      />

                      {/* Avatar image or emoji */}
                      <div className="flex justify-center mb-3 md:mb-4">
                        {person.image ? (
                          <div
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden"
                            style={{
                              border: `2px solid ${category.borderColor}`,
                              boxShadow: `0 0 20px ${category.borderColor}`,
                              background: 'rgba(0, 0, 0, 0.3)',
                            }}
                          >
                            <img 
                              src={person.image} 
                              alt={person.name}
                              className="w-full h-full"
                              style={{ 
                                objectFit: 'cover',
                                objectPosition: person.name === 'Socrates' ? 'center 25%' : 'center top',
                                transform: person.name === 'Socrates' ? 'scale(1.2)' : 'scale(1.1)'
                              }}
                            />
                          </div>
                        ) : (
                          <div
                            className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl"
                            style={{
                              background: category.gradient,
                              border: `2px solid ${category.borderColor}`,
                              boxShadow: `0 0 20px ${category.borderColor}`,
                            }}
                          >
                            {person.emoji}
                          </div>
                        )}
                      </div>

                      {/* Name and title */}
                      <div className="text-center mb-3 md:mb-4">
                        <h3
                          className="text-white mb-1 text-lg md:text-xl"
                          style={{
                            fontFamily: 'Orbitron, sans-serif',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {person.name}
                        </h3>
                        <p
                          className="text-[#F3BA2F]/70 text-xs md:text-sm"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {person.title}
                        </p>
                      </div>

                      {/* Quote */}
                      <div className="relative mb-3 md:mb-4">
                        <div 
                          className="absolute -left-1 -top-1 text-[#F3BA2F]/20 text-xl md:text-2xl"
                          style={{ lineHeight: 1 }}
                        >
                          "
                        </div>
                        <p
                          className="text-white/90 italic relative z-10 pl-3 md:pl-4 text-xs md:text-sm"
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            lineHeight: '1.5',
                          }}
                        >
                          {person.quote}
                        </p>
                      </div>

                      {/* Description */}
                      <p
                        className="text-white/70 text-xs flex-1"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          lineHeight: '1.6',
                        }}
                      >
                        {person.description}
                      </p>

                      {/* Bottom accent line */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1"
                        style={{
                          background: `linear-gradient(to right, transparent, ${category.borderColor}, transparent)`,
                        }}
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 md:mt-20"
        >
          <div
            className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(243, 186, 47, 0.1), rgba(243, 186, 47, 0.05))',
              border: '1px solid rgba(243, 186, 47, 0.3)',
              boxShadow: '0 0 30px rgba(243, 186, 47, 0.2)',
            }}
          >
            <p
              className="text-white text-lg md:text-xl lg:text-2xl"
              style={{
                fontFamily: 'Orbitron, sans-serif',
                letterSpacing: '0.1em',
              }}
            >
              THEY CHOSE <span className="text-[#F3BA2F]">HOLD</span>. WILL YOU?
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes matrix-fall {
          0% { transform: translateY(0); }
          100% { transform: translateY(100px); }
        }
      `}</style>
    </section>
  );
}