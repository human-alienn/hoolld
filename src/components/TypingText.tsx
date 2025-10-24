import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface TypingTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  onComplete?: () => void;
}

export function TypingText({ 
  text, 
  delay = 0, 
  speed = 30, 
  className = '', 
  style = {},
  onComplete 
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || !hasStarted) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      onComplete?.();
    }
  }, [displayedText, text, isTyping, hasStarted, speed, onComplete]);

  return (
    <span className={className} style={style}>
      {displayedText}
      {isTyping && (
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
