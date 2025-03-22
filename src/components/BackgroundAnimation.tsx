
import React, { useEffect, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const BackgroundAnimation: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    // Generate initial particles
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 30), 40); // Responsive particle count
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
      
      setParticles(newParticles);
    };
    
    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation frame for moving particles
    let animationFrameId: number;
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Move particle and handle boundaries
          let x = particle.x + particle.speedX;
          let y = particle.y + particle.speedY;
          
          // Wrap around screen edges
          if (x < 0) x = window.innerWidth;
          if (x > window.innerWidth) x = 0;
          if (y < 0) y = window.innerHeight;
          if (y > window.innerHeight) y = 0;
          
          return {
            ...particle,
            x,
            y
          };
        })
      );
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity,
            transition: 'opacity 0.2s ease',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
