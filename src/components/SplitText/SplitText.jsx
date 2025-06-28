import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap-trial/SplitText"; // Use gsap-trial

gsap.registerPlugin(GSAPSplitText);

const SplitText = ({ text, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    const split = new GSAPSplitText(el, { type: "chars" });

    gsap.fromTo(
      split.chars,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        duration: 0.6,
        stagger: 0.05,
      }
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h2 ref={textRef} className={`inline-block overflow-hidden ${className}`}>
      {text}
    </h2>
  );
};

export default SplitText;
