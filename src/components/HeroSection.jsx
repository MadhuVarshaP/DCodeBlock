import React from "react";
import H from "../images/H.png";
import Navbar from "./Navbar";
import bgvideo from "../images/bgvideo.mp4";
function HeroSection() {
  return (
    <div className="relative min-h-screen text-white font-proxon">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black opacity-90 ">
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
        <div className="opacity-100">
          <Navbar />
        </div>
        <svg
          viewBox="0 0 40 7"
          preserveAspectRatio="none"
          className="w-full h-4 opacity-90"
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
            d="
            M0,0
            L0,3
            L5,3
            L6,6
            L15,6
            L16,3
            L25,3
            L26,6
            L35,6
            L36,3
            L39,3
            L47,0
            Z
          "
            fill="url(#zigzagGradient)"
          />
        </svg>
        <div className="flex items-center px-10 py-5">
          {/* Logo section */}
          <div className="flex space-x-3 items-center">
            <img src={H} alt="" className="w-[38px] h-[38px]" />
            <p className=" text-[22px] tracking-wider">HACKINDIA</p>
          </div>

          {/* Centered glassy container */}
          <div className="flex-1 flex justify-center">
            <div className="bg-[#B026FF]/40 backdrop-blur-md border border-[#B026FF]/30 shadow-lg rounded-lg space-x-5 p-2">
              <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-300">
                Overview
              </button>
              <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-300">
                Create Team
              </button>
              <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-300">
                Prizes & Sponsors
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
