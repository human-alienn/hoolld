import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

interface Profile {
  name: string;
  handle: string;
  image: string;
  quote: string;
}

interface DualProfileCardProps {
  profiles: [Profile, Profile];
  width?: string;
  delay?: number;
  pauseDuration?: number;
  typingSpeed?: number;
  position?: {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
  animationDelay?: number;
  textAlign?: 'left' | 'right' | 'center';
}

export function DualProfileCard({
  profiles,
  width = '240px',
  delay = 800,
  pauseDuration = 6000,
  typingSpeed = 25,
  position = {},
  animationDelay = 0.5,
  textAlign = 'left',
}: DualProfileCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentProfile = profiles[currentIndex];
  const isSmall = width === '70px';

  useEffect(() => {
    const quote = currentProfile.quote;
    
    if (isTyping) {
      if (displayedText.length < quote.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(quote.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setIsDeleting(true);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    }

    if (isDeleting) {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, typingSpeed / 2);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % profiles.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, isDeleting, currentProfile.quote, typingSpeed, pauseDuration, profiles.length]);

  const hasPosition = Object.keys(position).length > 0;

  return (
    <motion.div
      className={hasPosition ? "absolute z-20" : "relative"}
      style={{
        ...position,
        ...(position.top === '50%' && (position.left || position.right) && { transform: 'translateY(-50%)' }),
        ...(position.top && position.top !== '50%' && !position.left && !position.right && { transform: 'translateX(-50%)' }),
        ...(position.bottom && !position.left && !position.right && { transform: 'translateX(-50%)' }),
      }}
      initial={{ opacity: hasPosition ? 0 : 1, x: position.left ? -50 : position.right ? 50 : 0, y: position.top ? -50 : position.bottom ? 50 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: animationDelay }}
    >
      <div
        className={`relative rounded-lg backdrop-blur-md ${isSmall ? 'p-2' : 'p-4'}`}
        style={{
          width,
          background: 'rgba(20, 20, 20, 0.9)',
          border: '1px solid rgba(243, 186, 47, 0.4)',
          boxShadow: isSmall ? '0 2px 15px rgba(0, 0, 0, 0.6), 0 0 20px rgba(243, 186, 47, 0.2)' : '0 4px 30px rgba(0, 0, 0, 0.6), 0 0 40px rgba(243, 186, 47, 0.2)',
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-1/2 rounded-t-lg pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(243, 186, 47, 0.15), transparent)',
          }}
        />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`flex ${isSmall ? 'flex-col items-center gap-1 mb-1' : 'items-center gap-2 mb-3'} relative z-10`}
          >
            <div
              className={`${isSmall ? 'w-6 h-6' : 'w-10 h-10'} rounded-full overflow-hidden border border-[#F3BA2F]/40 flex-shrink-0`}
              style={{
                boxShadow: isSmall ? '0 0 8px rgba(243, 186, 47, 0.3)' : '0 0 10px rgba(243, 186, 47, 0.3)',
              }}
            >
              <img
                src={currentProfile.image}
                alt={currentProfile.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className={isSmall ? 'flex flex-col items-center' : 'flex-1'}>
              <div className={`flex items-center ${isSmall ? 'gap-0.5' : 'gap-1.5'}`}>
                <span
                  className="text-white"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: isSmall ? '0.5rem' : '0.875rem',
                  }}
                >
                  {currentProfile.name}
                </span>
                <Star className={`${isSmall ? 'w-2 h-2' : 'w-3 h-3'} text-[#F3BA2F] fill-[#F3BA2F]`} />
              </div>
              {currentProfile.handle && (
                <div
                  className="text-[#F3BA2F]/60"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: isSmall ? '0.4rem' : '0.75rem',
                  }}
                >
                  {currentProfile.handle}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div
          className={`text-white/80 relative z-10 ${isSmall ? '' : 'min-h-[60px]'}`}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: isSmall ? '0.45rem' : '0.85rem',
            lineHeight: isSmall ? '1.3' : '1.5',
            textAlign: isSmall ? 'center' : textAlign,
          }}
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className={`inline-block ${isSmall ? 'w-0.5 h-2' : 'w-0.5 h-4'} bg-[#F3BA2F] ml-0.5`}
          />
        </div>
      </div>
    </motion.div>
  );
}
