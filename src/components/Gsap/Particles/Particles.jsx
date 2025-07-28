import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Particles = () => {
  const particleRefs = useRef([]);

  useEffect(() => {
    particleRefs.current.forEach((particle, i) => {
      if (particle) {
        gsap.to(particle, {
          x: Math.random() * 60 - 30, // move further left-right
          y: Math.random() * 60 - 30, // move further up-down
          duration: 2 + Math.random() * 1, // faster: 2 to 3 seconds
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 4, // can adjust to stagger start times
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
