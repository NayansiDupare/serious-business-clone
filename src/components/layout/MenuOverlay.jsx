
import { motion, AnimatePresence } from "framer-motion";

const links = ["Work", "Services", "About", "Insights", "Contact"];

export default function MenuOverlay({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-[#000000] z-[90] flex flex-col items-center justify-center text-white origin-top"
        >
          <motion.ul
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 0.3
                }
              }
            }}
            className="flex flex-col items-center gap-4 md:gap-6 overflow-hidden"
          >
            {links.map((link, i) => (
              <li key={i} className="overflow-hidden py-1">
                <motion.div
                  variants={{
                    hidden: { y: "110%", opacity: 0 },
                    show: { 
                      y: 0, 
                      opacity: 1, 
                      transition: { 
                        duration: 0.8, 
                        ease: [0.33, 1, 0.68, 1] 
                      } 
                    }
                  }}
                >
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    onClick={onClose}
                    className="text-[3rem] md:text-[7vw] font-black tracking-tighter hover:italic transition-all duration-300 cursor-none inline-block leading-[0.9]" 
                    style={{ fontFamily: "var(--font-geist-sans)" }}
                  >
                    {link}
                  </a>
                </motion.div>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

