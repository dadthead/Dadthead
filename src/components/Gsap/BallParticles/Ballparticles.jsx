import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BallParticles = ({ triggerRef }) => {
  const circleRef = useRef(null);
  const particleRefs = useRef([]);

  useEffect(() => {
    // Initial animation
    gsap.fromTo(
      circleRef.current,
      { x: 800, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2.5,
        ease: 'power4.out',
      }
    );

    // Scroll animation only within hero section
    gsap.fromTo(
      circleRef.current,
      { opacity: 1 },
      {
        opacity: 0.3,
        scrollTrigger: {
          trigger: triggerRef.current, // ✅ use hero section
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // Animate floating particles
    particleRefs.current.forEach((particle, i) => {
      if (particle) {
        gsap.to(particle, {
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2,
        });
      }
    });
  }, [triggerRef]);

  return (
    <>
      <div
        ref={circleRef}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '250px',
          height: '250px',
          backgroundColor: 'rgb(213, 129, 19)',
          borderBottomLeftRadius: '250px',
          zIndex: 10,
        }}
      />
      {Array.from({ length: 14 }).map((_, i) => {
        const size = Math.floor(Math.random() * 12) + 8;
        return (
          <div
            key={i}
            ref={(el) => (particleRefs.current[i] = el)}
            style={{
              position: 'absolute',
              top: `${Math.random() * 90 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: '#fbbf24',
              borderRadius: '50%',
              opacity: 0.8,
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />
        );
      })}
    </>
  );
};

export default BallParticles;
