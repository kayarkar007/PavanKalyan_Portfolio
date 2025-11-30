import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FaSun, FaMoon, FaDownload, FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "./themeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.substring(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
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
      layout
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 inset-x-0 mx-auto
        w-3/4 max-w-8xl h-16 px-4
        backdrop-blur-xl border rounded-2xl
        flex justify-center items-center
        z-50 transition-all duration-500
        ${scrolled ? "shadow-2xl shadow-black/20" : ""}
        ${theme === "dark"
          ? "bg-black/30 border-white/20"
          : "bg-white/30 border-black/20"
        }
`}
    >
      <div className="w-full flex items-center justify-between gap-6">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-shrink-0"
        >
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-bold font-michroma text-yellow-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* <img src="/assets/character.svg" alt="Logo" className="h-10" /> */}
            PK
          </motion.a>
        </motion.div>

        {/* Desktop Nav */}
        <LayoutGroup>
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className={`relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-yellow-300"
                    : theme === "dark"
                    ? "text-white hover:bg-white/10"
                    : "text-gray-700 hover:bg-black/10"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-yellow-400/20 rounded-full"
                    transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </LayoutGroup>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-xl transition-all duration-300 ${
              theme === "dark"
                ? "bg-white/10 text-yellow-400 hover:bg-white/20"
                : "bg-black/10 text-yellow-600 hover:bg-black/20"
            }`}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </motion.button>

          {/* GitHub */}
          <motion.a
            href="https://github.com/kayarkar007"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className={`p-3 rounded-xl transition-all duration-300 ${
              theme === "dark"
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-black/10 text-gray-700 hover:bg-black/20"
            }`}
          >
            <FaGithub />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/pavankalyan-dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className={`p-3 rounded-xl transition-all duration-300 ${
              theme === "dark"
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-black/10 text-gray-700 hover:bg-black/20"
            }`}
          >
            <FaLinkedin />
          </motion.a>

          {/* Resume */}
          <motion.a
            href="/assets/PAVAN_KALYAN_KAYARKAR-RESUME.pdf"
            download="Pavan_Kalyan_Kayarkar_Resume.pdf"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl font-medium bg-brand-yellow text-black hover:bg-yellow-400 shadow-lg"
          >
            <FaDownload
  className={`inline-block w-3 h-3 ${
    theme === "dark" ? "text-white group-hover:text-black" : "text-black"
  }` }
/>

           <span
  className={`hidden sm:inline ml-2 ${
    theme === "dark" ? "text-white" : "text-black"
  } hover:text-black active:text-black`}
>
  My Resume
</span>


          </motion.a>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`lg:hidden p-2 rounded-xl transition-all ${
              theme === "dark"
                ? "text-gray-300 hover:text-white hover:bg-white/10"
                : "text-gray-700 hover:text-black hover:bg-black/10"
            }`}
          >
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                >
                  <FaBars />
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                >
                  <FaTimes />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 mt-4 p-4 rounded-2xl backdrop-blur-xl border lg:hidden"
            style={{
              background: theme === "dark" ? "rgba(0,0,0,0.95)" : "rgba(255,255,255,0.95)",
              borderColor: theme === "dark" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"
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
                  whileHover={{ x: 10 }}
                  className={`block px-4 py-3 rounded-xl text-base font-medium ${
                    activeSection === item.id
                      ? "text-brand-yellow bg-brand-yellow/10"
                      : theme === "dark"
                      ? "text-gray-300 hover:text-white hover:bg-white/10"
                      : "text-gray-700 hover:text-black hover:bg-black/10"
                  }`}
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
