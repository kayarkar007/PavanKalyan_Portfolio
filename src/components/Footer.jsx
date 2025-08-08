// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { useTheme } from "../components/themeContext";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/kayarkar007",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/pavankalyan-dev",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    link: "mailto:KAYARKARPAVANKALYANOFFICIAL@protonmail.com",
  },
];

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={`w-full pt-0 pb-8 px-4 border-t-0 relative z-10 backdrop-blur-md ${
        theme === "dark"
          ? "bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white"
          : "bg-gradient-to-t from-white/80 via-white/60 to-transparent text-black"
      }`}
      style={{
        boxShadow:
          theme === "dark" ? "0 -2px 32px 0 #0008" : "0 -2px 32px 0 #ffc30022",
      }}
    >
      {/* Animated SVG Wave Top Border */}
      <div
        className="absolute left-0 top-0 w-full overflow-hidden leading-none pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16"
        >
          <motion.path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill={theme === "dark" ? "#18181b" : "#fffbe6"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </svg>
      </div>
      {/* Floating Character SVG (optional, right side) */}
      <div
        className="hidden md:block absolute right-8 -top-24 w-32 h-32 pointer-events-none opacity-80"
        style={{ zIndex: 2 }}
      >
        <img
          src="/assets/character.svg"
          alt="Mascot"
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 relative"
        style={{ zIndex: 3 }}
      >
        <div className="text-center sm:text-left">
          <p
            className={
              theme === "dark"
                ? "text-sm text-gray-400"
                : "text-sm text-gray-700"
            }
          >
            Designed & built with{" "}
            <FaHeart className="inline text-red-500 mx-1 animate-pulse" /> by{" "}
            <span className="text-[#ffc300] font-semibold">
              Pavan Kalyan Kayarkar
            </span>
          </p>
          <p
            className={
              theme === "dark"
                ? "text-xs text-gray-600 mt-1"
                : "text-xs text-gray-500 mt-1"
            }
          >
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-2xl">
          {socials.map(({ name, icon, link }) => (
            <motion.a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative transition-colors duration-200 ${
                theme === "dark"
                  ? "text-gray-400 hover:text-[#ffc300]"
                  : "text-gray-700 hover:text-[#ffc300]"
              }`}
              aria-label={name}
              whileHover={{ scale: 1.2, rotate: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-black/80 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {name}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
