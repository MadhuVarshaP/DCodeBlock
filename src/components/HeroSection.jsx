import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import H from "../images/H.png";
import Navbar from "./Navbar";
import bgvideo from "../images/bgvideo.mp4";
import singularityimage from "../images/singularityimg.png";
import Button from "./Button";

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

      <div className="relative z-10 flex flex-col min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
        </motion.div>

        <svg
          viewBox="0 0 40 7"
          preserveAspectRatio="none"
          className="w-full h-2 sm:h-2.5 md:h-3 lg:h-4 xl:h-5 2xl:h-6 opacity-90"
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

        <div className="flex flex-col md:flex-row items-center px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 2xl:px-10 py-2 sm:py-3 md:py-4 lg:py-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-2 sm:space-x-3 items-center mb-3 sm:mb-4 md:mb-0 md:mr-4 lg:mr-5 xl:mr-6 2xl:mr-8"
          >
            <img
              src={H}
              alt=""
              className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px]"
            />
            <p className="text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] tracking-wider">
              HACKINDIA
            </p>
          </motion.div>

          <div className="flex-1 flex justify-center w-full md:overflow-x-auto scrollbar-hide md:overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#B026FF]/20 backdrop-blur-md border border-[#B026FF]/30 shadow-lg rounded-xl
      p-1.5 sm:p-2 md:p-1.5 lg:p-1.5 xl:p-1.5 2xl:p-2
      w-full md:w-auto"
            >
              <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap
      gap-1.5 md:gap-1 lg:gap-1 xl:gap-1.5 2xl:gap-2
      items-stretch md:items-center
      md:mx-auto">
                {navigationItems.map(text =>
                  <Button
                    key={text}
                    text={text}
                    className="flex items-center justify-center
            w-full md:w-auto
            px-3 md:px-2 lg:px-2.5 xl:px-3 2xl:px-3.5
            py-2 md:py-1 lg:py-1.5
            text-sm md:text-xs lg:text-sm xl:text-base
            whitespace-nowrap
            min-h-[40px] md:min-h-[32px]
            
          "
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>

        <div
          ref={ref}
          className="flex-grow flex flex-col items-center justify-center 
            px-3 sm:px-4 md:px-5 lg:px-6 xl:px-6 2xl:px-8
            py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12
            space-y-4 sm:space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-7 2xl:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={singularityimage}
              alt=""
              className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[240px] 2xl:w-[280px] h-auto"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
          >
            <div className="flex items-center justify-center whitespace-nowrap">
              <div className="relative">
                <div className="relative bg-[#F86720] w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px] h-[56px] sm:h-[70px] md:h-[84px] lg:h-[98px] xl:h-[112px] flex items-center justify-center z-10">
                  <span
                    className="text-white text-[45px] sm:text-[56px] md:text-[68px] lg:text-[80px] xl:text-[92px] font-bold tracking-wider"
                    style={{
                      textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)"
                    }}
                  >
                    Ha
                  </span>
                </div>
              </div>
              <div
                className="text-[45px] sm:text-[56px] md:text-[68px] lg:text-[80px] xl:text-[92px] font-bold text-white pl-2 tracking-wider"
                style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)" }}
              >
                ckIndia2025
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center w-full max-w-[90%] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
          >
            <div className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[28px] font-justina font-light text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              India's Biggest Web3 & AI Hackathon
            </div>
            <div className="bg-gradient-to-r from-[#6a1799] to-[#230833] backdrop-blur-md bg-opacity-70 border border-purple-500/30 shadow-lg font-justina text-white py-1.5 sm:py-2 md:py-2 lg:py-2.5 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 rounded-xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 inline-block">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-medium">
                February 28 - September 28
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col md:flex-row justify-center items-center w-full text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-justina gap-3 sm:gap-4 md:gap-0"
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
                  <p className="text-white hidden md:block px-4 lg:px-5 xl:px-6 2xl:px-8">
                    |
                  </p>}
              </React.Fragment>
            )}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-4 md:mt-5 lg:mt-6 mb-4 sm:mb-6 md:mb-8"
          >
            <Button
              text="Register now!"
              className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg font-justina"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
