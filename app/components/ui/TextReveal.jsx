"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TextReveal({ text }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll(".word");

    if (!words) return;

    gsap.fromTo(
      words,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.06,
        duration: 0.8,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="flex flex-wrap overflow-hidden">
      {text.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden mr-3">
          <span className="word inline-block">{word}</span>
        </span>
      ))}
    </div>
  );
}