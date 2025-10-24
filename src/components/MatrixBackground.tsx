import { useEffect, useRef } from 'react';

interface Symbol {
  x: number;
  y: number;
  char: string;
  speed: number;
  opacity: number;
}

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = ['1', '0', 'B', 'N', 'H', 'O', 'L', 'D'];
    const symbols: Symbol[] = [];
    const symbolCount = 80;

    // Initialize symbols
    for (let i = 0; i < symbolCount; i++) {
      symbols.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: chars[Math.floor(Math.random() * chars.length)],
        speed: 0.3 + Math.random() * 0.5,
        opacity: 0.1 + Math.random() * 0.3,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      symbols.forEach((symbol) => {
        ctx.font = '20px monospace';
        ctx.fillStyle = `rgba(243, 186, 47, ${symbol.opacity})`;
        ctx.fillText(symbol.char, symbol.x, symbol.y);

        symbol.y += symbol.speed;

        if (symbol.y > canvas.height) {
          symbol.y = -20;
          symbol.x = Math.random() * canvas.width;
          symbol.char = chars[Math.floor(Math.random() * chars.length)];
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)' }}
    />
  );
}
