import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypingUntypingTextProps {
  texts: string[];
  delay?: number;
  typingSpeed?: number;
  pauseDuration?: number; // Duration to pause before untyping
  className?: string;
  style?: React.CSSProperties;
  loop?: boolean;
}

export function TypingUntypingText({ 
  texts,
  delay = 0,
  typingSpeed = 30,
  pauseDuration = 5000,
  className = '',
  style = {},
  loop = true
}: TypingUntypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true); // true = typing, false = untyping
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  const currentText = texts[currentTextIndex];

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (isTyping) {
      // Typing phase
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before untyping
        const pauseTimeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
        return () => clearTimeout(pauseTimeout);
      }
    } else {
      // Untyping phase
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, typingSpeed / 2); // Untype faster
        return () => clearTimeout(timeout);
      } else {
        // Finished untyping, move to next text
        const nextIndex = (currentTextIndex + 1) % texts.length;
        
        if (!loop && nextIndex === 0) {
          setShowCursor(false);
          return;
        }
        
        setTimeout(() => {
          setCurrentTextIndex(nextIndex);
          setIsTyping(true);
        }, 500);
      }
    }
  }, [displayedText, currentText, isTyping, hasStarted, typingSpeed, pauseDuration, currentTextIndex, texts.length, loop]);

  return (
    <span className={className} style={style}>
      {displayedText}
      {showCursor && (
        <motion.span
          className="inline-block ml-0.5"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}
