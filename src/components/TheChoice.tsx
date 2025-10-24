import { motion } from 'motion/react';
import { useState } from 'react';

export function TheChoice() {
  const [selectedPill, setSelectedPill] = useState<'blue' | 'red' | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  const handlePillClick = (pill: 'blue' | 'red') => {
    setSelectedPill(pill);
    setShowMessage(true);
    
    // Reset after animation
    setTimeout(() => {
      setShowMessage(false);
      setSelectedPill(null);
    }, 3000);
  };

  return (
    <section className="relative min-h-screen py-16 md:py-32 px-4 overflow-hidden bg-black">
      {/* Matrix background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(243, 186, 47, 0.05) 40px, rgba(243, 186, 47, 0.05) 41px),
              repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(243, 186, 47, 0.05) 40px, rgba(243, 186, 47, 0.05) 41px)
            `,
          }}
        />
      </div>

      {/* Radial glow */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(243, 186, 47, 0.2) 0%, transparent 70%)',
          filter: 'blur(120px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-white mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              letterSpacing: '0.15em',
              textShadow: '0 0 40px rgba(243, 186, 47, 0.6)',
            }}
          >
            THE CHOICE
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 max-w-3xl mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1rem, 2.4vw, 1.2rem)',
              lineHeight: '1.8',
            }}
          >
            This is your last chance. After this, there is no turning back.
          </motion.p>
        </motion.div>

        {/* CZ Image with Pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-20"
        >
          <div className="relative max-w-2xl">
            <img 
              src="/images/cz_orbital.png" 
              alt="CZ offering the choice"
              className="w-full h-auto rounded-lg"
              style={{
                boxShadow: '0 0 60px rgba(243, 186, 47, 0.4), 0 0 100px rgba(243, 186, 47, 0.2)',
                border: '2px solid rgba(243, 186, 47, 0.3)',
              }}
            />
            
            {/* Glow effect around image */}
            <div
              className="absolute inset-0 rounded-lg pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(243, 186, 47, 0.1), transparent)',
              }}
            />
          </div>
        </motion.div>

        {/* Pills Buttons */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          {/* Red Pill - ACCEPT HOLD (moved to left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-full"
          >
            <motion.button
              onClick={() => handlePillClick('red')}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full h-full p-8 rounded-lg relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.2), rgba(185, 28, 28, 0.1))',
                border: '2px solid rgba(220, 38, 38, 0.6)',
                boxShadow: '0 8px 32px rgba(220, 38, 38, 0.4), 0 0 60px rgba(243, 186, 47, 0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Glass effect */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent)',
                }}
              />

              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at center, rgba(243, 186, 47, 0.3), transparent)',
                }}
              />

              <div className="relative z-10">
                {/* Pill Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-16 h-8 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #DC2626, #EF4444)',
                      boxShadow: '0 4px 20px rgba(220, 38, 38, 0.6), 0 0 30px rgba(243, 186, 47, 0.3)',
                    }}
                  />
                </div>

                <h3
                  className="text-white mb-6"
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '1.8rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  🔴 ACCEPT HOLD
                </h3>

                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-[#F3BA2F] text-xl">—</span>
                    <span className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Faith.
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#F3BA2F] text-xl">—</span>
                    <span className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Time.
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#F3BA2F] text-xl">—</span>
                    <span className="text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Freedom.
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          </motion.div>

          {/* Blue Pill - RETURN TO NORMAL LIFE (moved to right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-full"
          >
            <motion.button
              onClick={() => handlePillClick('blue')}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full h-full p-8 rounded-lg relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 197, 253, 0.2))',
                border: '2px solid rgba(59, 130, 246, 0.5)',
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
              }}
            >
              {/* Gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(243, 186, 47, 0.1), rgba(59, 130, 246, 0.2))',
                }}
              />

              <div className="relative z-10">
                {/* Pill Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-16 h-8 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
                      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.5)',
                    }}
                  />
                </div>

                <h3
                  className="text-white mb-6"
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '1.8rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  🔵 RETURN TO NORMAL LIFE
                </h3>

                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400 text-xl">—</span>
                    <span className="text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Mortgage.
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400 text-xl">—</span>
                    <span className="text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Hype tokens.
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-400 text-xl">—</span>
                    <span className="text-white/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Fear.
                    </span>
                  </div>
                </div>
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Message after selection */}
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center"
          >
            <div
              className="inline-block px-10 py-6 rounded-lg"
              style={{
                background: selectedPill === 'red' 
                  ? 'linear-gradient(135deg, rgba(243, 186, 47, 0.3), rgba(220, 38, 38, 0.2))'
                  : 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(147, 197, 253, 0.2))',
                border: selectedPill === 'red'
                  ? '2px solid rgba(243, 186, 47, 0.6)'
                  : '2px solid rgba(59, 130, 246, 0.6)',
                boxShadow: selectedPill === 'red'
                  ? '0 0 40px rgba(243, 186, 47, 0.4)'
                  : '0 0 40px rgba(59, 130, 246, 0.4)',
              }}
            >
              <p
                className="text-white"
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '1.5rem',
                  letterSpacing: '0.1em',
                }}
              >
                {selectedPill === 'red' 
                  ? '✨ WELCOME TO THE AWAKENING ✨'
                  : '💤 PERHAPS ANOTHER TIME... 💤'
                }
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}