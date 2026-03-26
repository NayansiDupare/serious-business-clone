"use client";

import Navbar from "./components/layout/Navbar"
import StackContainer from "./components/layout/StackContainer"
import StackSection from "./components/layout/StackSection";
import Hero, { HeroTopText } from "./components/sections/Hero";
import About from "./components/sections/About";
import ServiceBlock, { StrategyImage, VisualImage, WebsiteImage, ProductImage } from "./components/sections/Services";
import Works from "./components/sections/Works";
import Footer from "./components/sections/Footer";
import Insights from "./components/sections/Insights";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const insightsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const serviceTopOffset = isMobile ? "60px" : "80px";
  const labelTop = isMobile ? "0px" : "0px";
  
  const { scrollYProgress } = useScroll({
    target: insightsRef,
    offset: ["start 90%", "end 20%"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#ff8cc2", "#1a1a1a", "#1a1a1a", "#ff8cc2"]
  );

  const color = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#1a1a1a", "#ff8cc2", "#ff8cc2", "#1a1a1a"]
  );

  return (
    <motion.main style={{ backgroundColor, color }} className="transition-colors duration-500">
      <HeroTopText />

      <div className="relative w-full">
        <div className="sticky top-0 w-full z-[100] h-0">
          <Navbar />
        </div>

        <Hero />
        <About />

        <StackContainer>
        {/* Sticky Services Label */}
        <div 
          className="sticky w-full h-[8vh] bg-primary z-10 flex items-end pb-2 px-6"
          style={{ top: labelTop }}
        >
          <span className="text-xl font-bold tracking-tighter text-[#1a1a1a]">Services</span>
        </div>

        {/* SERVICES: Brand Strategy */}
        <StackSection bg="#cba6f7" z={20} topOffset={serviceTopOffset}>
          <ServiceBlock
            title="Brand Strategy"
            description="It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market."
            list={["Research & Insights", "Brand Model", "Positioning", "Value proposition", "Messaging", "Verbal identity", "Naming"]}
            imageContent={<StrategyImage />}
            direction="left"
          />
        </StackSection>

        {/* SERVICES: Visual Identity */}
        <StackSection bg="#ffffff" z={30} topOffset={serviceTopOffset}>
          <ServiceBlock
            title="Visual Identity"
            description="Visual identity is the unique visual language of your brand, creating memorable impressions and emotional connections with your audience."
            list={["Logotype, Typography & Colour", "Visual Language", "Illustrations & 3D", "Art Direction", "Brandbook & Guidelines", "Motion Design", "Brand Applications"]}
            imageContent={<VisualImage />}
            direction="right"
          />
        </StackSection>

        {/* SERVICES: Website */}
        <StackSection bg="#fac541" z={40} topOffset={serviceTopOffset}>
          <ServiceBlock
            title="Website"
            description="Our website design services blend innovation and creativity to deliver user-centric solutions that elevate your brand and engage your audience."
            list={["UX Design", "Website Design", "Responsive Design", "Website Motion", "Animations"]}
            imageContent={<WebsiteImage />}
            direction="left"
          />
        </StackSection>

        {/* SERVICES: Product */}
        <StackSection bg="#1a1a1a" z={50} topOffset={serviceTopOffset}>
          <ServiceBlock
            title="Product"
            description="Our product design services focus on creating intuitive and aesthetically pleasing products that resonate with your audience and stand out in the market."
            list={["UX Design", "User Testing", "Prototyping", "UI Design", "App Design", "Interaction Design"]}
            textColor="text-[#ffffff]"
            imageContent={<ProductImage />}
            direction="right"
          />
        </StackSection>
      </StackContainer>

      {/* WORKS, INSIGHTS & FOOTER */}
      <div className="relative z-[50]">
        <Works />
        <div ref={insightsRef} className="w-full">
          <Insights />
        </div>
        <Footer />
      </div>
      </div>
    </motion.main>
  );
}