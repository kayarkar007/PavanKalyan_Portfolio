import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../components/themeContext";
import { User, Code2, Rocket, BrainCircuit } from "lucide-react";

const About = () => {
  const { theme } = useTheme();

  const stats = [
    { label: "Year Experience", value: "1+", icon: <Rocket className="w-5 h-5" /> },
    { label: "Projects Completed", value: "10+", icon: <Code2 className="w-5 h-5" /> },
    { label: "Technical Skills", value: "15+", icon: <BrainCircuit className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="w-full min-h-screen py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-[#ffc300] font-medium tracking-widest uppercase text-sm flex items-center gap-2">
                <User className="w-4 h-4" /> About Me
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight dark:text-white text-slate-900">
                Passion Meets <span className="dark:text-white/50 text-slate-600">Performance</span>
              </h2>
            </div>

            <div className="space-y-6 dark:text-gray-400 text-slate-600 text-lg leading-relaxed">
              <p>
                I am a results-driven <span className="dark:text-white text-slate-900 font-medium">Full Stack Developer</span> with 
                a deep passion for creating scalable, production-ready web applications. My expertise 
                lies in the <span className="text-[#ffc300]">MERN stack and Next.js</span>, where I build 
                clean architecture and translate real-world problems into reliable technical solutions.
              </p>
              <p>
                With over a year of hands-on project experience, I've mastered the art of 
                balancing robust backend logic with intuitive, premium frontend experiences. 
                I believe in ownership, continuous learning, and building software that 
                delivers actual value.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-2xl border-white/10 group transition-all hover:border-[#ffc300]/30"
                >
                  <div className="text-[#ffc300] mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold dark:text-white text-slate-900">{stat.value}</div>
                  <div className="text-xs dark:text-gray-500 text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Side (Glass Card Placeholder) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-[2rem] border-white/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffc300]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                     <div className="space-y-8 text-center">
                        <Code2 className="w-24 h-24 mx-auto text-[#ffc300]/50" />
                        <h4 className="text-xl font-medium dark:text-gray-300 text-slate-700">Clean Code & Scalable Systems</h4>
                        <div className="flex justify-center gap-2">
                            {[1,2,3,4,5].map(i => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#ffc300]/30" />
                            ))}
                        </div>
                     </div>
                </div>
            </div>
            {/* Abstract Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ffc300]/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#ffc300]/5 blur-3xl rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
