
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";

const cards = [
  {
    bg: "#fbc1d4",
    label: "The Heart of the Shift:",
    title: "Brand Messaging is the\nSoul of Rebranding",
    desc: "The Heart of the Shift: Brand Messaging is the Soul of Rebranding",
  },
  {
    bg: "#f5f0e3",
    label: "Research Is Our Love Language:",
    labelColor: "#e8849a",
    title: "The Art of\nGathering Insights",
    desc: "Research Is Our Love Language: The Art of Gathering Insights",
  },
  {
    bg: "#f5f0e3",
    label: "The Founders' Guide to Rebranding",
    titleLarge: "...is it time?",
    desc: "The Founders' Guide to Rebranding",
  },
];

export default function Insights() {
  return (
    <div className="w-full bg-[#1a1a1a] text-white">
      <div className="px-6 py-14 md:py-28 max-w-[1400px] mx-auto">

        {/* Header — heading only */}
        <div className="mb-8 md:mb-12 overflow-hidden">
          <Reveal>
            <h2
              className="font-black leading-[1.05] tracking-tight text-[#fbc1d4]"
              style={{
                fontFamily: "var(--font-geist-sans)",
                fontSize: "clamp(2rem, 8vw, 5rem)",
              }}
            >
              Latest insights for<br />scaleup teams
            </h2>
          </Reveal>
        </div>

        {/* Cards — show 2 cards at a time on mobile, 3-col grid on desktop */}
        <div className="-mx-6 md:mx-0 mb-8 md:mb-20">
          <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-6 overflow-x-auto md:overflow-visible px-6 md:px-0 snap-x snap-mandatory pb-3 md:pb-0 scrollbar-hide">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="min-w-[44vw] sm:min-w-[36vw] md:min-w-0 flex-shrink-0 md:flex-shrink snap-start flex flex-col gap-2 group cursor-pointer"
              >
                <div
                  className="w-full aspect-[3/4] text-[#1a1a1a] rounded-xl p-4 md:p-8 flex flex-col items-center justify-center text-center transition-transform duration-500 group-hover:scale-[0.98]"
                  style={{ backgroundColor: card.bg }}
                >
                  <p className="text-[9px] md:text-[11px] font-bold uppercase tracking-widest mb-2 opacity-70">Marshall Haber</p>
                  <p
                    className="font-playfair text-xs md:text-sm italic mb-1 tracking-wide"
                    style={{ color: card.labelColor || "inherit" }}
                  >
                    {card.label}
                  </p>
                  {card.titleLarge ? (
                    <h3 className="text-2xl md:text-[3.5rem] font-black leading-tight tracking-tighter" style={{ fontFamily: "var(--font-geist-sans)" }}>
                      {card.titleLarge}
                    </h3>
                  ) : (
                    <h3 className="text-base md:text-3xl font-black leading-tight tracking-tight" style={{ fontFamily: "var(--font-geist-sans)" }}>
                      {card.title.split("\n").map((line, j) => (
                        <span key={j}>{line}{j < card.title.split("\n").length - 1 && <br />}</span>
                      ))}
                    </h3>
                  )}
                </div>
                <p className="font-semibold text-xs md:text-sm leading-snug group-hover:opacity-70 transition-opacity text-[#fbc1d4] line-clamp-2">
                  {card.desc}
                </p>
                <div className="border-b border-white/20 pb-1 mt-1">
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-60">Knowledge</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* "What's trending" button — below cards */}
        <div className="flex justify-start mb-14 md:mb-20">
          <button className="flex items-center gap-3 px-6 py-3 border border-[#fbc1d4] text-[#fbc1d4] rounded-full text-sm font-semibold hover:bg-[#fbc1d4] hover:text-[#1a1a1a] transition-colors">
            <span>What's trending.</span>
            <span>←</span>
          </button>
        </div>

        {/* Relationships */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-t border-white/10 pt-10 md:pt-16 mb-12 md:mb-20 items-center">
          <h3 className="md:col-span-3 text-2xl font-playfair font-semibold tracking-tight">
            In a lasting<br/>relationship with:
          </h3>
          <div className="md:col-span-9 overflow-hidden relative w-full flex" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
            <div className="animate-marquee flex items-center font-black text-xl tracking-widest uppercase whitespace-nowrap w-max">
              <div className="px-8 flex items-center gap-16">
                <div>Frontify</div>
                <div>vay</div>
                <div className="text-sm">USERCENTRICS</div>
                <div>arculus</div>
                <div>remberg</div>
                <div>NANOTEMPER</div>
                <div>zellerfeld</div>
                <div className="text-xs">UNTERNEHMERTUM</div>
              </div>
              <div className="px-8 flex items-center gap-16">
                <div>Frontify</div>
                <div>vay</div>
                <div className="text-sm">USERCENTRICS</div>
                <div>arculus</div>
                <div>remberg</div>
                <div>NANOTEMPER</div>
                <div>zellerfeld</div>
                <div className="text-xs">UNTERNEHMERTUM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Awards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border-t border-white/10 pt-10 md:pt-16 mb-10 md:mb-20">
          <h3 className="md:col-span-3 text-2xl font-playfair font-semibold tracking-tight">
            Getting love from:
          </h3>
          <div className="md:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
            {[
              { abbr: "W.", name: "Awwwards.", detail: "2 x Agency of the year Nominee\n7 x Site of the day\n2 x Developer Award" },
              { abbr: "L.", name: "The Lovie Awards", detail: "2 x Gold Lovie\n2 x Silver Lovie\n2 x People's choice" },
              { abbr: "FWA", name: "The FWA", detail: "2 x FWA of the Day", tracking: "tracking-tighter" },
              { abbr: "GDA", name: "German Design Award", detail: "Special Mention Award" },
              { abbr: "Bē", name: "Behance", detail: "1x Graphic Design" },
              { abbr: "R.", name: "Red Dot Design Award", detail: "Communication Design Award" },
            ].map((award) => (
              <div key={award.name}>
                <h4 className={`text-4xl font-black mb-4 ${award.tracking || ""}`}>{award.abbr}</h4>
                <p className="font-bold text-sm mb-2">{award.name}</p>
                <p className="text-[10px] font-semibold opacity-60 leading-tight whitespace-pre-line">{award.detail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
