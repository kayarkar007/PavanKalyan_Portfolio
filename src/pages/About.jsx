import React from "react";
import { Scroll } from "../App";
import { useTheme } from "../components/themeContext";


// CORRECTION 13: Complete rewrite of About component for better responsive design
const About = () => {
  const { theme } = useTheme();
  return (
    <section 
      id="about" 
      className={`w-full min-h-screen font-poppins flex justify-center items-center py-16 sm:py-20 px-4 ${theme === "dark" ? "bg-black/10 text-white" : "bg-white/80 text-black"}`}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center">
        {/* CORRECTION 14: Improved heading with better responsive design */}
        <h1 className="my-5 text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12 text-center relative">
          About Me
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-1 bg-[#ffc300] rounded-full"></span>
        </h1>
        
        {/* CORRECTION 15: Improved paragraph structure with better responsive text */}
        <div className="space-y-6 text-center max-w-5xl">
          <p className={theme === "dark" ? "font-light text-sm sm:text-base lg:text-lg leading-relaxed text-gray-100" : "font-light text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800"}>
            Passionate and dedicated{" "}
            <span className="text-[#ffc300] font-semibold">
              Full Stack Web Developer
            </span>{" "}
            with hands-on experience in building responsive and dynamic web
            applications using the MERN stack (MongoDB, Express.js, React.js,
            Node.js). Proficient in writing clean, maintainable code, creating
            beautiful user interfaces, and developing secure, scalable backend
            APIs.
          </p>
          
          <p className={theme === "dark" ? "font-light text-sm sm:text-base lg:text-lg leading-relaxed text-gray-100" : "font-light text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800"}>
            Eager to contribute to real-world projects, continuously learn new
            technologies, and grow as a developer. Adept at working in both team
            and independent environments with strong problem-solving and debugging
            skills.
          </p>
          
          <p className={theme === "dark" ? "font-light text-sm sm:text-base lg:text-lg leading-relaxed text-gray-100" : "font-light text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800"}>
            I am dedicated to continuous learning and improvement, always eager to
            explore new technologies and best practices to deliver high-quality
            software solutions. My goal is to create applications that not only
            function well but also delight users with intuitive and attractive
            interfaces.
          </p>
          
          {/* CORRECTION 16: Improved call-to-action styling */}
          <p className="text-lg sm:text-xl lg:text-2xl mt-8 sm:mt-12 text-[#ffc300] font-medium">
            Let's build something amazing together!
          </p>
        </div>
        <Scroll section="Skills" refId="skills"/>
      </div>
    </section>
  );
};

export default About;
