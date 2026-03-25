"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmileLogo from "../ui/SmileLogo";

gsap.registerPlugin(ScrollTrigger);

export function HeroTopText() {
  const { scrollYProgress } = useScroll();
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const text = "SERIOUS.BUSINESS";
  
  return (
    <motion.div style={{ opacity: textOpacity }} className="w-full flex justify-center bg-primary pt-8 pb-4 overflow-hidden pointer-events-none select-none">
      <motion.h1 
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05, delayChildren: 2.5 } }
        }}
        className="text-[12vw] md:text-[9vw] lg:text-[8.5vw] font-black tracking-tighter text-[#1a1a1a] leading-[0.7] whitespace-nowrap flex overflow-hidden" 
        style={{ fontFamily: "var(--font-geist-sans)", letterSpacing: "-0.04em" }}
      >
        {text.split("").map((char, i) => (
          <motion.span 
            key={i}
            variants={{
              hidden: { y: 80, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 45, damping: 25, mass: 1.2 };

  // 🎯 VIDEO EXPANDING PHYSICS (Corner to Viewport)
  const width = useTransform(scrollYProgress, [0, 0.35], ["min(180px, 35vw)", "80vw"]);
  const smoothWidth = useSpring(width, springConfig);

  const height = useTransform(scrollYProgress, [0, 0.35], ["min(100px, 20vw)", "60vh"]);
  const smoothHeight = useSpring(height, springConfig);

  const top = useTransform(scrollYProgress, [0, 0.35], ["calc(100vh - 160px)", "15vh"]);
  const smoothTop = useSpring(top, springConfig);

  // Fade out center text shortly after scroll begins
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(orbRef.current, {
        y: "30vh", // move down as we scroll down (speed difference)
        ease: "none",
        scrollTrigger: {
          trigger: orbRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-[120vh] bg-primary overflow-hidden" data-component="reel">
      
      {/* Center Text exactly aligned with the new Sticky Navbar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.3, duration: 0.8, ease: "easeOut" }}
        style={{ opacity: textOpacity }}
        className="absolute top-2 left-0 w-full flex flex-col items-center z-20 pointer-events-none"
      >
        <h2 className="text-[20px] md:text-[24px] lg:text-[28px] leading-[1.1] font-playfair text-[#1a1a1a] text-center tracking-tight">
          Premium Branding Agency <br/>
          for B2B Tech Scaleups
        </h2>
      </motion.div>

      {/* Background 3D Smile Logo */}
      <motion.div 
        ref={orbRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3.6, duration: 1.2, type: "spring", bounce: 0.4 }}
        style={{ opacity: textOpacity }}
        className="absolute top-[5vh] md:top-[2vh] left-0 w-full flex justify-center z-10 pointer-events-none opacity-50 mix-blend-multiply"
      >
        <div className="w-[60vw] max-w-[600px] aspect-square">
          <SmileLogo />
        </div>
      </motion.div>

      {/* Blue Video Frame (Expanding) */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.8, ease: "easeOut" }}
        style={{ width: smoothWidth, height: smoothHeight, top: smoothTop }}
        className="absolute left-6 z-40 rounded-xl overflow-hidden bg-[#0A0AFF] shadow-2xl"
      >
        <video autoPlay muted loop playsInline className="w-full h-full object-cover mix-blend-overlay opacity-50">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none" />
      </motion.div>
      
    </section>
  );
}