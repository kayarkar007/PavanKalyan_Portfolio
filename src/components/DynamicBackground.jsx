import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DynamicBackground = () => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden dark:bg-[#030303] bg-slate-50 transition-colors duration-700">
      {/* Grid Pattern - Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      {/* Optimized Parallax Blobs (No heavy SVG filters) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          animate={{ 
            x: [0, 30, 0], 
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full dark:bg-[#ffc300]/10 bg-[#ffc300]/5 blur-[100px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          animate={{ 
            x: [0, -30, 0], 
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] right-[-5%] w-[60%] h-[60%] rounded-full dark:bg-[#ffc300]/8 bg-blue-500/5 blur-[120px]" 
        />
        <motion.div 
          style={{ y: y3 }}
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] w-[35%] h-[35%] rounded-full dark:bg-white/5 bg-[#ffc300]/5 blur-[80px]" 
        />
      </div>

      {/* Subtle vignettes */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent dark:to-black/20 to-white/10" />
    </div>
  );
};

export default DynamicBackground;
