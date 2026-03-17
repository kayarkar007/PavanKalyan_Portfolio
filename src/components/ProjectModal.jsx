import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Tag, Calendar, Layers } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 dark:bg-black/80 bg-slate-900/40 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto dark:bg-[#0a0a0a]/90 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border dark:border-white/10 border-black/10 shadow-2xl"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2 rounded-full dark:bg-white/10 bg-black/5 hover:dark:bg-white/20 hover:bg-black/10 dark:text-white text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero image / visual */}
          <div className="relative aspect-video bg-gradient-to-br from-[#ffc300]/20 via-white/5 to-transparent rounded-t-[2.5rem] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <Layers className="w-20 h-20 text-[#ffc300]/30" />
            {/* Category badge */}
            <div className="absolute top-6 left-6">
              <span className="px-4 py-1.5 rounded-full bg-[#ffc300] text-black text-xs font-black uppercase tracking-widest">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-10 space-y-7">
            <div className="space-y-3">
              <h2 className="text-3xl font-black dark:text-white text-slate-900">{project.title}</h2>
              <p className="dark:text-gray-400 text-slate-600 text-sm leading-relaxed">{project.description}</p>
            </div>

            {/* Tech stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-[#ffc300] uppercase tracking-widest flex items-center gap-2">
                <Tag className="w-3.5 h-3.5" /> Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-xl text-xs font-bold dark:bg-white/8 bg-black/5 border dark:border-white/10 border-black/5 dark:text-gray-300 text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key highlights */}
            {project.highlights && (
              <div className="space-y-3">
                <h4 className="text-xs font-black text-[#ffc300] uppercase tracking-widest">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm dark:text-gray-300 text-slate-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ffc300] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4 pt-2">
              {project.github && project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 glass border dark:border-white/10 border-black/10 hover:border-[#ffc300]/40 rounded-2xl text-sm font-bold dark:text-white text-slate-900 transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" /> View Source
                </a>
              )}
              {project.link && project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#ffc300] text-black rounded-2xl text-sm font-black transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,195,0,0.3)]"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
              {(!project.link || project.link === "#") && (!project.github || project.github === "#") && (
                <div className="flex-1 flex items-center justify-center gap-2 py-4 glass border border-white/8 rounded-2xl text-sm font-bold text-gray-500 cursor-default">
                  Private / In Development
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
