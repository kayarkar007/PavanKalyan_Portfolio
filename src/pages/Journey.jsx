import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FloatingParticles } from "./Home";
import { useTheme } from "../components/themeContext";

// Timeline data
const timelineData = [
  {
    year: "2020",
    title: "Graduation",
    description: "Completed my degree with dreams of becoming a developer",
    icon: "🎓",
    type: "milestone",
    color: "from-blue-500 to-purple-600",
  },
  {
    year: "2020-2024",
    title: "The Challenging Years",
    description:
      "COVID-19 pandemic brought unexpected financial challenges to my family",
    icon: "🌪️",
    type: "challenge",
    color: "from-red-500 to-orange-600",
  },
  {
    year: "2021-2023",
    title: "Entrepreneurial Spirit",
    description:
      "Started and managed business ventures to support my family during tough times",
    icon: "💼",
    type: "growth",
    color: "from-green-500 to-teal-600",
  },
  {
    year: "2024",
    title: "Stability Restored",
    description:
      "Family situation improved, giving me the opportunity to pursue my passion",
    icon: "🌅",
    type: "recovery",
    color: "from-yellow-500 to-orange-500",
  },
  {
    year: "Present",
    title: "Back to My Passion",
    description: "Now fully dedicated to mastering Full Stack Web Development",
    icon: "🚀",
    type: "passion",
    color: "from-purple-500 to-pink-600",
  },
];

// Skills gained during the gap
const skillsGained = [
  {
    skill: "Business Management",
    description:
      "Learned to manage operations, finances, and strategic planning",
    icon: "📊",
  },
  {
    skill: "Problem Solving",
    description:
      "Developed creative solutions under pressure and resource constraints",
    icon: "🧩",
  },
  {
    skill: "Leadership",
    description:
      "Led teams and made critical decisions during challenging times",
    icon: "👥",
  },
  {
    skill: "Resilience",
    description: "Built mental strength and adaptability through adversity",
    icon: "💪",
  },
  {
    skill: "Financial Literacy",
    description:
      "Gained deep understanding of budgeting, investments, and cash flow",
    icon: "💰",
  },
  {
    skill: "Communication",
    description:
      "Enhanced interpersonal skills through client interactions and negotiations",
    icon: "🗣️",
  },
];

// Floating elements for visual appeal
// const FloatingElements = () => {
//   const elements = Array.from({ length: 15 }, (_, i) => i);

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {elements.map((element) => (
//         <motion.div
//           key={element}
//           className="absolute w-2 h-2 bg-[#ffc300]/20 rounded-full"
//           initial={{
//             x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
//             y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
//           }}
//           animate={{
//             x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
//             y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
//           }}
//           transition={{
//             duration: Math.random() * 20 + 20,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// Timeline item component
const TimelineItem = ({ item, index, isVisible, ClassName }) => {
  const isLeft = index % 2 === 0;
  // let ClassName = "";
  isLeft ? (ClassName = "Left") : (ClassName = "Right");

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={
        isVisible
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: isLeft ? -100 : 100 }
      }
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`${ClassName} TimeLine flex items-center mb-12 max320:w-auto max320:opacity-100 max320:mb-[4rem] max320:flex max320:flex-col ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div
        className={`TimeLineBox w-5/12 max320:w-[100vw] max320:p-0 max320:py-0 max320:px-[1rem] ${
          isLeft ? "text-right pr-8" : "text-left pl-8"
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="TimeLinePadding bg-black/40 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-[#ffc300]/50 transition-all duration-300"
        >
          <div
            className={` TimeLinePosition flex items-center gap-3 mb-3 max320:flex max320:justify-center max320:text-center max320:gap-1 ${
              isLeft ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={` TimeLineIcon w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl`}
            >
              {item.icon}
            </div>
            <div>
              <h3 className="TimeLineTitle text-xl text-white max320:text-[1rem]  ">
                {item.title}
              </h3>
              <p className="TimeLineYear text-[#ffc300] max320:text-[0.8rem] ">
                {item.year}
              </p>
            </div>
          </div>
          <p className="TimeLineDis text-gray-300 leading-relaxed max320:text-[.7rem] max320:text-center  ">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Timeline line and dot */}
      <div className="JourneyLine w-1/12 flex justify-center ">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-black z-10 relative`}
          />
          {index < timelineData.length - 1 && (
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-[#ffc300] to-transparent" />
          )}
        </div>
      </div>

      {/* Empty space for alternating layout */}
      <div className=" EmptySpace w-5/12" />
    </motion.div>
  );
};

// Skills gained component
const SkillsGainedSection = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="mt-20"
    >
      <h3 className=" text-3xl sm:text-4xl text-center mb-12 text-white">
        Skills Gained During This Journey
        <span className="block w-20 h-1 bg-[#ffc300] mx-auto mt-4 rounded-full" />
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsGained.map((skill, index) => (
          <motion.div
            key={skill.skill}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-[#ffc300]/50 transition-all duration-300 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <h4 className="text-xl text-white mb-3 group-hover:text-[#ffc300] transition-colors duration-300">
              {skill.skill}
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Main Journey component
const Journey = () => {
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

    const sections = document.querySelectorAll("[data-journey-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="journey"
      className={` JourneyMain relative w-full min-h-screen py-16 sm:py-20 px-4 overflow-hidden max320:w-[100vw] max320:m-auto ${
        theme === "dark" ? "bg-black/10 text-white" : "bg-white/80 text-black"
      }`}
    >
      <FloatingParticles />

      <div className=" timeLineMain relative z-10 w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="my-5 text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 text-center relative">
            My Journey
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-1 bg-[#ffc300] rounded-full"></span>
          </h1>
          <p
            className={
              theme === "dark"
                ? "text-sm sm:text-base lg:text-lg leading-relaxed text-gray-100"
                : "text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800"
            }
          >
            Every journey has its challenges, and mine taught me that sometimes
            the longest routes lead to the most meaningful destinations. Here's
            my story of resilience, growth, and unwavering passion for
            technology.
          </p>
        </motion.div>

        {/* Timeline */}
        <div id="timeline" data-journey-section className="relative max320:w-[70%] max320:m-auto max320:py-auto max320:px-auto ">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isVisible={visibleSections.timeline}
            />
          ))}
        </div>

        {/* Skills Gained Section */}
        <div id="skills-gained" data-journey-section>
          <SkillsGainedSection isVisible={visibleSections["skills-gained"]} />
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-[#ffc300]/10 to-[#ffed4e]/10 border border-[#ffc300]/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl sm:text-3xl mb-6 text-[#ffc300]">
            Why This Journey Matters
          </h3>
          <div
            className={`WhyJourney ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }text-gray-300 text-lg leading-relaxed  max-w-4xl mx-auto space-y-4 max320:text-[14px] `}
          >
            <p>
              The 4-year gap in my career wasn't a setback—it was a masterclass
              in real-world problem solving. While the pandemic brought
              unprecedented challenges to my family, it also revealed my true
              character.
            </p>
            <p>
              I learned that being a developer isn't just about writing code;
              it's about finding solutions, adapting to change, and never giving
              up on your dreams. The business skills I gained, the leadership
              experience I earned, and the resilience I built make me a stronger
              developer today.
            </p>
            <p className="text-[#ffc300] text-xl">
              Now, I'm not just passionate about development—I'm equipped with
              real-world experience that most developers never get. I'm ready to
              bring this unique perspective to create amazing digital solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
