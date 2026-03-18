import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

const CharacterOverlay = () => {
  const containerRef = useRef(null);
  const coreRef = useRef(null);
  const outerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance
      gsap.fromTo(containerRef.current, 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "expo.out", delay: 0.5 }
      );

      // Core rotation & float
      gsap.to(coreRef.current, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none"
      });

      gsap.to(containerRef.current, {
        y: -15,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      // Outer rings pulse
      gsap.to(".ring-layer", {
        scale: 1.05,
        opacity: 0.3,
        duration: 3,
        stagger: 0.8,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      });
    }, containerRef);

    // Mouse Parallax
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;
      gsap.to(coreRef.current, { x: x * 0.4, y: y * 0.4, duration: 1.2, ease: "power2.out" });
      gsap.to(outerRef.current, { x: -x * 0.2, y: -y * 0.2, duration: 1.8, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center opacity-0 overflow-visible">
      {/* Background Glows */}
      <div ref={glowRef} className="absolute w-[90%] h-[90%] rounded-full bg-radial-gradient from-[#ffc300]/15 via-transparent to-transparent blur-[120px] pointer-events-none" />
      
      {/* Outer Geometric Rings */}
      <div ref={outerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-[100%] h-[100%] opacity-20 dark:opacity-30 ring-layer">
              <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 6" className="dark:text-[#ffc300] text-slate-400" />
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="8 16" className="dark:text-[#ffc300] text-slate-500" />
          </svg>
          <svg viewBox="0 0 200 200" className="absolute w-[80%] h-[80%] opacity-15 dark:opacity-25 ring-layer">
              <rect x="45" y="45" width="110" height="110" fill="none" stroke="currentColor" strokeWidth="0.4" className="dark:text-[#ffc300] text-slate-400 rotate-45 transform-origin-center" />
          </svg>
      </div>

      {/* The Core Hologram */}
      <div ref={coreRef} className="relative z-10 w-full max-w-[480px] aspect-square flex items-center justify-center">
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_40px_rgba(255,195,0,0.25)]">
              <defs>
                  <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffc300" />
                      <stop offset="100%" stopColor="#ff9f00" />
                  </linearGradient>
                  <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
              </defs>
              
              {/* Complex Nested Hexagons / Geometry */}
              <g className="core-elements" filter="url(#glow)">
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <motion.path
                          key={i}
                          d="M200 100 L286 150 L286 250 L200 300 L114 250 L114 150 Z"
                          fill="none"
                          stroke="url(#coreGrad)"
                          strokeWidth="2.5"
                          initial={{ rotate: angle, scale: 0.8 }}
                          animate={{ 
                            rotate: angle + 360,
                            scale: [0.8, 0.95, 0.8]
                          }}
                          transition={{ 
                            rotate: { duration: 20 + i * 3, repeat: Infinity, ease: "linear" },
                            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
                          }}
                          style={{ transformOrigin: "200px 200px", opacity: 0.6 + (i * 0.05) }}
                      />
                  ))}
                  
                  {/* Central Node */}
                  <circle cx="200" cy="200" r="12" fill="#ffc300" className="animate-pulse shadow-glow" />
                  <circle cx="200" cy="200" r="45" fill="none" stroke="#ffc300" strokeWidth="1" strokeDasharray="4 8" className="animate-spin-slow" />
              </g>

              {/* Data Lines radiating from core */}
              <g className="data-lines opacity-20 dark:opacity-40" stroke="#ffc300" strokeWidth="0.4">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                      <line 
                        key={i} 
                        x1="200" y1="200" 
                        x2={200 + Math.cos(angle * Math.PI / 180) * 190} 
                        y2={200 + Math.sin(angle * Math.PI / 180) * 190} 
                        strokeDasharray="1 12"
                      />
                  ))}
              </g>
          </svg>
      </div>

      <style>{`
        .animate-spin-slow { animation: charRingSpin 15s linear infinite; }
        .shadow-glow { filter: drop-shadow(0 0 12px #ffc300); }
        @keyframes charRingSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CharacterOverlay;
