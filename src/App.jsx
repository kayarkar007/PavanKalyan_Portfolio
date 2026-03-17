import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Journey from "./pages/Journey";
import ProjectShowcase from "./pages/Projects";
import ContactPage from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import DynamicBackground from "./components/DynamicBackground";
import Scene3D from "./components/Scene3D";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import { useTheme } from "./components/themeContext";

/* Scroll To Top Button */
const ScrollToTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-[60] p-4 rounded-full bg-[#ffc300] text-black shadow-[0_0_20px_rgba(255,195,0,0.4)] hover:bg-yellow-400 transition-all duration-300 hover:scale-110 active:scale-95"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

/* One-page Portfolio layout */
const PortfolioLayout = () => {
  const { theme } = useTheme();
  const [loaded, setLoaded] = React.useState(false);

  return (
    <>
      {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      <div className={`relative w-full min-h-screen font-outfit ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
        <CustomCursor />
        <DynamicBackground />
        <Scene3D />

        <Navbar />

        <div className="relative z-10 pointer-events-none">
          <main className="flex flex-col items-center w-full pointer-events-auto">
            <section id="home" className="w-full min-h-screen">
              <Home />
            </section>
            <section id="about" className="w-full min-h-screen flex items-center justify-center">
              <About />
            </section>
            <section id="skills" className="w-full min-h-screen flex items-center justify-center">
              <Skills />
            </section>
            <section id="journey" className="w-full min-h-screen flex items-center justify-center">
              <Journey />
            </section>
            <section id="projects" className="w-full min-h-screen flex items-center justify-center">
              <ProjectShowcase />
            </section>
            {/* Testimonials section (between projects and contact) */}
            <section className="w-full flex items-center justify-center">
              <Testimonials />
            </section>
            <section id="contact" className="w-full min-h-screen flex items-center justify-center">
              <ContactPage />
            </section>
          </main>

          <Footer />
        </div>

        <ScrollToTop />
      </div>
    </>
  );
};

/* App with routing */
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PortfolioLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
