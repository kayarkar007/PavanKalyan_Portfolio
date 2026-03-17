import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DynamicBackground = () => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute inset-0 bg-[#030303]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Parallax Blobs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#ffc300]/10 blur-[120px]" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#ffc300]/5 blur-[150px]" 
      />
      <motion.div 
        style={{ y: y3, x: 100 }}
        className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-[#ffc300]/10 blur-[100px]" 
      />

      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ffc300] to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ffc300] to-transparent" />
      </div>
    </div>
  );
};

export default DynamicBackground;
