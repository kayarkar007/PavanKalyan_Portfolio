import React from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 text-center relative overflow-hidden font-outfit">
      {/* Big 404 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
      >
        <div className="text-[clamp(6rem,20vw,12rem)] font-black leading-none bg-gradient-to-br from-[#ffc300] to-[#ffc300]/20 bg-clip-text text-transparent tracking-tighter">
          404
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 mb-10"
      >
        <h2 className="text-2xl font-bold text-white mb-3">
          Page Not Found
        </h2>
        <p className="text-white/40 max-w-sm mx-auto leading-relaxed">
          Looks like this page doesn't exist. Let's get you back to the portfolio.
        </p>
      </motion.div>

      <motion.a
        href="/"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 px-10 py-4 bg-[#ffc300] text-black font-black text-sm uppercase tracking-widest rounded-2xl shadow-[0_0_30px_rgba(255,195,0,0.35)] transition-all"
      >
        <Home className="w-4 h-4" /> Back Home
      </motion.a>

      {/* Background glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-radial-gradient from-[#ffc300]/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default NotFound;
