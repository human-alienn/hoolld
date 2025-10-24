import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Twitter, Globe, Heart } from 'lucide-react';

function NetworkVisualization() {
  const [nodes] = useState(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 60,
    }))
  );
  
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">
      <svg className="w-full h-full">
        {/* Connections */}
        {nodes.map((node, i) => {
          const nextNode = nodes[(i + 1) % nodes.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode.x}%`}
              y2={`${nextNode.y}%`}
              stroke="#F3BA2F"
              strokeWidth="1"
              strokeOpacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.1 }}
            />
          );
        })}
        
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g key={`node-${i}`}>
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="8"
              fill="#F3BA2F"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            />
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="8"
              fill="none"
              stroke="#F3BA2F"
              strokeWidth="2"
              animate={{
                r: [8, 16, 8],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

export function TheCommunity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const [showEndTransition, setShowEndTransition] = useState(false);
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.9) {
        setShowEndTransition(true);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  return (
    <div ref={containerRef} id="community" className="relative min-h-screen overflow-hidden">
      {/* Gradient background with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #F3BA2F 0%, #FFD966 30%, #FFF8E6 60%, #FFFFFF 100%)',
          y: backgroundY,
        }}
      />
      
      {/* Floating particles morphing to confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() > 0.5 ? '4px' : '6px',
              height: Math.random() > 0.5 ? '4px' : '6px',
              background: i % 3 === 0 ? '#F3BA2F' : i % 3 === 1 ? '#00FFC2' : '#FFD966',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
        style={{ opacity }}
      >
        {/* Hero section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Heart className="w-8 h-8 text-[#F3BA2F]" fill="#F3BA2F" />
            <h2 
              className="text-5xl md:text-6xl"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 800,
                color: '#000',
                textShadow: '0 0 40px rgba(243,186,47,0.4)',
              }}
            >
              THE HOLD COMMUNITY
            </h2>
            <Heart className="w-8 h-8 text-[#F3BA2F]" fill="#F3BA2F" />
          </motion.div>
          
          <motion.p
            className="text-2xl mb-4"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              color: '#F3BA2F',
            }}
          >
            The Heartbeat of BNB
          </motion.p>
          
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#333',
            }}
          >
            While others flip for profit, we create value.
          </p>
        </motion.div>
        
        {/* The Network Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-center mb-12">
            <motion.h3
              className="text-4xl mb-4"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                color: '#000',
              }}
            >
              The Network
            </motion.h3>
          </div>
          
          <NetworkVisualization />
          
          <motion.div
            className="text-center mt-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p 
              className="text-2xl italic leading-relaxed"
              style={{ 
                fontFamily: 'Cinzel, serif',
                color: '#000',
              }}
            >
              "We are the network.<br />
              Every message, every meme, every build — strengthens the chain."
            </p>
          </motion.div>
        </motion.div>
        
        {/* Join the Movement CTA */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-24"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h3
            className="text-4xl mb-6"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              color: '#000',
            }}
          >
            Join the Movement
          </motion.h3>
          
          <motion.p
            className="text-2xl mb-12 italic leading-relaxed"
            style={{ 
              fontFamily: 'Cinzel, serif',
              color: '#333',
            }}
          >
            "You've seen the vision. You've read the code. You've walked the path.<br />
            Now, it's time to join the movement."
          </motion.p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 justify-center">
            <motion.a
              href="https://t.me/holdcommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 rounded-full overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #F3BA2F, #FFD966)',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2 text-white">
                <MessageCircle className="w-5 h-5" />
                Join the Telegram
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Sparkles on hover */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-white"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{
                    scale: 1,
                    opacity: [0, 1, 0],
                    x: Math.cos((i / 8) * Math.PI * 2) * 40,
                    y: Math.sin((i / 8) * Math.PI * 2) * 40,
                  }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                />
              ))}
            </motion.a>
            
            <motion.a
              href="https://x.com/HOLDonBNB"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-10 py-5 rounded-full border-2 border-[#00FFC2]"
              style={{
                background: 'rgba(0,255,194,0.1)',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#000',
              }}
              whileHover={{ scale: 1.05, background: 'rgba(0,255,194,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Twitter className="w-5 h-5" />
                Follow on X
              </span>
            </motion.a>
            
            <motion.a
              href="https://holdcz.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-10 py-5 rounded-full border-2 border-[#F3BA2F]"
              style={{
                background: 'rgba(243,186,47,0.1)',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#000',
              }}
              whileHover={{ scale: 1.05, background: 'rgba(243,186,47,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Explore the Ecosystem
              </span>
            </motion.a>
          </div>
        </motion.div>
        
        {/* Ending Cinematic Transition */}
        <AnimatePresence>
          {showEndTransition && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-32 h-32 mx-auto mb-8"
                  style={{
                    background: 'radial-gradient(circle, #F3BA2F, #FFD966)',
                    borderRadius: '50%',
                    boxShadow: '0 0 60px rgba(243,186,47,0.8)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                <motion.div
                  className="text-3xl italic max-w-lg mx-auto"
                  style={{ 
                    fontFamily: 'Cinzel, serif',
                    color: '#000',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 2 }}
                >
                  <p className="mb-4">"HOLD is not an idea.</p>
                  <p className="mb-4">It's an inheritance.</p>
                  <p className="text-[#F3BA2F]">Pass it on."</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Footer */}
      <motion.footer
        className="relative z-20 py-8 text-center"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.05))',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#666' }}>
          © 2025 HOLD. Built on BNB.
        </p>
      </motion.footer>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}