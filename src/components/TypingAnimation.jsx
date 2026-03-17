import React, { useEffect, useRef, useState } from "react";

const WORDS = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Next.js Specialist",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Open Source Contributor",
];

const TypingAnimation = ({ className = "" }) => {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = WORDS[wordIdx];
    let delay = isDeleting ? 45 : 80;

    if (!isDeleting && charIdx === current.length) {
      delay = 1800; // pause at end
    } else if (isDeleting && charIdx === 0) {
      delay = 300;
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % WORDS.length);
      return;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIdx < current.length) {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (isDeleting && charIdx > 0) {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else if (!isDeleting && charIdx === current.length) {
        setIsDeleting(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, wordIdx]);

  return (
    <span className={className}>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1.1em",
          background: "#ffc300",
          marginLeft: "2px",
          verticalAlign: "text-bottom",
          animation: "cursorBlink 0.8s step-end infinite",
        }}
      />
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default TypingAnimation;
