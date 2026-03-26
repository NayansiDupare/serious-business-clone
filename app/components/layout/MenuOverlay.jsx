"use client";

import { motion, AnimatePresence } from "framer-motion";

const links = ["Work", "Services", "About", "Insights", "Contact"];

export default function MenuOverlay({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="fixed inset-0 bg-[#1a1a1a] z-[200] flex flex-col items-center justify-center text-white"
        >
          {/* Close button */}
          <div className="absolute top-6 right-6 md:right-12">
            <button 
              onClick={onClose}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              ✕
            </button>
          </div>

          <motion.ul
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="flex flex-col items-center gap-6 md:gap-8 overflow-hidden"
          >
            {links.map((link, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }
                }}
              >
                <a 
                  href={`#${link.toLowerCase()}`} 
                  onClick={onClose}
                  className="text-[2.5rem] md:text-[6vw] font-black tracking-tighter hover-underline cursor-none" 
                  style={{ fontFamily: "var(--font-geist-sans)" }}
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
