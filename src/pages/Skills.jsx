import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FloatingParticles } from "./Home";
import { useTheme } from "../components/themeContext";

// Skill data organized by categories
const skillsData = {
  frontend: {
    title: "Frontend Development",
    icon: "🎨",
    color: "from-blue-500 to-purple-600",
    skills: [
      { name: "React.js", level: 90, icon: "⚛️" },
      { name: "JavaScript (ES6+)", level: 85, icon: "🟨" },
      { name: "TypeScript", level: 80, icon: "🔷" },
      { name: "HTML5", level: 95, icon: "🧡" },
      { name: "CSS3", level: 90, icon: "💙" },
      { name: "Tailwind CSS", level: 85, icon: "🎨" },
      { name: "React Bits", level: 80, icon: "⚛️" },
      { name: "framer-motion", level: 75, icon: "🏃‍♂️" },
      { name: "Redux", level: 75, icon: "🔄" },
      { name: "Next.js", level: 70, icon: "⚡" },
    ],
  },
  backend: {
    title: "Backend Development",
    icon: "⚙️",
    color: "from-green-500 to-teal-600",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "🚀" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "Mongoose", level: 75, icon: "🔗" },
      { name: "RESTful APIs", level: 85, icon: "🌐" },
      { name: "JWT Authentication", level: 80, icon: "🔐" },
      { name: "Socket.io", level: 70, icon: "⚡" },
    ],
  },
  tools: {
    title: "Tools & Technologies",
    icon: "🛠️",
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "Git & GitHub", level: 90, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Postman", level: 85, icon: "📮" },
      { name: "AWS", level: 55, icon: "☁️" },
      { name: "Figma", level: 70, icon: "🎨" },
      { name: "Webpack", level: 65, icon: "📦" },
      { name: "npm/yarn", level: 85, icon: "📦" },
    ],
  },
  frameworks: {
    title: "Frameworks & Libraries",
    icon: "📚",
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Express", level: 80, icon: "🚀" },
      { name: "Bootstrap", level: 85, icon: "🅱️" },
      { name: "Material-UI", level: 75, icon: "🎨" },
      { name: "Framer Motion", level: 70, icon: "🎭" },
      { name: "Axios", level: 85, icon: "🌐" },
      { name: "React Router", level: 85, icon: "🛣️" },
      { name: "Styled Components", level: 75, icon: "💅" },
    ],
  },
};

// Individual skill bar component
const SkillBar = ({ skill, index, isVisible, theme }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4 group "
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-sm sm:text-base`}
          >
            {skill.name}
          </span>
        </div>
        <span className="text-[#ffc300] text-sm">
          {animatedLevel}%
        </span>
      </div>
      <div
        className={`${
          theme === "dark" ? "bg-gray-700" : "bg-gray-300"
        } w-full rounded-full h-2 overflow-hidden`}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-[#ffc300] to-[#ffed4e] rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        >
          <motion.div
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent ${
              theme === "dark" ? "via-white/30" : "via-black/20"
            } to-transparent`}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Skill category component
const SkillCategory = ({ data, index, isVisible, theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`backdrop-blur-[1.5px] rounded-xl p-6 hover:border-[#ffc300]/50 transition-all duration-300 group border ${
        theme === "dark"
          ? "bg-transparent border-gray-700"
          : "bg-transparent border-gray-300"
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-r ${data.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}
        >
          {data.icon}
        </div>
        <h3
          className={`text-xl sm:text-2xl transition-colors duration-300 group-hover:text-[#ffc300] ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {data.title}
        </h3>
      </div>
      <div className="space-y-3">
        {data.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            index={skillIndex}
            isVisible={isVisible}
            theme={theme}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Floating particles background

// Main Skills component
const Skills = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("[data-skill-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className={`relative w-full min-h-screen py-16 sm:py-20 px-4 overflow-hidden ${
        theme === "dark" ? "bg-black/10 text-white" : "bg-white/80 text-black"
      }`}
    >
      <FloatingParticles />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1
            className={`my-5 text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-center relative ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            My Skills
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-[#ffc300] rounded-full"></span>
          </h1>
          <p
            className={theme === "dark" ? "text-sm sm:text-base lg:text-lg leading-relaxed text-gray-100" : "text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800"}
          >
            A comprehensive overview of my technical expertise and proficiency
            levels across various technologies and tools in web development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(skillsData).map(([category, data], index) => (
            <div key={category} id={`skill-${category}`} data-skill-section>
              <SkillCategory
                category={category}
                data={data}
                index={index}
                isVisible={visibleSections[`skill-${category}`]}
                theme={theme}
              />
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-[#ffc300]/10 to-[#ffed4e]/10 border border-[#ffc300]/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#ffc300]">
            Ready to Build Amazing Projects
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                25+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Technologies
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                2+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                10+
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Projects Built
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                100%
              </div>
              <div className="text-gray-300 text-sm sm:text-base">
                Dedication
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;
