import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Journey from "./pages/Journey";
import ProjectShowcase from "./pages/Projects";
import ContactPage from "./pages/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./components/themeContext";

/* Scroll CTA */
export const Scroll = ({ section, refId }) => {
  return (
    <a
      href={`#${refId}`}
      className="
        group
        relative
        flex items-center justify-between
        min-w-[19%] min-h-[8%]
        px-4 py-2
        rounded-full
        mt-10
        text-sm text-gray-300
        hover:text-yellow-400
        transition-all duration-300
        cursor-pointer
        backdrop-blur-xl bg-white/5 border border-white/10
        hover:bg-white/10 hover:border-yellow-400/40
      "
    >
      <img
        src="assets/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
        alt="scroll down"
        className="
          w-6 h-6 pt-1 
          transition-transform duration-300
          group-hover:translate-y-1
        "
      />

      <span className="font-medium text-lg text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">
        Scroll to <span className="font-semibold text-[#ffc300]">{section}</span>
      </span>
    </a>
  );
};


/* Scroll To Top */
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-8 right-8 
        z-[60]
        p-3 
        rounded-full 
        bg-[#ffc300] 
        text-black 
        shadow-lg 
        hover:bg-yellow-400 
        transition-all 
        animate-bounce
      "
    >
      ↑
    </button>
  );
};

/* App Layout */
const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`
        relative 
        w-full min-h-screen 
        flex flex-col 
        scroll-smooth 
         overflow-x-hidden
        ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}
      `}
    >
      {/* Background */}
      <img
        src="assets/freepik__background__48609.png"
        alt="background"
        className="
          fixed inset-0 
          w-full h-full 
          object-cover 
          opacity-40 
          z-0
          pointer-events-none
        "
      />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <main className="relative z-10 flex flex-col items-center w-full">
        <Home />
        <About />
        <Skills />
        <Journey />
        <ProjectShowcase />
        <ContactPage />
      </main>

      {/* Footer */}
      <Footer />

      {/* Utilities */}
      <ScrollToTop />
    </div>
  );
};

export default App;
