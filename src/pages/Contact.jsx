import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";

// ─── EmailJS config ───────────────────────────────────────────────────────────
// To activate real email sending:
// 1. Go to https://www.emailjs.com → sign up free
// 2. Create a service (Gmail) → note the Service ID
// 3. Create an email template → note the Template ID
// 4. Copy your Public Key from Account → API Keys
// Then replace the placeholders below with your real values.
const EMAILJS_SERVICE_ID  = "service_portfolio";   // ← replace with yours
const EMAILJS_TEMPLATE_ID = "template_contact";    // ← replace with yours
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";     // ← replace with yours
// ─────────────────────────────────────────────────────────────────────────────

const ContactPage = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "kayarkarpavankalyanofficial@protonmail.com", href: "mailto:kayarkarpavankalyanofficial@protonmail.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91-7659989336", href: "tel:+917659989336" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Kagaznagar, Telangana, India", href: "#" },
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      // Try EmailJS first
      if (EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback to mailto if EmailJS not configured
        const subject = encodeURIComponent(`Portfolio Contact: ${form.subject || form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`);
        window.open(`mailto:kayarkarpavankalyanofficial@protonmail.com?subject=${subject}&body=${body}`);
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Failed to send. Please email me directly at the address above.");
    }

    // Reset status after 5s
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="w-full min-h-screen py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h3 className="text-[#ffc300] font-medium tracking-widest uppercase text-sm">Contact</h3>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-900">Let's Build <span className="dark:text-white/50 text-slate-900/50">Something Great</span></h2>
          <p className="dark:text-gray-400 text-slate-600 max-w-xl text-sm leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you. Drop a message below!
          </p>
          <div className="w-16 h-1 bg-[#ffc300] rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass p-8 rounded-[2rem] border dark:border-white/8 border-black/10 space-y-8">
              <h4 className="text-xl font-bold flex items-center gap-3 dark:text-white text-slate-900">
                <MessageSquare className="text-[#ffc300]" /> Contact Information
              </h4>
              <p className="dark:text-gray-400 text-slate-600 text-sm leading-relaxed">
                Open to new opportunities, freelance projects, and interesting collaborations. 
                I typically respond within 24 hours.
              </p>

              <div className="space-y-5">
                {contactInfo.map((info, idx) => (
                  <a
                    key={idx}
                    href={info.href}
                    className="flex items-center gap-4 group hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl dark:bg-white/5 bg-black/5 text-[#ffc300] group-hover:bg-[#ffc300] group-hover:text-black transition-all shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest dark:text-gray-500 text-slate-500 font-bold">{info.label}</p>
                      <p className="dark:text-white text-slate-900 text-sm font-medium group-hover:text-[#ffc300] transition-colors break-all">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-white/5 flex gap-4">
                {[
                  { href: "https://github.com/kayarkar007",              icon: <Github className="w-5 h-5" />,   label: "GitHub" },
                  { href: "https://www.linkedin.com/in/pavankalyan-dev", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                  { href: "mailto:kayarkarpavankalyanofficial@protonmail.com", icon: <Mail className="w-5 h-5" />, label: "Email" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer"
                    aria-label={s.label}
                    className="p-3 rounded-2xl dark:bg-white/5 bg-black/5 hover:bg-[#ffc300] hover:text-black dark:text-gray-400 text-slate-600 transition-all hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="glass p-6 rounded-2xl border border-[#ffc300]/20 flex items-center gap-4">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc300] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ffc300]" />
              </span>
              <div>
                <p className="dark:text-white text-slate-900 font-bold text-sm">Available for Work</p>
                <p className="dark:text-gray-400 text-slate-500 text-xs">Open to full-time & freelance opportunities</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-10 rounded-[2.5rem] border dark:border-white/8 border-black/10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold dark:text-gray-500 text-slate-500 uppercase tracking-widest ml-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full dark:bg-white/5 bg-black/[0.03] border dark:border-white/10 border-black/[0.08] rounded-2xl p-4 dark:text-white text-slate-900 placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-[#ffc300]/50 transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold dark:text-gray-500 text-slate-500 uppercase tracking-widest ml-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full dark:bg-white/5 bg-black/[0.03] border dark:border-white/10 border-black/[0.08] rounded-2xl p-4 dark:text-white text-slate-900 placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-[#ffc300]/50 transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold dark:text-gray-500 text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full dark:bg-white/5 bg-black/[0.03] border dark:border-white/10 border-black/[0.08] rounded-2xl p-4 dark:text-white text-slate-900 placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-[#ffc300]/50 transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold dark:text-gray-500 text-slate-500 uppercase tracking-widest ml-1">Message *</label>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full dark:bg-white/5 bg-black/[0.03] border dark:border-white/10 border-black/[0.08] rounded-2xl p-4 dark:text-white text-slate-900 placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-[#ffc300]/50 transition-colors resize-none text-sm"
                />
              </div>

              {/* Status feedback */}
              {status === "success" && (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  Message sent! I'll get back to you within 24 hours.
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-5 bg-[#ffc300] text-black font-black rounded-2xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,195,0,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-sm uppercase tracking-wider"
              >
                {status === "sending" ? (
                  <><span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Sending...</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
