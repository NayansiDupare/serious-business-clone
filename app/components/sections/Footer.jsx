"use client";

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-6 px-6 relative overflow-hidden z-50">

      {/* Top CTA Cards */}
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-4 mb-20">
        {/* Left Card */}
        <div className="bg-[#1a1a1a] text-white p-8 md:p-10 h-[300px] md:h-[350px] flex flex-col justify-between cursor-pointer group hover:opacity-95 transition-opacity">
          <p className="font-playfair text-lg md:text-xl leading-tight">
            <span className="font-bold">You feel it too?</span><br />
            Let's talk, no strings attached
          </p>
          <h2 className="text-[9vw] md:text-[64px] font-bold tracking-tight leading-none group-hover:pl-2 transition-all duration-300" style={{ fontFamily: "var(--font-geist-sans)" }}>
            Send Request
          </h2>
        </div>

        {/* Right Card */}
        <div className="bg-[#cba6f7] text-black p-8 md:p-10 h-[300px] md:h-[350px] flex flex-col justify-between cursor-pointer group hover:opacity-95 transition-opacity">
          <p className="font-playfair text-base md:text-lg leading-snug max-w-sm">
            Our free offer for B2B tech scaleups!<br />
            We identify high-impact messaging and brand fixes you can implement within 24 hours.
          </p>
          <h2 className="text-[9vw] md:text-[64px] font-bold tracking-tight leading-none group-hover:pl-2 transition-all duration-300" style={{ fontFamily: "var(--font-geist-sans)" }}>
            Brand <br className="hidden md:block" /> Masterplan
          </h2>
        </div>
      </div>

      {/* Links + Contact Section */}
      <div className="max-w-[1400px] mx-auto mb-16">
        {/* Explore & Stalk Us */}
        <div className="flex flex-col gap-10 mb-12 md:flex-row md:justify-between">
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div className="flex gap-6">
              <h4 className="text-[10px] uppercase font-bold tracking-widest mt-1 shrink-0">Explore</h4>
              <ul className="space-y-1 text-xl font-medium">
                <li><a href="#" className="hover:opacity-60 transition-opacity">Work</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">About</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Services</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Blog</a></li>
              </ul>
            </div>
            <div className="flex gap-6">
              <h4 className="text-[10px] uppercase font-bold tracking-widest mt-1 shrink-0">Stalk us</h4>
              <ul className="space-y-1 text-xl font-medium">
                <li><a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Instagram</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6 md:text-right">
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest mb-2">Say Hello</h4>
              <a href="mailto:hello@serious.business" className="text-xl hover:opacity-60 transition-opacity border-b border-current pb-1">
                hello@serious.business
              </a>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-bold tracking-widest mb-2">Exceptional talent?</h4>
              <a href="mailto:apply@serious.business" className="text-xl hover:opacity-60 transition-opacity border-b border-current pb-1">
                apply@serious.business
              </a>
            </div>
          </div>
        </div>

        {/* Legal links — above logo */}
        <div className="flex justify-center gap-4 text-[10px] font-bold uppercase tracking-widest mb-12 md:mb-8">
          <a href="#" className="hover:opacity-60 transition-opacity underline">Imprint</a>
          <span>|</span>
          <a href="#" className="hover:opacity-60 transition-opacity underline">Privacy</a>
          <span>|</span>
          <a href="#" className="hover:opacity-60 transition-opacity underline">Press</a>
        </div>
      </div>

      {/* Big inline logo */}
      <div className="w-full flex justify-center items-center mb-4">
        <div
          className="flex flex-row items-center text-[8.5vw] md:text-[6vw] lg:text-[5.5vw] font-black leading-[0.85] tracking-tighter uppercase text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          <span>SERIOUS</span>
          <svg viewBox="0 0 200 200" className="w-[0.85em] h-[0.85em] mx-[0.1em]">
            <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="20" fill="none" />
            <circle cx="65" cy="75" r="12" fill="currentColor" />
            <circle cx="135" cy="75" r="12" fill="currentColor" />
            <path d="M50 120 Q100 170 150 120" stroke="currentColor" strokeWidth="20" strokeLinecap="round" fill="none" />
          </svg>
          <span>BUSINESS</span>
        </div>
      </div>

      {/* Bottom bar — city + copyright below logo */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] font-medium tracking-wide px-2 pt-4 border-t border-black/20">
        <p className="font-playfair lowercase tracking-normal text-sm">München, Germany / Stockholm, Sweden</p>
        <p className="mt-1 md:mt-0 font-bold uppercase tracking-widest text-[10px]">© Serious Business GmbH</p>
      </div>
    </footer>
  );
}
