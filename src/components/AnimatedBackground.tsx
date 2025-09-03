import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Initialize particles
    const initParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.6 + 0.2,
    }));
    setParticles(initParticles);

    // Handle scroll
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Animate particles
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + window.innerWidth) % window.innerWidth,
        y: (particle.y + particle.speedY + window.innerHeight) % window.innerHeight,
      })));
    }, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const backgroundTransform = `translateY(${scrollY * 0.3}px)`;
  const gradientOpacity = Math.max(0.3, 1 - scrollY / 1000);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient background */}
      <div 
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: `linear-gradient(45deg, 
            hsl(240, 10%, 3.9%), 
            hsl(260, 15%, 8%), 
            hsl(280, 20%, 12%), 
            hsl(240, 10%, 3.9%)
          )`,
          backgroundSize: '400% 400%',
          opacity: gradientOpacity,
          transform: backgroundTransform,
        }}
      />
      
      {/* Scrolling gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            ${135 + scrollY * 0.1}deg, 
            hsl(263, 70%, 50%, ${0.1 + scrollY * 0.0001}), 
            hsl(190, 80%, 50%, ${0.05 + scrollY * 0.00005})
          )`,
          transform: `translateY(${scrollY * -0.5}px)`,
        }}
      />

      {/* Floating particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-accent/30 animate-float"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity * (1 - scrollY * 0.001),
            transform: `translateY(${scrollY * -0.2}px)`,
            animationDelay: `${particle.id * 0.2}s`,
            boxShadow: '0 0 10px hsl(var(--accent) / 0.3)',
          }}
        />
      ))}

      {/* Geometric shapes */}
      <div 
        className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/20 rotate-45 animate-float"
        style={{
          transform: `rotate(${45 + scrollY * 0.1}deg) translateY(${scrollY * -0.3}px)`,
          animationDelay: '1s',
        }}
      />
      <div 
        className="absolute bottom-1/3 left-1/5 w-24 h-24 border border-accent/20 rounded-full animate-glow"
        style={{
          transform: `translateY(${scrollY * -0.4}px)`,
          animationDelay: '2s',
        }}
      />
    </div>
  );
};