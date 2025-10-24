import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export function CursorParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only add particle occasionally to avoid too many
      if (Math.random() > 0.7) {
        const newParticle: Particle = {
          id: nextIdRef.current,
          x: e.clientX,
          y: e.clientY,
        };
        
        setParticles((prev) => [...prev.slice(-10), newParticle]);
        nextIdRef.current += 1;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-[#F3BA2F]"
          style={{
            left: particle.x,
            top: particle.y,
            filter: 'blur(1px)',
          }}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
            y: -30,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}
          onAnimationComplete={() => {
            setParticles((prev) => prev.filter((p) => p.id !== particle.id));
          }}
        />
      ))}
    </div>
  );
}
