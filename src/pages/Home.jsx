import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Layout, Database, Github, Linkedin } from "lucide-react";
import { useTheme } from "../components/themeContext";
import Magnetic from "../components/Magnetic";
import CharacterOverlay from "../components/CharacterOverlay";
import TypingAnimation from "../components/TypingAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  const { theme } = useTheme();
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonGroupRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation or character stagger
      gsap.from(".hero-title-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
      });

      gsap.from(".hero-description", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.2
      });

      gsap.from(".hero-btns", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 1.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="w-full min-h-screen pt-32 pb-20 px-6 relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8 relative z-10">
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-[#ffc300]/10 border border-[#ffc300]/20 rounded-full"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc300] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffc300]"></span>
            </span>
            <span className="text-[#ffc300] text-[10px] uppercase tracking-widest font-bold">Open for Innovative Projects</span>
          </motion.div>

          <div className="space-y-4 overflow-hidden">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] dark:text-white text-slate-800">
              <div className="hero-title-line">CRAFTING</div>
              <div className="hero-title-line text-[#ffc300] italic">DIGITAL</div>
              <div className="hero-title-line dark:text-white/40 text-slate-600">MASTERY.</div>
            </h1>
            <p className="hero-description text-base dark:text-gray-400 text-slate-600 max-w-lg leading-relaxed pt-4">
              I'm <span className="dark:text-white text-slate-900 font-bold underline decoration-[#ffc300]/50 decoration-2 underline-offset-4">Pavan Kalyan</span> —{" "}
              <TypingAnimation className="text-[#ffc300] font-semibold" />
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <div className="hero-btns">
              <Magnetic strength={0.2}>
                  <a 
                      href="#projects" 
                      className="group relative px-10 py-5 bg-[#ffc300] text-black font-black rounded-2xl flex items-center gap-2 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,195,0,0.3)]"
                  >
                      EXPLORE WORK <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
              </Magnetic>
            </div>
            
            <div className="hero-btns">
              <Magnetic strength={0.2}>
                  <a 
                      href="#contact" 
                      className="px-10 py-5 glass dark:text-white text-slate-800 font-black rounded-2xl transition-all hover:scale-105 active:scale-95"
                  >
                      LET'S CONNECT
                  </a>
              </Magnetic>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex gap-10 pt-10 border-t dark:border-white/10 border-black/10">
            {[
              { label: "Experience", value: "1+ Year" },
              { label: "Execution", value: "Production Ready" },
              { label: "Architecture", value: "Scalable" }
            ].map((stat, idx) => (
              <div key={idx} className="hero-description">
                <p className="text-3xl font-black dark:text-white text-slate-900 tracking-tighter">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-[#ffc300] font-black">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual – Character with premium CSS 3D + GSAP */}
        <div className="relative hidden lg:flex items-center justify-center h-[640px]">
          <CharacterOverlay />
        </div>
      </div>
    </section>
  );
};

export default Home;
