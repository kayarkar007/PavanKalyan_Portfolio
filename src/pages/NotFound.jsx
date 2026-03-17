import React from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      textAlign: "center",
    }}>
      {/* Big 404 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
      >
        <div style={{
          fontSize: "clamp(6rem, 20vw, 12rem)",
          fontWeight: 900,
          letterSpacing: "-0.05em",
          lineHeight: 1,
          background: "linear-gradient(135deg, #ffc300 0%, rgba(255,195,0,0.2) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          404
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ marginTop: "1.5rem", marginBottom: "2.5rem" }}
      >
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
          Page Not Found
        </h2>
        <p style={{ color: "rgba(255,255,255,0.4)", maxWidth: "400px", lineHeight: 1.6 }}>
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
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "1rem 2.5rem",
          background: "#ffc300",
          color: "#000",
          fontWeight: 800,
          fontSize: "0.85rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          borderRadius: "1rem",
          boxShadow: "0 0 30px rgba(255,195,0,0.35)",
          textDecoration: "none",
        }}
      >
        ← Back Home
      </motion.a>

      {/* Background glow */}
      <div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,195,0,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
    </div>
  );
};

export default NotFound;
