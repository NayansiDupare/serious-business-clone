"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({
  value,
  duration = 1.5,
  suffix = ""
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    }, { threshold: 0.1 });

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const startTimeElement = performance.now();

    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTimeElement;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // easeOut cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentVal = Math.floor(easeOut * end);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}
