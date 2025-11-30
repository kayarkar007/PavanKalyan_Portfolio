// ContactPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingParticles } from "./Home";
import { useTheme } from "../components/themeContext";

const Toast = ({ show, message, theme }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full shadow-lg z-50 ${theme === "dark" ? "bg-[#ffc300] text-black" : "bg-black text-[#ffc300]"}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </motion.div>
    )}
  </AnimatePresence>
);

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { theme } = useTheme();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <section
      id="contact"
      className={`relative min-h-screen py-20 px-4 overflow-hidden m-auto ${theme === "dark" ? "bg-black/10 text-white" : "bg-white/80 text-black"}`}
      aria-labelledby="contact-heading"
      role="form"
    >
      <FloatingParticles />
      <Toast show={showToast} message="Message sent successfully!" theme={theme} />
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl text-center mb-8"
          id="contact-heading"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-center max-w-xl mx-auto mb-10"
        >
          Whether it's a question, a collaboration, or just a hello — feel free
          to reach out. I'd love to hear from you.
        </motion.p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!form.name || !form.email || !form.message) return;
            // Construct mailto link
            const subject = encodeURIComponent(`Message from ${form.name}`);
            const body = encodeURIComponent(
              `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
            );
            const mailto = `mailto:KAYARKARPAVANKALYANOFFICIAL@protonmail.com?subject=${subject}&body=${body}`;
            window.location.href = mailto;
            setSubmitted(true);
            setShowToast(true);
            setTimeout(() => setSubmitted(false), 4000);
            setTimeout(() => setShowToast(false), 3000);
            setForm({ name: "", email: "", message: "" });
          }}
          className="space-y-6"
          aria-label="Contact form"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 bg-transparent text-white rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#ffc300] focus:ring-2 focus:ring-[#ffc300]"
            aria-label="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 bg-black/30 text-white rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#ffc300] focus:ring-2 focus:ring-[#ffc300]"
            aria-label="Your Email"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 bg-black/30 text-white rounded-md border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#ffc300] focus:ring-2 focus:ring-[#ffc300]"
            aria-label="Your Message"
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#ffc300] text-black py-3 rounded-md hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-[#ffc300]"
            aria-label="Send Message"
          >
            {submitted ? "Message Sent ✅" : "Send Message"}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
