"use client";

import { motion, AnimatePresence } from "framer-motion";

const links = ["Work", "About", "Services", "Insights"];

export default function MenuOverlay({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
          className="fixed inset-0 bg-white z-[200] flex flex-col text-[#1a1a1a]"
        >
          {/* Top bar — mirrors navbar */}
          <div className="w-full flex items-center justify-between px-4 py-4 md:px-8 md:py-6 shrink-0">
            <span
              className="font-black tracking-tighter text-base"
              style={{ fontFamily: "var(--font-geist-sans)", letterSpacing: "-0.03em" }}
            >
              SERIOUS.BUSINESS
            </span>
            <div className="flex items-center gap-1.5">
              <div className="px-3 py-2 rounded-full bg-primary text-[#1a1a1a] font-bold text-xs">
                Let's work
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-primary flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 flex flex-col justify-between px-6 md:px-12 pt-6 pb-10 overflow-hidden">
            {/* Nav links */}
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
              }}
              className="flex flex-col gap-1"
            >
              {links.map((link, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } }
                  }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={onClose}
                    className="text-[13vw] md:text-[7vw] font-black tracking-tighter leading-[1] block hover:opacity-50 transition-opacity"
                    style={{ fontFamily: "var(--font-geist-sans)" }}
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {/* Contact section */}
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">Say Hello</p>
                <a href="mailto:hello@serious.business" className="text-lg font-medium border-b border-[#1a1a1a] pb-1 inline-block hover:opacity-60 transition-opacity">
                  hello@serious.business
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-60">Exceptional talent?</p>
                <a href="mailto:apply@serious.business" className="text-lg font-medium border-b border-[#1a1a1a] pb-1 inline-block hover:opacity-60 transition-opacity">
                  apply@serious.business
                </a>
              </div>
              <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest opacity-60 mt-2">
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
