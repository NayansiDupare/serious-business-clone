"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ThemeTransition({ children }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#ff8cc2", "#1a1a1a", "#1a1a1a", "#ff8cc2"]
  );

  const color = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#1a1a1a", "#ff8cc2", "#ff8cc2", "#1a1a1a"]
  );

  return (
    <motion.div 
      ref={containerRef} 
      style={{ backgroundColor, color }} 
      className="w-full relative z-[50] transition-colors duration-200"
    >
      {children}
    </motion.div>
  );
}
