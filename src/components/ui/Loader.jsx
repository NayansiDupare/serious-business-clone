
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null; // Unmount after it finishes to free up DOM

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 2.2 }}
      onAnimationComplete={() => setIsLoading(false)}
      className="fixed inset-0 z-[99999] bg-primary flex items-center justify-center pointer-events-none"
    >
      <div className="flex items-center gap-3 md:gap-6 overflow-hidden text-[#1a1a1a]">
        <motion.span 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
          className="text-[8vw] md:text-[6vw] font-black font-playfair tracking-tight"
        >
          SERIOUS
        </motion.span>
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut", delay: 0.6 }}
        >
          <svg className="w-[8vw] h-[8vw] md:w-[6vw] md:h-[6vw]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#1a1a1a" strokeWidth="8"/>
            <circle cx="35" cy="40" r="6" fill="#1a1a1a"/>
            <circle cx="65" cy="40" r="6" fill="#1a1a1a"/>
            <path d="M30 60 Q50 80 70 60" stroke="#1a1a1a" strokeWidth="8" strokeLinecap="round"/>
          </svg>
        </motion.div>

        <motion.span 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
          className="text-[8vw] md:text-[6vw] font-black tracking-tighter"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          BUSINESS
        </motion.span>
      </div>
    </motion.div>
  );
}
