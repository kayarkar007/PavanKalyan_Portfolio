import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rekha Devi",
    role: "Owner, KK Events",
    company: "KK Events",
    avatar: "RD",
    rating: 5,
    text: "Pavan completely transformed our business operations. He built us a system from scratch that made managing our event bookings and vendor coordination so much easier. Very professional and hard-working.",
  },
  {
    name: "Kalyan Rao",
    role: "Manager, KK Water Plant",
    company: "KK Water Plant",
    avatar: "KR",
    rating: 5,
    text: "The delivery tracking and billing system Pavan developed for our water plant saved us hours every day. He understood our needs perfectly and delivered a clean, user-friendly solution.",
  },
  {
    name: "Sai Teja M.",
    role: "Fellow Developer",
    company: "Open Source Collaborator",
    avatar: "ST",
    rating: 5,
    text: "Worked alongside Pavan on the FlowLabs project. His understanding of DAG architecture and React Flow is exceptional. He writes clean, maintainable code and is always eager to solve complex problems creatively.",
  },
  {
    name: "Priya S.",
    role: "Mentor & Reviewer",
    company: "Tech Community",
    avatar: "PS",
    rating: 5,
    text: "Pavan consistently goes above and beyond. His portfolio of projects — from real-time chat apps to e-commerce platforms — showcases a rare blend of backend depth and frontend polish for someone early in their career.",
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-[#ffc300] text-[#ffc300]" />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="w-full py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h3 className="text-[#ffc300] font-medium tracking-widest uppercase text-sm">Testimonials</h3>
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-slate-900">
            What People <span className="dark:text-white/50 text-slate-900/50">Say</span>
          </h2>
          <p className="dark:text-gray-400 text-slate-600 max-w-xl text-sm leading-relaxed">
            Kind words from clients, collaborators, and mentors I've had the pleasure of working with.
          </p>
          <div className="w-16 h-1 bg-[#ffc300] rounded-full mt-2" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-[2rem] border dark:border-white/8 border-black/10 relative overflow-hidden group hover:border-[#ffc300]/20 transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc300]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />

              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-10 h-10 text-[#ffc300]" />
              </div>

              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Text */}
              <p className="dark:text-gray-300 text-slate-700 text-sm leading-relaxed mt-5 mb-7 relative z-10 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t dark:border-white/8 border-black/10">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ffc300] to-yellow-600 flex items-center justify-center text-black font-black text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="dark:text-white text-slate-900 font-bold text-sm">{t.name}</p>
                  <p className="dark:text-gray-500 text-slate-500 text-xs">{t.role}</p>
                  <p className="text-[#ffc300]/60 text-xs font-medium">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
