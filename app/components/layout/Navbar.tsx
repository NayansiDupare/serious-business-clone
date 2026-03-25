"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [showCenterLogo, setShowCenterLogo] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      // Show center logo when scrolled past the massive hero text (e.g., 300px)
      if (latest > 300) {
        setShowCenterLogo(true);
      } else {
        setShowCenterLogo(false);
      }

      // Hide navbar completely when reaching the footer
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const maxScroll = scrollHeight - clientHeight;
      // If within 600px of the absolute bottom, slide it out
      if (latest > maxScroll - 600) { 
         setHideNavbar(true);
      } else {
         setHideNavbar(false);
      }
    });
  }, [scrollY]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ y: hideNavbar ? -100 : 0, opacity: hideNavbar ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className="absolute left-0 right-0 top-0 flex items-center justify-between pointer-events-none"
    >

      {/* Left */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.4 }}
        className="px-5 py-2.5 rounded-full bg-white text-sm font-semibold shadow-sm pointer-events-auto hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 border border-transparent hover:border-[#1a1a1a]"
      >
        Let&apos;s work
      </motion.div>

      {/* Center Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showCenterLogo ? 1 : 0, scale: showCenterLogo ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-black tracking-tight pointer-events-auto mix-blend-difference text-white"
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        SERIOUS.BUSINESS
      </motion.div>

      {/* Right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8 }}
        className="flex items-center gap-3 pointer-events-auto cursor-none"
      >
        <div 
          onClick={() => setMenuOpen(true)}
          className="px-5 py-2.5 rounded-full bg-white text-sm font-semibold shadow-sm hover:scale-105 transition-transform"
        >
          Menu
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold shadow-sm hover:scale-105 transition-transform">
          ←
        </div>
      </motion.div>

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </motion.div>
  );
}