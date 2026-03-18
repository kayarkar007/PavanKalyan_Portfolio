import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/ProjectData";
import { useTheme } from "../components/themeContext";
import { Cpu, Layout, Database, Terminal, Zap, GitBranch, Globe } from "lucide-react";
import Tilt from "../components/Tilt";
import Reveal from "../components/Reveal";

const SkillBar = ({ skill, idx }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between items-center text-sm">
      <span className="dark:text-gray-300 text-slate-700 font-medium">{skill.name}</span>
      <span className="text-[#ffc300] font-mono text-xs">{skill.level}%</span>
    </div>
    <div className="h-1.5 w-full dark:bg-white/5 bg-black/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.4 + idx * 0.08 }}
        className="h-full bg-gradient-to-r from-[#ffc300] to-yellow-200 rounded-full shadow-[0_0_10px_rgba(255,195,0,0.3)]"
      />
    </div>
  </div>
);

const SkillChip = ({ name }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#ffc300]/10 border border-[#ffc300]/20 text-[#ffc300] hover:bg-[#ffc300]/20 transition-colors cursor-default">
    {name}
  </span>
);

const GeometricNodes = () => {
    const nodes = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5
    })), []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 transition-colors">
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    className="absolute rounded-full bg-[#ffc300]"
                    style={{
                        width: node.size,
                        height: node.size,
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                    }}
                    animate={{
                        opacity: [0.1, 0.4, 0.1],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: node.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

const Skills = () => {
  const { theme } = useTheme();

  const categories = [
    { id: "Frontend",    label: "Frontend",        icon: <Layout className="w-5 h-5" />,    color: "bg-blue-500/20",   glow: "from-blue-500/20" },
    { id: "Backend",     label: "Backend / APIs",   icon: <Cpu className="w-5 h-5" />,       color: "bg-green-500/20",  glow: "from-green-500/20" },
    { id: "Database",    label: "Databases",        icon: <Database className="w-5 h-5" />,  color: "bg-yellow-500/20", glow: "from-yellow-500/20" },
    { id: "Language",    label: "Languages",        icon: <Terminal className="w-5 h-5" />,  color: "bg-purple-500/20", glow: "from-purple-500/20" },
    { id: "Productivity",label: "DevOps & Tools",   icon: <GitBranch className="w-5 h-5" />, color: "bg-red-500/20",    glow: "from-red-500/20" },
  ];

  const BAR_LIMIT = 5; // first N skills show progress bars, rest show chips

  return (
    <section id="skills" className="w-full min-h-screen py-24 px-6 relative overflow-hidden">
      <GeometricNodes />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <Reveal direction="down">
              <h3 className="text-[#ffc300] font-bold tracking-widest uppercase text-xs">Technical Stack</h3>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white text-slate-900">
                Skills & <span className="dark:text-white/50 text-slate-400">Expertise</span>
              </h2>
          </Reveal>
          <p className="dark:text-gray-400 text-slate-600 max-w-xl text-sm leading-relaxed">
            A curated selection of tools, frameworks and technologies I work with daily to build production-grade applications.
          </p>
          <div className="w-16 h-1 bg-[#ffc300] rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => {
            const catSkills = skills.filter(s => s.category === cat.id);
            if (catSkills.length === 0) return null;

            const barSkills  = catSkills.slice(0, BAR_LIMIT);
            const chipSkills = catSkills.slice(BAR_LIMIT);

            return (
              <Reveal key={cat.id} direction="up" delay={idx * 0.1}>
                <Tilt className="h-full">
                  <motion.div
                    style={{ transformStyle: "preserve-3d" }}
                    className="glass p-8 rounded-[2rem] border dark:border-white/8 border-black/10 relative group overflow-hidden h-full flex flex-col gap-6"
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none z-30">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 animate-shimmer" />
                    </div>

                    {/* Hover glow */}
                    <div className={`absolute top-0 right-0 w-40 h-40 ${cat.color} blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Header */}
                  <div className="flex items-center gap-4 relative z-10" style={{ transform: "translateZ(30px)" }}>
                    <div className="text-[#ffc300] p-3 rounded-2xl bg-[#ffc300]/10 shrink-0" style={{ transform: "translateZ(40px)" }}>
                      {cat.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-black dark:text-white text-slate-900 uppercase tracking-wider">{cat.label}</h4>
                      <p className="text-[#ffc300]/60 text-xs font-mono">{catSkills.length} skills</p>
                    </div>
                  </div>

                  {/* Progress bar skills */}
                  <div className="space-y-4 relative z-10 flex-1">
                    {barSkills.map((skill, sIdx) => (
                      <SkillBar key={sIdx} skill={skill} idx={sIdx} />
                    ))}
                  </div>

                  {/* Chip skills (overflow) */}
                  {chipSkills.length > 0 && (
                    <div className="flex flex-wrap gap-2 relative z-10 pt-2 border-t dark:border-white/8 border-black/10">
                      {chipSkills.map((skill, cIdx) => (
                        <SkillChip key={cIdx} name={skill.name} />
                      ))}
                    </div>
                  )}
                </motion.div>
              </Tilt>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

