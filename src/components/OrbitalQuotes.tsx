import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TypingUntypingText } from './TypingUntypingText';
import { DualProfileCard } from './DualProfileCard';

export function OrbitalQuotes() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const orbitRadii = isMobile ? [100] : [180, 280, 380]; // Smaller radius on mobile
  const numberOfNodes = 6; // 6 main connection points
  
  return (
    <div className="relative w-full flex items-center justify-center" style={{ height: '900px' }}>
      {/* Matrix rain background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-[#F3BA2F]/20 to-transparent"
            style={{
              left: `${(i * 6) + Math.random() * 6}%`,
              height: '100%',
            }}
            animate={{
              y: ['-100%', '100%'],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>
      
      {/* Center container */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        
        {/* Rotating orbital system */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Multiple orbit circles */}
          {orbitRadii.map((radius, idx) => (
            <div
              key={`orbit-${idx}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                border: '1px solid rgba(243, 186, 47, 0.3)',
                boxShadow: '0 0 20px rgba(243, 186, 47, 0.1)',
              }}
            />
          ))}
          
          {/* Geometric web pattern - radial lines from center */}
          {[...Array(numberOfNodes)].map((_, i) => {
            const angle = (i * 360) / numberOfNodes;
            const maxRadius = orbitRadii[orbitRadii.length - 1];
            
            return (
              <div
                key={`line-${i}`}
                className="absolute left-1/2 top-1/2 origin-left"
                style={{
                  width: `${maxRadius}px`,
                  height: '1px',
                  background: 'linear-gradient(to right, rgba(243, 186, 47, 0.4), rgba(243, 186, 47, 0.1))',
                  transform: `rotate(${angle}deg)`,
                  boxShadow: '0 0 10px rgba(243, 186, 47, 0.2)',
                }}
              />
            );
          })}
          
          {/* Orbital nodes at intersections */}
          {orbitRadii.map((radius, rIdx) => (
            [...Array(numberOfNodes)].map((_, i) => {
              const angle = (i * 360) / numberOfNodes;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div
                  key={`node-${rIdx}-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-[#F3BA2F]"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    boxShadow: '0 0 10px rgba(243, 186, 47, 0.8)',
                    opacity: 0.9,
                  }}
                />
              );
            })
          ))}
        </motion.div>
        
        {/* Quote card - LEFT - Anndy Lian */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 z-20"
          style={{
            left: isMobile ? '-150px' : '-350px',
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <DualProfileCard
            profiles={[
              {
                name: 'Anndy Lian',
                handle: '@anndylian',
                image: '/images/anndy_lian.png',
                quote: "If you can't hold the right asset, you won't be rich.",
              },
              {
                name: 'Anndy Lian',
                handle: '@anndylian',
                image: '/images/anndy_lian.png',
                quote: 'Only the strongest will survive. Only with conviction, you hold. Only with foresight, you become wealthy!',
              },
            ]}
            width={isMobile ? "70px" : "240px"}
            position={{}}
            animationDelay={0}
            textAlign="left"
            typingSpeed={25}
            pauseDuration={6000}
          />
        </motion.div>
        
        {/* Quote card - RIGHT - CZ */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 z-20"
          style={{
            right: isMobile ? '-150px' : '-350px',
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <DualProfileCard
            profiles={[
              {
                name: 'CZ',
                handle: '@cz_binance',
                image: '/images/cz_orbital.png',
                quote: "You know how some people say, 'oh, he is so lucky that he bought bitcoins so early'? Well, what you are feeling now is the pain that we had to endure many times before too. Hold is never easy.",
              },
              {
                name: 'CZ',
                handle: '@cz_binance',
                image: '/images/cz_orbital.png',
                quote: 'A little secret about all the crypto millionaires I know... they all had to hold through dips.',
              },
            ]}
            width={isMobile ? "70px" : "240px"}
            position={{}}
            animationDelay={0}
            textAlign="left"
            typingSpeed={25}
            pauseDuration={6000}
          />
        </motion.div>
        
        {/* Quote card - TOP - CZ (centered large card) */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 z-30"
          style={{
            top: isMobile ? '-190px' : '-450px',
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div
            className="relative p-4 rounded-lg backdrop-blur-md"
            style={{
              width: isMobile ? '150px' : '400px',
              background: 'rgba(20, 20, 20, 0.95)',
              border: '2px solid rgba(243, 186, 47, 0.6)',
              boxShadow: '0 8px 40px rgba(0, 0, 0, 0.8), 0 0 60px rgba(243, 186, 47, 0.4)',
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1/2 rounded-t-lg pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(243, 186, 47, 0.25), transparent)',
              }}
            />
            
            <div className="flex items-center gap-2 mb-3 relative z-10">
              <div
                className={`${isMobile ? 'w-8 h-8 border' : 'w-14 h-14 border-2'} rounded-full overflow-hidden border-[#F3BA2F]/60 flex-shrink-0`}
                style={{
                  boxShadow: '0 0 20px rgba(243, 186, 47, 0.5)',
                }}
              >
                <img
                  src="/images/cz_orbital.png"
                  alt="CZ"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-white ${isMobile ? 'text-xs' : 'text-base'} ${isMobile ? 'truncate' : ''}`}
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    CZ
                  </span>
                  <Star className={`${isMobile ? 'w-2.5 h-2.5' : 'w-4 h-4'} text-[#F3BA2F] fill-[#F3BA2F] flex-shrink-0`} />
                </div>
                <div
                  className={`text-[#F3BA2F]/70 ${isMobile ? 'text-xs truncate' : 'text-sm'}`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  @cz_binance
                </div>
              </div>
            </div>
            
            <TypingUntypingText
              texts={[
                "If you can't hold, you won't be rich.",
                "Hold"
              ]}
              delay={1200}
              typingSpeed={30}
              pauseDuration={5000}
              loop={true}
              className="text-white/90 relative z-10"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: isMobile ? '0.7rem' : '1.1rem',
                lineHeight: '1.6',
                fontWeight: 500,
              }}
            />
          </div>
        </motion.div>
        
        {/* Quote card - BOTTOM - CZ */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 z-20"
          style={{
            bottom: isMobile ? '-190px' : '-420px',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <div
            className="relative p-4 rounded-lg backdrop-blur-md"
            style={{
              width: isMobile ? '150px' : '320px',
              background: 'rgba(20, 20, 20, 0.9)',
              border: '1px solid rgba(243, 186, 47, 0.4)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.6), 0 0 40px rgba(243, 186, 47, 0.2)',
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1/2 rounded-t-lg pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, rgba(243, 186, 47, 0.15), transparent)',
              }}
            />
            
            <div className="flex items-center gap-2 mb-3 relative z-10">
              <div
                className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full overflow-hidden border border-[#F3BA2F]/40 flex-shrink-0`}
                style={{
                  boxShadow: '0 0 10px rgba(243, 186, 47, 0.3)',
                }}
              >
                <img
                  src="/images/cz_orbital.png"
                  alt="CZ"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-white text-sm ${isMobile ? 'truncate' : ''}`}
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 600,
                    }}
                  >
                    CZ
                  </span>
                  <Star className={`${isMobile ? 'w-2.5 h-2.5' : 'w-3 h-3'} text-[#F3BA2F] fill-[#F3BA2F] flex-shrink-0`} />
                </div>
                <div
                  className={`text-[#F3BA2F]/60 text-xs ${isMobile ? 'truncate' : ''}`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  @cz_binance
                </div>
              </div>
            </div>
            
            <TypingUntypingText
              texts={[
                "Hold is never easy.",
                "The inability to hold often comes from a lack of understanding of tech, finance, and the world."
              ]}
              delay={1400}
              typingSpeed={20}
              pauseDuration={5000}
              loop={true}
              className="text-white/80 relative z-10"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: isMobile ? '0.65rem' : '0.85rem',
                lineHeight: '1.5',
              }}
            />
          </div>
        </motion.div>
        
        {/* Quote card - TOP LEFT - Saylor */}
        {!isMobile && (
          <motion.div
            className="absolute z-20"
            style={{
              left: '-400px',
              top: '-300px',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div
              className="relative p-4 rounded-lg backdrop-blur-md"
              style={{
                width: '260px',
                background: 'rgba(20, 20, 20, 0.9)',
                border: '1px solid rgba(243, 186, 47, 0.4)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.6), 0 0 40px rgba(243, 186, 47, 0.2)',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1/2 rounded-t-lg pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(243, 186, 47, 0.15), transparent)',
                }}
              />
              
              <div className="flex items-center gap-2 mb-3 relative z-10">
                <motion.div
                  className="w-10 h-10 rounded-full overflow-hidden border border-[#F3BA2F]/40 flex-shrink-0"
                  style={{
                    boxShadow: '0 0 10px rgba(243, 186, 47, 0.3)',
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  <img
                    src="/images/saylor.png"
                    alt="saylor"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="text-white text-sm"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      saylor
                    </span>
                    <Star className="w-3 h-3 text-[#F3BA2F] fill-[#F3BA2F]" />
                  </div>
                  <div
                    className="text-[#F3BA2F]/60 text-xs"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    @saylor
                  </div>
                </div>
              </div>
              
              <TypingUntypingText
                texts={[
                  "If you wouldn't hold it for 10 years, you probably shouldn't hold it for 10 minutes.",
                  "Some weeks you just need to HODL"
                ]}
                delay={1900}
                typingSpeed={25}
                pauseDuration={5000}
                loop={true}
                className="text-white/80 relative z-10 text-left"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  lineHeight: '1.5',
                }}
              />
            </div>
          </motion.div>
        )}
        
        {/* Quote card - TOP RIGHT - Kraken & Churchill */}
        {!isMobile && (
          <motion.div
            className="absolute z-20"
            style={{
              right: '-400px',
              top: '-300px',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <DualProfileCard
              profiles={[
                {
                  name: 'Kraken',
                  handle: '@krakenfx',
                  image: 'https://images.unsplash.com/photo-1642131449810-4960a9de20ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFrZW4lMjBjcnlwdG9jdXJyZW5jeSUyMGV4Y2hhbmdlJTIwbG9nb3xlbnwxfHx8fDE3NjEyNDU1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                  quote: 'Hodl: verb (used with cryptocurrency), hodl·ing. Holding cryptocurrencies; refusing to sell; remaining unaffected by swings in price.',
                },
                {
                  name: 'Winston Churchill',
                  handle: '',
                  image: 'https://images.unsplash.com/photo-1580129924966-500fd7a21267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXaW5zdG9uJTIwQ2h1cmNoaWxsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxMjQ1NTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                  quote: 'Success is not final, failure is not fatal: It is the courage to HODL that counts.',
                },
              ]}
              width="240px"
              position={{}}
              animationDelay={0}
              textAlign="right"
              typingSpeed={23}
              pauseDuration={5000}
            />
          </motion.div>
        )}
        
        {/* Quote card - BOTTOM LEFT - Binance & CZ */}
        {!isMobile && (
          <motion.div
            className="absolute z-20"
            style={{
              left: '-400px',
              bottom: '-300px',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            <DualProfileCard
              profiles={[
                {
                  name: 'Binance',
                  handle: '@binance',
                  image: '/images/binance_logo.png',
                  quote: "If you can't HODL, you can't be RICH",
                },
                {
                  name: 'CZ',
                  handle: '@cz_binance',
                  image: '/images/cz_orbital.png',
                  quote: 'The inability to hold often comes from a lack of understanding of tech, finance, and the world.',
                },
              ]}
              width="240px"
              position={{}}
              animationDelay={0}
              textAlign="left"
              typingSpeed={22}
              pauseDuration={5000}
            />
          </motion.div>
        )}
        
        {/* Quote card - BOTTOM RIGHT - Vitalik Buterin */}
        {!isMobile && (
          <motion.div
            className="absolute z-20"
            style={{
              right: '-400px',
              bottom: '-300px',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <DualProfileCard
              profiles={[
                {
                  name: 'Vitalik Buterin',
                  handle: '@VitalikButerin',
                  image: '/images/vitalik.png',
                  quote: 'You can even hold the coin privately, and show that you are holding it to whoever you need to show; you do not need any zero knowledge proofs, you just send a test transaction.',
                },
                {
                  name: 'vitalik',
                  handle: '@vitalik',
                  image: '/images/vitalik.png',
                  quote: "'HODL' is good advice if meaning is 'don't day trade.'",
                },
              ]}
              width="240px"
              position={{}}
              animationDelay={0}
              textAlign="right"
              typingSpeed={24}
              pauseDuration={5000}
            />
          </motion.div>
        )}
        
        {/* Center glow - stationary */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(243, 186, 47, 0.3) 0%, rgba(243, 186, 47, 0.1) 40%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Central HOLD text - stationary (not rotating with orbit) */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1
            className="text-[#F3BA2F]"
            style={{
              fontSize: isMobile ? '2.5rem' : '4rem',
              fontWeight: 900,
              letterSpacing: '0.1em',
              textShadow: '0 0 60px rgba(243, 186, 47, 0.8), 0 0 100px rgba(243, 186, 47, 0.5), 0 0 140px rgba(243, 186, 47, 0.3)',
              fontFamily: 'Poppins, sans-serif',
            }}
            animate={{
              textShadow: [
                '0 0 60px rgba(243, 186, 47, 0.8), 0 0 100px rgba(243, 186, 47, 0.5), 0 0 140px rgba(243, 186, 47, 0.3)',
                '0 0 80px rgba(243, 186, 47, 1), 0 0 120px rgba(243, 186, 47, 0.7), 0 0 160px rgba(243, 186, 47, 0.4)',
                '0 0 60px rgba(243, 186, 47, 0.8), 0 0 100px rgba(243, 186, 47, 0.5), 0 0 140px rgba(243, 186, 47, 0.3)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            HOLD
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}