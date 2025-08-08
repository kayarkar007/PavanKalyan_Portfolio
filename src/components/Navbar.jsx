import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "./themeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = React.useMemo(
    () => [
      { name: "Home", href: "#home", id: "home" },
      { name: "About", href: "#about", id: "about" },
      { name: "Skills", href: "#skills", id: "skills" },
      { name: "Journey", href: "#journey", id: "journey" },
      { name: "Projects", href: "#projects", id: "projects" },
      { name: "Contact", href: "#contact", id: "contact" },
    ],
    []
  );

  // Handle smooth scrolling
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsOpen(false);
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <motion.nav
      id="NavBar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-8 m-auto transform -translate-x-1/2 w-[95vw] max-w-7xl h-16 px-4 backdrop-blur-xl border rounded-2xl flex justify-center items-center z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/40 border-white/30 shadow-2xl shadow-black/20" 
          : "bg-black/20 border-white/20"
      } ${
        theme === "dark" 
          ? "bg-black/20 border-white/20" 
          : "bg-white/20 border-black/20"
      }`}
    >
      <div className="flex w-full justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-bold font-michroma text-yellow-500 hover:text-yellow-400 transition-all duration-300 relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="relative z-10">PK</span>
            <motion.div
              className="absolute inset-0 bg-brand-yellow/20 rounded-lg -z-10"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        </motion.div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                activeSection === item.id
                  ? "text-yellow-400"
                  : theme === "dark"
                  ? "text-white hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
              whileHover={{ y: -2 }}
            >
              {item.name}
              <motion.span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400  transform origin-left transition-transform duration-300 ${
                  activeSection === item.id
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
              <motion.div
                className="absolute inset-0 bg-brand-yellow/10 rounded-lg -z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <motion.button
            className={`p-3 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-yellow/30 ${
              theme === "dark" 
                ? "bg-white/10 text-yellow-400 hover:bg-white/20" 
                : "bg-black/10 text-yellow-600 hover:bg-black/20"
            }`}
            aria-label="Toggle theme"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
          </motion.button>

          {/* Resume Button */}
          <motion.a
            href="/assets/Pavan_Kalyan_Kayarkar_Resume.pdf"
            download="Pavan_Kalyan_Kayarkar_Resume.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
              theme === "dark"
                ? "bg-brand-yellow text-white hover:bg-yellow-400 hover:text-black shadow-glow"
                : "bg-brand-yellow text-black hover:bg-yellow-400 shadow-lg"
            }`}
            aria-label="Download Resume"
          >
            <FaDownload className="w-3 h-3" />
            <span className="hidden sm:inline">Resume</span>
          </motion.a>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-yellow/30 ${
              theme === "dark" 
                ? "text-gray-300 hover:text-white hover:bg-white/10" 
                : "text-gray-700 hover:text-black hover:bg-black/10"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-4 p-4 rounded-2xl backdrop-blur-xl border overflow-hidden lg:hidden"
            style={{
              background: theme === "dark" ? "rgba(0,0,0,0.95)" : "rgba(255,255,255,0.95)",
              borderColor: theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)",
            }}
          >
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-brand-yellow bg-brand-yellow/10"
                      : theme === "dark"
                      ? "text-gray-300 hover:text-white hover:bg-white/10"
                      : "text-gray-700 hover:text-black hover:bg-black/10"
                  }`}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
