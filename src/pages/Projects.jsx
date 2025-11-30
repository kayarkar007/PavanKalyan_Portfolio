// ProjectShowcase.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingParticles } from "./Home";
import { useTheme } from "../components/themeContext";

const projects = [{
    title: "Advance Project Management App",
    year: "2025",
    description:
      "A robust and scalable full-stack project management platform designed to streamline team collaboration, task tracking, and workflow automation.",
    techStack: ["React","TailwindCSS","Node.js","Express.js","MongoDB","Mongoose","JWT","Multer","bcrypt"],
    icon: "📊",
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Advance Job Application Tracker",
    year: "2025",
    description:
      "A full-featured, intelligent Job Application Tracker built to help job seekers efficiently manage, monitor, and optimize their job search process.",
    techStack: ["React","TailwindCSS","Node.js","Express.js","MongoDB","Mongoose","JWT","Multer","bcrypt"],
    icon: "💼",
    color: "from-green-500 to-blue-500",
  },
  {
    title: "Portfolio Website",
    year: "2025",
    description:
      "A personal portfolio built with React and Tailwind CSS, featuring animations and a clean UI.",
    techStack: ["React", "Tailwind", "Framer Motion","React Icons","Context API"],
    icon: "🖥️",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "E-commerce App",
    year: "2024",
    description:
      "Developed a fully functional e-commerce app with product filters, cart, and checkout integration.",
    techStack: ["React", "Node.js", "MongoDB"],
    icon: "🛒",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Task Manager API",
    year: "2024",
    description:
      "Built a RESTful API with JWT auth, user roles, and MongoDB integration for task management.",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    icon: "📋",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Blog Platform",
    year: "2023",
    description:
      "A blogging platform with user authentication, markdown support, and comment features.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    icon: "✍️",
    color: "from-pink-500 to-red-500",
  },
  
];

const ProjectCard = ({ project, index, onView, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
    viewport={{ once: true }}
    className={`backdrop-blur-[1.5px] p-6 rounded-xl border transition duration-200 hover:border-[#ffc300]/60 
      ${theme === "dark" ? "bg-black/20 border-gray-700" : "bg-white/80 border-gray-300"}`}
  >
    <div className="flex items-center gap-4 mb-4">
      <div
        className={`w-12 h-12 flex items-center justify-center text-2xl rounded-full bg-gradient-to-r ${project.color}`}
      >
        {project.icon}
      </div>
      <div>
        <h3 className={`ProjectTitle text-xl max320:text[1.1rem] ${theme === "dark" ? "text-white" : "text-black"}`}>{project.title}</h3>
        <p className="text-[#ffc300] text-sm">{project.year}</p>
      </div>
    </div>
    <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-sm mb-4`}>{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.techStack.map((tech, i) => (
        <span
          key={i}
          className={`text-xs px-2 py-1 rounded-full border 
            ${theme === "dark" ? "bg-[#ffc300]/20 text-[#ffc300] border-[#ffc300]/30" : "bg-[#ffc300]/10 text-[#ffc300] border-[#ffc300]/40"}`}
        >
          {tech}
        </span>
      ))}
    </div>
    <button
      onClick={() => onView(project)}
      className="mt-2 px-4 py-2 bg-[#ffc300] text-black rounded-full hover:bg-yellow-400 transition"
      aria-label={`View details for ${project.title}`}
    >
      View Project
    </button>
  </motion.div>
);

const ProjectModal = ({ project, onClose, theme }) => (
  <AnimatePresence>
    {project && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`rounded-xl p-8 max-w-lg w-full relative shadow-2xl ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
          initial={{ scale: 0.8, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 100 }}
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white text-2xl"
            aria-label="Close project details"
          >
            ×
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 flex items-center justify-center text-2xl rounded-full bg-gradient-to-r ${project.color}`}>{project.icon}</div>
            <div>
              <h3 className="text-2xl text-black dark:text-white">{project.title}</h3>
              <p className="text-[#ffc300] text-sm">{project.year}</p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className={`text-xs px-2 py-1 rounded-full border ${
                  theme === "dark"
                    ? "bg-[#ffc300]/20 text-[#ffc300] border-[#ffc300]/30"
                    : "bg-[#ffc300]/10 text-[#ffc300] border-[#ffc300]/40"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mb-4">
            <span className="block text-gray-400 text-xs mb-2">Screenshots/Links coming soon...</span>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { theme } = useTheme();
  return (
    <section
      id="projects"
      className={`relative w-full min-h-screen py-16 px-4 overflow-hidden ${theme === "dark" ? "bg-black/10 text-white" : "bg-white/80 text-black" }`}
    >
      <FloatingParticles />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl">My Projects</h2>
          <span className="block w-20 h-1 bg-[#ffc300] mx-auto mt-4 rounded-full"></span>
          <p className={`projectDis ${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-gray-300 text-lg max-w-xl mx-auto mt-4 max320:text-14px `}>
            Each project reflects my journey, skills, and creativity as a
            developer. Explore some of the work I'm proud of.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} onView={setSelectedProject} theme={theme} />
          ))}
        </div>
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} theme={theme} />
      </div>
    </section>
  );
};

export default ProjectShowcase;
