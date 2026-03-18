import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/ProjectData";
import { useTheme } from "../components/themeContext";
import { ExternalLink, Github, Folder, Code2, Layers, ArrowUpRight } from "lucide-react";
import Tilt from "../components/Tilt";
import ProjectModal from "../components/ProjectModal";
import Reveal from "../components/Reveal";

const GeometricNodes = () => {
    const nodes = useMemo(() => Array.from({ length: 10 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
    })), []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10 dark:opacity-20 transition-colors">
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    className="absolute rounded-full bg-[#ffc300]"
                    style={{
                        width: node.size,
                        height: node.size,
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        filter: "blur(0.5px)",
                    }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <Reveal direction="up" delay={index * 0.1}>
      <Tilt className="h-full">
        <motion.div
            style={{ transformStyle: "preserve-3d" }}
            className="group relative glass rounded-[2.5rem] border dark:border-white/5 border-black/10 overflow-hidden flex flex-col h-full cursor-pointer shadow-xl dark:shadow-none"
            onClick={() => onOpen(project)}
        >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none z-30">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 animate-shimmer" />
            </div>

            {/* Project Image / Visual */}
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[#ffc300]/10 via-white/3 to-transparent" style={{ transform: "translateZ(50px)" }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60" />
            <div className="flex items-center justify-center h-full">
                <Folder className="w-16 h-16 text-[#ffc300]/20 group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                <div className="flex items-center gap-2 text-[#ffc300] font-black text-sm uppercase tracking-widest">
                <ArrowUpRight className="w-5 h-5" /> View Details
                </div>
            </div>

            {/* Category Tag */}
            <div className="absolute top-6 left-6 z-30">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-[#ffc300]">
                {project.category}
                </span>
            </div>

            {/* Live indicator */}
            {project.link && project.link !== "#" && (
                <div className="absolute top-6 right-6 z-30 flex items-center gap-1.5 px-2 py-1 bg-green-500/20 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[9px] font-bold text-green-400 uppercase tracking-wider">Live</span>
                </div>
            )}
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow space-y-4" style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-xl font-bold dark:text-white text-slate-900 group-hover:text-[#ffc300] transition-colors">
                {project.title}
            </h3>
            <p className="dark:text-gray-400 text-slate-600 text-sm leading-relaxed line-clamp-2">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {project.tech.slice(0, 4).map((t, idx) => (
                <span key={idx} className="text-[10px] font-bold dark:text-gray-400 text-slate-500 dark:bg-white/5 bg-black/5 px-2 py-1 rounded-md uppercase tracking-tight">
                    {t}
                </span>
                ))}
                {project.tech.length > 4 && (
                <span className="text-[10px] font-bold text-[#ffc300]/60 px-2 py-1">
                    +{project.tech.length - 4} more
                </span>
                )}
            </div>
            </div>
        </motion.div>
      </Tilt>
    </Reveal>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="w-full min-h-screen py-24 px-6 relative overflow-hidden">
      <GeometricNodes />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 text-left">
            <Reveal direction="left">
                <h3 className="text-[#ffc300] font-black tracking-widest uppercase text-xs flex items-center gap-2">
                <Layers className="w-4 h-4" /> Selected Works
                </h3>
            </Reveal>
            <Reveal direction="left" delay={0.2}>
                <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white text-slate-900">
                Featured <span className="dark:text-white/50 text-slate-400">Projects</span>
                </h2>
            </Reveal>
            <Reveal direction="left" delay={0.4}>
                <p className="dark:text-gray-400 text-slate-600 text-sm max-w-lg font-medium">
                Click any card to see full details, tech stack, and highlights.
                </p>
            </Reveal>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 glass p-1.5 rounded-2xl border border-white/5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${
                  filter === cat
                    ? "bg-[#ffc300] text-black shadow-[0_0_15px_rgba(255,195,0,0.3)]"
                    : "text-gray-500 dark:hover:text-white hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onOpen={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center p-12 glass rounded-[3rem] border dark:border-white/5 border-black/10"
        >
          <Code2 className="w-12 h-12 text-[#ffc300] mx-auto mb-6" />
          <h4 className="text-2xl font-bold dark:text-white text-slate-900 mb-4">Want to see more?</h4>
          <p className="dark:text-gray-400 text-slate-500 mb-8 max-w-lg mx-auto text-sm">
            I'm constantly building and experimenting. Check out my GitHub for more projects and open-source contributions.
          </p>
          <a
            href="https://github.com/kayarkar007"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/10 hover:border-[#ffc300]/50 rounded-2xl font-bold transition-all hover:scale-105 text-sm"
          >
            <Github className="w-5 h-5" /> Visit GitHub Profile
          </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
