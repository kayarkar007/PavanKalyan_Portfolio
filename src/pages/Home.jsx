import React from "react";
import { motion } from "framer-motion";
import { Available_for_work } from "../data/ProjectData";
import { Scroll } from "../App";
import { useTheme } from "../components/themeContext";
import { Character } from "../components/Character";
import "../index.css";

// Floating Tag Component
const FloatingTag = React.memo(
  ({ text, highlight, position, bounceY = 15, ClassName }) => {
    const { theme } = useTheme();
    return (
      <div
        className={` FloatingTag ${ClassName} absolute ${position} flex justify-center items-center z-10 max320-w-40%`}
      >
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: [0, bounceY, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="bounce relative px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-full border border-gray-700 bg-transparent backdrop-blur-0 overflow-hidden"
        >
          <motion.div
            className="bounceContent absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <p
            id="text"
            className="bounceContent_p relative text-gray-400 text-xs xs:text-sm sm:text-base md:text-lg font-medium"
          >
            {text}{" "}
            <span
              className={`font-semibold tracking-wide ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {highlight}
            </span>
          </p>
        </motion.div>
      </div>
    );
  }
);
//   ({ text, highlight, position, bounceY = 15 }) => (
//     <div className={`absolute ${position} flex justify-center items-center`}>
//       <motion.div
//         initial={{ opacity: 1, y: 0 }}
//         animate={{ opacity: 1, y: [0, bounceY, 0] }}
//         transition={{
//           duration: 2,
//           ease: "easeInOut",
//           repeat: Infinity,
//           repeatType: "loop",
//         }}
//         className="relative px-6 py-2 rounded-full border border-gray-700 bg-transparent backdrop-blur-0 overflow-hidden"
//       >
//         <motion.div
//           className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
//           animate={{ x: ["-100%", "100%"] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//         />
//         <p className="relative text-gray-400 text-sm sm:text-lg font-medium">
//           {text}{" "}
//           <span className="text-white font-semibold tracking-wide">
//             {highlight}
//           </span>
//         </p>
//       </motion.div>
//     </div>
//   )
// );

// const Character = () => {
//   return (
//     <img
//       src="/assets/characterCopy.svg"
//       alt="Character"
//       className="absolute w-60   h-auto mb-2 top-[22.5%]   left-[32%] z-10 "
//     />
//   );
// };

export const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-[#ffc300]/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const AvailableSection = React.memo(() => {
  const { theme } = useTheme();
  return (
    <div
      className={`absolute bottom-[12%] right-[20%] xs:bottom-[10%] xs:right-[18%] sm:bottom-[8%] sm:right-[15%] md:bottom-[16%] md:right-[12%] lg:bottom-[14%] lg:right-[10%] xl:bottom-[4%] xl:right-[8%] 2xl:bottom-[3%] 2xl:right-[6%] flex items-center gap-2 xs:gap-3 px-3 xs:px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
        theme === "dark" 
          ? "bg-black/20 border-white/20" 
          : "bg-white/20 border-black/20"
      } ${
        Available_for_work
          ? "shadow-[0_0_20px_rgba(112,224,0,0.3)]"
          : "shadow-[0_0_20px_rgba(255,46,39,0.3)]"
      }`}
    >
              <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-2 xs:w-3 h-2 xs:h-3 rounded-full ${
            Available_for_work ? "bg-[#70e000]" : "bg-[#ff2e27]"
          } shadow-[0_0_10px_currentColor]`}
        />
        <span className={`font-medium text-xs xs:text-sm ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}>
          {Available_for_work ? "Available for work" : "Currently Unavailable"}
        </span>
    </div>
  );
});

// Main Home Component
const Home = () => {
  const { theme } = useTheme();
  return (
    <>
      {/* Main Section */}
      <div
        id="home"
        className={`relative flex flex-col justify-center items-center min-h-screen w-full text-center px-4 pt-16 sm:pt-20 md:pt-24 lg:pt-28 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto w-full">
          {/* Character Image + Name */}
          <div className="flex flex-col items-center w-full">
            <h1 className="name-heading relative font-poppins font-bold leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl z-10 w-full">
              <FloatingTag
                text="I'm a"
                highlight="React Developer"
                position="bottom-[15%] -right-[15%] xs:bottom-[12%] xs:-right-[12%] sm:bottom-[10%] sm:-right-[10%] md:bottom-[8%] md:-right-[8%] lg:-bottom-[12%] lg:right-[8%] xl:-bottom-[14%] xl:right-[10%] 2xl:bottom-[4%] 2xl:-right-[3%]"
                bounceY={10}
                ClassName="React"
              />
              <FloatingParticles />
              <FloatingTag
                text="I'm a"
                highlight="Backend Developer"
                position="-bottom-[30%] left-[15%] xs:-bottom-[25%] xs:left-[12%] sm:-bottom-[20%] sm:left-[10%] md:-bottom-[15%] md:left-[8%] lg:-bottom-[12%] lg:left-[6%] xl:-bottom-[36%] xl:-left-[8%] 2xl:-bottom-[8%] 2xl:left-[3%]"
                bounceY={10}
                ClassName="Backend"
              />
              <FloatingTag
                text="I'm a"
                highlight="Full Stack Developer"
                position="top-[10%] right-[15%] xs:top-[8%] xs:right-[12%] sm:top-[6%] sm:right-[10%] md:top-[5%] md:right-[8%] lg:top-[18%] lg:right-[6%] xl:top-[14%] xl:right-[10%] 2xl:top-[2%] 2xl:right-[3%]"
                bounceY={12}
                ClassName="FullStack"
              />
              <FloatingTag
                text="I'm a"
                highlight="MERN Stack Developer"
                position="top-[5%] -left-[12%] xs:top-[4%] xs:-left-[10%] sm:top-[3%] sm:-left-[8%] md:top-[2%] md:-left-[6%] lg:top-[1%] lg:-left-[2%] xl:top-[0.5%] xl:-left-[3%] 2xl:top-[0%] 2xl:-left-[2%]"
                ClassName="MERN"
              />
              <FloatingTag
                text="I'm a"
                highlight="UI/UX Enthusiast"
                position="-top-[25%] -right-[15%] xs:-top-[20%] xs:-right-[12%] sm:-top-[16%] sm:-right-[10%] md:-top-[12%] md:-right-[8%] lg:-top-[20%] lg:right-[20%] xl:-top-[16%] xl:-right-[2%] 2xl:-top-[6%] 2xl:-right-[3%]"
                ClassName="UI"
              />
              <FloatingTag
                text="I'm a"
                highlight="Frontend Developer"
                position="bottom-[25%] -left-[15%] xs:bottom-[20%] xs:-left-[12%] sm:bottom-[16%] sm:-left-[10%] md:bottom-[12%] md:-left-[8%] lg:-bottom-[64%] lg:left-[8%] xl:bottom-[6%] xl:left-[8%] 2xl:bottom-[6%] 2xl:-left-[3%]"
                bounceY={10}
                ClassName="Frontend"
              />
              
              <span className="text-brand-yellow font-bold text-3xl xs:text-4xl sm:text-5xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-10xl">
                Hi,
              </span>{" "}
              <br />
              <span className=" mt-1 xs:mt-2 sm:mt-3 md:mt-4 lg:mt-5 text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">I'm Pavan Kalyan</span>
              <br />
              <span className=" text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Kayarkar</span>
              <Character />
            </h1>
          </div>
          <AvailableSection />
          
          {/* Enhanced Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-4"
          >
            <p className={`text-sm xs:text-base sm:text-lg md:text-xl pt-10 lg:text-2xl font-light leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
              Crafting digital experiences with{" "}
              <span className="text-[#ffc300] font-semibold">
                passion and precision
              </span>
            </p>
          </motion.div>
        </div>
        <Scroll section="About" refId="about" />
      </div>
    </>
  );
};

export default Home;
