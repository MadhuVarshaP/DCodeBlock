import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import H from "../images/H.png";
import Navbar from "./Navbar";
import bgvideo from "../images/bgvideo.mp4";
import singularityimage from "../images/singularityimg.png";
import { Button } from "./Button";
import FuturisticButton from "./FuturisticButton";

const navigationItems = [
  "Overview",
  "Create Team",
  "Prizes & Sponsors",
  "FAQs",
  "Judging & Rules",
  "Resources"
];

const stats = [
  { value: "$150+", label: "Prize Pool" },
  { value: "150+", label: "Universities" },
  { value: "25,000+", label: "Students" }
];

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen text-white font-proxon">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black opacity-90">
        <video
          className="absolute w-full h-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
        </motion.div>

        {/* Zigzag SVG */}
        <svg
          viewBox="0 0 40 7"
          preserveAspectRatio="none"
          className="w-full h-2 sm:h-3 md:h-4 lg:h-5 opacity-90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="zigzagGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="50%" stopColor="#B026FF" />
              <stop offset="100%" stopColor="#B026FF" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 L0,3 L5,3 L6,6 L15,6 L16,3 L25,3 L26,6 L35,6 L36,3 L39,3 L47,0 Z"
            fill="url(#zigzagGradient)"
          />
        </svg>

        {/* Navigation Section */}
        <div className="flex flex-col md:flex-row items-center px-3 sm:px-4 md:px-6 lg:px-10 xl:px-16 py-2 sm:py-3 md:py-5 lg:py-6">
          {/* Logo section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-2 sm:space-x-3 items-center mb-3 sm:mb-4 md:mb-0"
          >
            <img
              src={H}
              alt=""
              className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[38px] md:h-[38px] lg:w-[45px] lg:h-[45px]"
            />
            <p className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] tracking-wider">
              HACKINDIA
            </p>
          </motion.div>

          {/* Centered glassy container */}
          <div className="flex-1 flex justify-center w-full overflow-x-auto scrollbar-hide md:overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#B026FF]/40 backdrop-blur-md border border-[#B026FF]/30 shadow-lg rounded-lg p-1.5 sm:p-2 md:p-2.5 flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5"
            >
              {navigationItems.map(text =>
                <FuturisticButton
                  className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-300 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap"
                  text={text}
                  isActive={true}
                />
              )}
            </motion.div>
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8"
          ref={ref}
        >
          {/* Singularity Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mt-2 sm:mt-3 md:mt-4"
          >
            <img
              src={singularityimage}
              alt=""
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px] h-auto"
            />
          </motion.div>

          {/* HackIndia Title */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
          >
            <div className="flex items-center justify-center whitespace-nowrap">
              <div className="relative">
                <div className="relative bg-[#F86720] w-[80px] sm:w-[100px] md:w-[150px] lg:w-[180px] h-[56px] sm:h-[70px] md:h-[107px] lg:h-[128px] flex items-center justify-center z-10">
                  <span
                    className="text-white text-[48px] sm:text-[60px] md:text-[90px] lg:text-[108px] font-bold tracking-wider"
                    style={{
                      textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)"
                    }}
                  >
                    Ha
                  </span>
                </div>
              </div>
              <div
                className="text-[48px] sm:text-[60px] md:text-[90px] lg:text-[108px] font-bold text-white pl-2 tracking-wider"
                style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)" }}
              >
                ckIndia2025
              </div>
            </div>
          </motion.div>

          {/* Subtitle and Date */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
          >
            <div className="text-[16px] sm:text-[20px] md:text-[28px] lg:text-[32px] font-justina font-light text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              India's Biggest Web3 & AI Hackathon
            </div>
            <div className="bg-gradient-to-r from-[#6a1799] to-[#230833] backdrop-blur-md bg-opacity-70 border border-purple-500/30 shadow-lg font-justina text-white py-1.5 sm:py-2 md:py-2.5 px-4 sm:px-6 md:px-8 lg:px-12 rounded-xl mb-3 sm:mb-4 md:mb-6 lg:mb-8 inline-block">
              <p className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-medium">
                February 28 - September 28
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col md:flex-row justify-center items-center w-full text-[16px] sm:text-[18px] md:text-[22px] lg:text-[25px] xl:text-[28px] font-justina gap-3 sm:gap-4 md:gap-0"
          >
            {stats.map((stat, index) =>
              <React.Fragment key={stat.label}>
                <div className="flex space-x-2 sm:space-x-3 items-center justify-center">
                  <span className="text-[#F86720] font-bold">
                    {stat.value}
                  </span>
                  <span className="text-white">
                    {stat.label}
                  </span>
                </div>
                {index < 2 &&
                  <p className="text-white hidden md:block px-6 lg:px-8 xl:px-10">
                    |
                  </p>}
              </React.Fragment>
            )}
          </motion.div>

          {/* Register Button */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-4 sm:mt-5 md:mt-6 lg:mt-8"
          >
            {/* <Button className="text-sm sm:text-base md:text-lg lg:text-xl">
              Register
            </Button> */}
            <FuturisticButton
              className="text-sm sm:text-base md:text-lg lg:text-xl"
              text="Register"
              isActive={true}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
