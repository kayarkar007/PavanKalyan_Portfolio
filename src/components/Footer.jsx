import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { useTheme } from "./themeContext";

const Footer = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative py-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[100px] bg-[#ffc300]/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Logo / Brand */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <div className="text-3xl font-bold tracking-tighter text-white">
            PK<span className="text-[#ffc300]">.</span>
          </div>
        </motion.div>

        {/* Navigation Links (Simplified for Footer) */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-[#ffc300] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-10">
          <a href="https://github.com/kayarkar007" target="_blank" className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-[#ffc300] hover:bg-[#ffc300]/10 transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/pavankalyan-dev" target="_blank" className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-[#ffc300] hover:bg-[#ffc300]/10 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:kayarkarpavankalyanofficial@protonmail.com" className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-[#ffc300] hover:bg-[#ffc300]/10 transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright & Info */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-400 flex items-center justify-center gap-1.5 font-medium">
            Designed & Developed with <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> by 
            <span className="text-white font-bold ml-1">Pavan Kalyan Kayarkar</span>
          </p>
          <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} PK Portfolio • Kagaznagar, TS, India
          </p>
        </div>

        {/* Scroll Top Button (Explicit in Footer) */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          className="mt-12 p-4 glass rounded-full border-white/10 text-gray-400 hover:text-[#ffc300] hover:border-[#ffc300]/30 transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
