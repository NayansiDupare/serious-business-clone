import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmileLogo from "../ui/SmileLogo";
import videoSrc from "../../assets/video.mp4";

gsap.registerPlugin(ScrollTrigger);

export function HeroTopText() {
  return null;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const textRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      // Pin the section and animate the video
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=120%", // duration of the scroll pin
          scrub: 1, // smooth scrubbing
          pin: true,
        }
      });

      // Scale up video to cover screen
      tl.to(videoWrapperRef.current, {
        width: "100vw",
        height: "100vh",
        bottom: 0,
        left: 0,
        borderRadius: 0,
        ease: "power2.inOut",
      }, 0);

      // Fade out the logo and text as video scales
      tl.to([textRef.current, logoRef.current], {
        opacity: 0,
        y: -50,
        ease: "power1.inOut",
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) {
    return <section className="relative w-full h-screen bg-primary overflow-hidden" />;
  }

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-primary overflow-hidden">
      <div ref={stickyRef} className="relative w-full h-full flex flex-col items-center">

        {/* LOGO — Upper Center */}
        <div
          ref={logoRef}
          className="
            absolute
            top-[10vh]
            w-full
            flex justify-center
            z-10
            pointer-events-none
            opacity-30
            mix-blend-multiply
          "
        >
          <div className="w-[60vw] max-w-[500px] aspect-square">
            <SmileLogo />
          </div>
        </div>

        {/* TEXT — Center */}
        <div
          ref={textRef}
          className="
            absolute
            top-[40vh] md:top-[35vh]
            w-full
            flex justify-center
            z-20 pointer-events-none
            px-4
          "
        >
          <h2 className="
            text-[24px] md:text-[40px] lg:text-[50px]
            leading-[1.1]
            font-bold
            text-[#1a1a1a]
            text-center
            tracking-tight
            max-w-[800px]
          ">
            Premium Branding Agency <br />
            for B2B Tech Scaleups
          </h2>
        </div>

        {/* VIDEO — Starts Bottom Left */}
        <div
          ref={videoWrapperRef}
          className="absolute z-30 overflow-hidden"
          style={{
            bottom: "2rem",
            left: "2rem",
            width: "clamp(200px, 25vw, 400px)",
            height: "clamp(120px, 15vw, 240px)",
            borderRadius: "16px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src={videoSrc}
          />
        </div>

      </div>
    </section>
  );
}