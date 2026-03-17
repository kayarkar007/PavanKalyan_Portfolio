import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CharacterOverlay = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    const glow = glowRef.current;
    if (!container || !img) return;

    // Entrance animation
    gsap.fromTo(
      container,
      { opacity: 0, y: 80, scale: 0.85 },
      { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "expo.out", delay: 0.8 }
    );

    // Floating loop animation
    gsap.to(img, {
      y: -18,
      duration: 2.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Glow pulse
    if (glow) {
      gsap.to(glow, {
        opacity: 0.7,
        scale: 1.15,
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }

    // Mouse parallax tilt
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const rotateY = ((clientX / innerWidth) - 0.5) * 20;
      const rotateX = -((clientY / innerHeight) - 0.5) * 15;

      gsap.to(img, {
        rotateY,
        rotateX,
        duration: 0.6,
        ease: "power2.out",
        transformPerspective: 1000,
        transformOrigin: "center center",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(img, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.6)",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: 0, // starts invisible, GSAP animates in
      }}
    >
      {/* Radial glow behind character */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(255,195,0,0.22) 0%, rgba(255,195,0,0.07) 50%, transparent 75%)",
          filter: "blur(30px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Floating ring decoration */}
      <div
        style={{
          position: "absolute",
          width: "88%",
          height: "88%",
          borderRadius: "50%",
          border: "1.5px solid rgba(255,195,0,0.13)",
          animation: "charRingSpin 18s linear infinite",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "72%",
          height: "72%",
          borderRadius: "50%",
          border: "1px dashed rgba(255,255,255,0.08)",
          animation: "charRingSpin 12s linear infinite reverse",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Character SVG image */}
      <img
        ref={imgRef}
        src="/assets/character.svg"
        alt="Pavan Kalyan Character"
        style={{
          position: "relative",
          zIndex: 1,
          width: "85%",
          maxWidth: "520px",
          height: "auto",
          transformStyle: "preserve-3d",
          willChange: "transform",
          filter:
            "drop-shadow(0 25px 60px rgba(0,0,0,0.55)) drop-shadow(0 4px 24px rgba(255,195,0,0.18))",
          userSelect: "none",
          pointerEvents: "none",
        }}
      />

      {/* CSS animation keyframes */}
      <style>{`
        @keyframes charRingSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default CharacterOverlay;
