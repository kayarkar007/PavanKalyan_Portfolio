import React from "react";
import { motion } from "framer-motion";
import { workExperience } from "../data/WorkData";
import { useTheme } from "../components/themeContext";
import { Briefcase, Calendar, MapPin, GraduationCap, Trophy } from "lucide-react";

const Journey = () => {
  const { theme } = useTheme();

  const education = [
    {
      title: "Bachelor of Technology – Computer Science & Engineering",
      institution: "Jawaharlal Nehru Technological University Hyderabad",
      year: "2020",
      stats: "CGPA: 6.4"
    },
    {
      title: "Senior Secondary (MPC)",
      institution: "Narayana Junior College",
      year: "2016",
      stats: "89.7%"
    }
  ];

  const certifications = [
    "Full Stack Web Development with MERN Stack & GenAI – Udemy (2025)",
    "HackerRank: Node.js (Intermediate), JavaScript (Intermediate), REST API (Intermediate)",
    "Web Development with MERN Stack – TuteDude (2025)",
    "Data Analytics Job Simulation – Deloitte Australia (2025)"
  ];

  return (
    <section id="journey" className="w-full min-h-screen py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h3 className="text-[#ffc300] font-medium tracking-widest uppercase text-sm">Experience & Education</h3>
          <h2 className="text-4xl md:text-5xl font-bold">The Professional <span className="text-white/50">Path</span></h2>
          <div className="w-16 h-1 bg-[#ffc300] rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold flex items-center gap-3 mb-8">
              <Briefcase className="text-[#ffc300]" /> Work Experience
            </h4>
            
            <div className="space-y-8 relative before:absolute before:left-[1.5rem] before:top-0 before:bottom-0 before:w-[2px] before:bg-white/5">
              {workExperience.map((work, idx) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 bg-black border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:border-[#ffc300]/50 transition-colors">
                    <div className="w-3 h-3 bg-[#ffc300] rounded-full scale-0 group-hover:scale-100 transition-transform shadow-[0_0_10px_#ffc300]" />
                  </div>
                  
                  <div className="glass p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h5 className="text-xl font-bold text-white group-hover:text-[#ffc300] transition-colors">{work.title}</h5>
                        <p className="text-[#ffc300]/80 font-medium">{work.company}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest mb-1">
                          <Calendar className="w-3 h-3" /> {work.duration}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest">
                          <MapPin className="w-3 h-3" /> {work.location}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {work.description.map((point, pIdx) => (
                        <li key={pIdx} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                          <span className="text-[#ffc300] mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h4 className="text-2xl font-bold flex items-center gap-3 mb-8">
                <GraduationCap className="text-[#ffc300]" /> Education
              </h4>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass p-6 rounded-2xl border-white/5 hover:border-white/10"
                  >
                    <div className="text-[#ffc300] text-xs font-bold mb-2 uppercase tracking-tighter">{edu.year}</div>
                    <h5 className="text-lg font-bold text-white mb-1">{edu.title}</h5>
                    <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                    <div className="inline-block px-3 py-1 bg-[#ffc300]/10 text-[#ffc300] text-xs font-bold rounded-lg uppercase">
                      {edu.stats}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-2xl font-bold flex items-center gap-3 mb-8">
                <Trophy className="text-[#ffc300]" /> Certifications
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 glass rounded-xl border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#ffc300]" />
                    <p className="text-sm text-gray-300">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
