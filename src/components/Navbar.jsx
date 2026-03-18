import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Download, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./themeContext";
import Magnetic from "./Magnetic";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-[100] px-6 py-6 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`max-w-6xl mx-auto glass rounded-[2rem] border-white/5 pointer-events-auto transition-all duration-500 overflow-hidden ${
          scrolled ? "py-3 px-6 shadow-2xl dark:shadow-black/50 shadow-black/10" : "py-4 px-8"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold tracking-tighter flex items-center gap-1 group">
             <span className="dark:text-white text-slate-900">PK</span>
             <span className="text-[#ffc300] group-hover:scale-150 transition-transform">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeSection === item.href.substring(1) ? "dark:text-white text-slate-900" : "text-gray-500 dark:hover:text-white hover:text-slate-900"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[#ffc300]/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
             {/* Theme Toggle */}
            <Magnetic strength={0.3}>
                <button
                    onClick={toggleTheme}
                    className="p-3 bg-white/5 dark:bg-white/5 bg-black/5 rounded-2xl text-gray-500 dark:text-gray-400 hover:text-[#ffc300] transition-colors"
                >
                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
            </Magnetic>

            {/* Resume Call to Action */}
            <Magnetic strength={0.2}>
                <a
                href="/assets/PAVAN KALYAN KAYARKAR RESUME.pdf"
                download
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#ffc300] text-black font-bold rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-[0_0_15px_rgba(255,195,0,0.3)]"
                >
                <Download className="w-3.5 h-3.5" />
                Resume
                </a>
            </Magnetic>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 bg-white/5 rounded-2xl text-white"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-28 left-6 right-6 glass p-8 rounded-[2rem] border-white/10 pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold uppercase tracking-widest ${
                    activeSection === item.href.substring(1) ? "text-[#ffc300]" : "dark:text-gray-400 text-gray-600"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 border-t border-white/5 flex gap-4">
                <a href="https://github.com/kayarkar007" target="_blank" className="p-4 dark:bg-white/5 bg-black/5 rounded-2xl dark:text-white text-slate-900">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/pavankalyan-dev" target="_blank" className="p-4 dark:bg-white/5 bg-black/5 rounded-2xl dark:text-white text-slate-900">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
