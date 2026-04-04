import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const COLORS = ["#1a1a1a", "#fac541", "#cba6f7", "#f9c4d2"];
const SLIDE = 0.55;   // seconds each panel takes to slide
const STAGGER = 0.08; // seconds between each panel
const ALL_IN = SLIDE + (COLORS.length - 1) * STAGGER; // ~0.79s for all panels in

export default function Loader() {
  const [phase, setPhase] = useState("in"); // "in" → "out" → "done"

  useEffect(() => {
    const outAt   = (ALL_IN + 0.7) * 1000;              // hold 700ms after all panels in
    const doneAt  = (ALL_IN + 0.7 + ALL_IN + 0.3) * 1000; // after panels exit + buffer
    const t1 = setTimeout(() => setPhase("out"),  outAt);
    const t2 = setTimeout(() => setPhase("done"), doneAt);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden">
      {/* Colored panels */}
      {COLORS.map((color, i) => (
        <motion.div
          key={color}
          className="absolute inset-0"
          style={{ backgroundColor: color, zIndex: i }}
          initial={{ y: "100%" }}
          animate={phase === "out" ? { y: "-100%" } : { y: "0%" }}
          transition={{
            duration: SLIDE,
            // enter: top panel first; exit: reverse (top panel last)
            delay: phase === "out"
              ? (COLORS.length - 1 - i) * STAGGER
              : i * STAGGER,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      ))}

      {/* Logo — appears after all panels are in, fades out when exiting */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: COLORS.length }}
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "out" ? 0 : 1 }}
        transition={{
          duration: 0.4,
          delay: phase === "in" ? ALL_IN : 0,
        }}
      >
        <img
          src="/footerLogoBlack.png"
          alt="Marshall Haber Creative Group"
          style={{ height: "clamp(40px, 8vw, 100px)", width: "auto" }}
        />
      </motion.div>
    </div>
  );
}
