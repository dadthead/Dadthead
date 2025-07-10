import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Particles = () => {
  const particleRefs = useRef([]);

  useEffect(() => {
    particleRefs.current.forEach((particle, i) => {
      if (particle) {
        // Animate each particle
        gsap.to(particle, {
          x: Math.random() * 40 - 20, // move left-right
          y: Math.random() * 40 - 20, // move up-down
          duration: 4 + Math.random() * 2, // smooth duration
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 8.03,
        });
      }
    });
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {Array.from({ length: 20 }).map((_, i) => {
        const size = Math.floor(Math.random() * 4) + 3; // 3px to 6px
        return (
          <div
            key={i}
            ref={(el) => (particleRefs.current[i] = el)}
            style={{
              position: 'absolute',
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: '#fbbf24',
              borderRadius: '50%',
              opacity: 0.8,
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </div>
  );
};

export default Particles;
