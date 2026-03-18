import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../components/themeContext";
import { User, Code2, Rocket, BrainCircuit } from "lucide-react";
import Reveal from "../components/Reveal";

const GeometricNodes = () => {
    const nodes = useMemo(() => Array.from({ length: 15 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        duration: Math.random() * 20 + 20,
    })), []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 dark:opacity-30">
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    className="absolute rounded-full bg-[#ffc300]"
                    style={{
                        width: node.size,
                        height: node.size,
                        left: `${node.initialX}%`,
                        top: `${node.initialY}%`,
                        filter: "blur(1px)",
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, 50, 0],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: node.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

const About = () => {
  const { theme } = useTheme();

  const stats = [
    { label: "Year Experience", value: "1+", icon: <Rocket className="w-5 h-5" /> },
    { label: "Projects Completed", value: "10+", icon: <Code2 className="w-5 h-5" /> },
    { label: "Technical Skills", value: "15+", icon: <BrainCircuit className="w-5 h-5" /> },
  ];

  return (
    <section id="about" className="w-full min-h-screen py-24 px-6 relative overflow-hidden">
      <GeometricNodes />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Reveal direction="left" delay={0.2}>
                <h3 className="text-[#ffc300] font-bold tracking-widest uppercase text-xs flex items-center gap-2">
                  <User className="w-4 h-4" /> About Me
                </h3>
              </Reveal>
              <Reveal direction="left" delay={0.4}>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight dark:text-white text-slate-900">
                  Passion Meets <span className="dark:text-white/50 text-slate-400">Performance</span>
                </h2>
              </Reveal>
            </div>

            <div className="space-y-6 dark:text-gray-300 text-slate-700 text-lg leading-relaxed">
              <Reveal direction="up" delay={0.6}>
                <p>
                  I am a results-driven <span className="dark:text-white text-black font-semibold">Full Stack Developer</span> with 
                  a deep passion for creating scalable, production-ready web applications. My expertise 
                  lies in the <span className="text-[#ffc300] font-bold">MERN stack and Next.js</span>, where I build 
                  clean architecture and translate real-world problems into reliable technical solutions.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.8}>
                <p>
                  With over a year of hands-on project experience, I've mastered the art of 
                  balancing robust backend logic with intuitive, premium frontend experiences. 
                  I believe in ownership, continuous learning, and building software that 
                  delivers actual value.
                </p>
              </Reveal>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <Reveal key={index} direction="up" delay={1 + index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass p-6 rounded-2xl border dark:border-white/10 border-black/5 group transition-all hover:border-[#ffc300]/40 shadow-xl dark:shadow-none"
                  >
                    <div className="text-[#ffc300] mb-3 group-hover:rotate-12 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-black dark:text-white text-slate-900">{stat.value}</div>
                    <div className="text-[10px] dark:text-gray-500 text-slate-500 font-bold uppercase tracking-wider mt-1">{stat.label}</div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Visual Side (Geometric Card) */}
          <Reveal direction="right" delay={0.5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
                <div className="aspect-square glass rounded-[3rem] border dark:border-white/10 border-black/5 overflow-hidden relative group p-1 shadow-2xl dark:shadow-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffc300]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="h-full w-full rounded-[2.8rem] dark:bg-black/20 bg-white/40 flex items-center justify-center p-12">
                         <div className="space-y-8 text-center">
                            <div className="relative">
                                <div className="absolute inset-0 blur-2xl bg-[#ffc300]/20 animate-pulse" />
                                <Code2 className="w-24 h-24 mx-auto text-[#ffc300] relative z-10" />
                            </div>
                            <h4 className="text-2xl font-black dark:text-white text-slate-900 leading-tight">Modern Stack <br/><span className="text-[#ffc300]">Expertise</span></h4>
                            <div className="flex justify-center gap-3">
                                {[1,2,3].map(i => (
                                    <motion.div 
                                        key={i} 
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                        className="w-2 h-2 rounded-full bg-[#ffc300]" 
                                    />
                                ))}
                            </div>
                         </div>
                    </div>
                </div>
                {/* Abstract Glows */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ffc300]/10 blur-[100px] rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/5 blur-[120px] rounded-full" />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
