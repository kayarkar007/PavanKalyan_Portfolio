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

export const Scroll = ({ section, refId }) => {
  return (
    <a
      href={`#${refId}`}
      className="ScrollTo relative min-w-[19%] min-h-[8%] px-4  rounded-full flex items-center justify-between mt-[5%] text-sm text-gray-300 hover:text-yellow-400 transition duration-300 ease-in-out   animate-bounce cursor-pointer  max320:-bottom-[26%]   p-2 "
    >
      <img
        src="assets/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
        alt="Arrow pointing downward to scroll to About section"
        className="w-auto h-auto pt-1 max320:w-5 max320:pb-.5"
      />
      <span className="font-medium text-lg text-gray-400 max320:text-sm">Scroll to <span className="font-semibold text-[#ffc300]">{section}</span></span>
    </a>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return visible ? (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#ffc300] text-black shadow-lg hover:bg-yellow-400 transition-all duration-300 animate-bounce focus:outline-none "
    >
      ↑
    </button>
  ) : null;
};

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`relative w-screen h-auto flex flex-col justify-start items-start scroll-smooth ${theme === "dark" ? "bg-black" : "bg-white/80"}`}>
      <img
        src="assets/freepik__background__48609.png"
        className="fixed inset-0 opacity-50 z-0 max320:w-100vw max320:h-100vh max320:inset-x-auto max320:inset-y-40 max320:scale-x-125"
        alt="background graphic"
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Journey />
      <ProjectShowcase />
      <ContactPage />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
