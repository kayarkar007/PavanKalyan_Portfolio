import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const barRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(overlayRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "expo.inOut",
          onComplete,
        });
      },
    });

    // Animate logo in
    tl.fromTo(logoRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    // Animate progress bar
    tl.to(barRef.current, {
      width: "100%",
      duration: 1.6,
      ease: "power2.inOut",
    }, "-=0.2");

    // Animate percentage counter
    tl.to({ val: 0 }, {
      val: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: function () {
        if (percentRef.current) {
          percentRef.current.textContent = `${Math.round(this.targets()[0].val)}%`;
        }
      },
    }, "<");

    // Slight pause before exit
    tl.to({}, { duration: 0.3 });
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {/* Logo */}
      <div ref={logoRef} style={{ textAlign: "center" }}>
        <div style={{
          fontSize: "clamp(3rem, 8vw, 5rem)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          color: "#fff",
          lineHeight: 1,
        }}>
          PK<span style={{ color: "#ffc300" }}>.</span>
        </div>
        <p style={{
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
          marginTop: "0.5rem",
          fontWeight: 700,
        }}>
          Full Stack Developer
        </p>
      </div>

      {/* Progress */}
      <div style={{ width: "min(300px, 60vw)" }}>
        <div style={{
          height: "2px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "999px",
          overflow: "hidden",
          marginBottom: "0.75rem",
        }}>
          <div ref={barRef} style={{
            height: "100%",
            width: "0%",
            background: "linear-gradient(90deg, #ffc300, #fff9c4)",
            borderRadius: "999px",
            boxShadow: "0 0 12px rgba(255,195,0,0.6)",
          }} />
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.3)",
        }}>
          <span>LOADING</span>
          <span ref={percentRef} style={{ color: "#ffc300" }}>0%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
