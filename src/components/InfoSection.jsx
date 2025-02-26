import React from "react";
import thunder from "../images/thunder.png";
import bgimage from "../images/bg1.png";
import youtube from "../images/youtube.png";
import frame1 from "../images/frame1.png";
import Footer from "./Footer";

function InfoSection() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="relative w-full h-full flex justify-between">
        <img
          src={thunder}
          alt="Thunder"
          className="absolute left-0 top-0 w-[300px] h-[90px] object-cover"
        />
        <img
          src={youtube}
          alt="youtube"
          className="absolute right-16 top-16 w-[640] h-[350] object-cover"
        />
      </div>

      <div className="container mx-auto px-4 pt-32">
        <div className="flex flex-col items-start ml-4">
          <div className="flex flex-col font-proxon text-white drop-shadow-lg mb-8">
            <span
              className="font-bold text-[50px] tracking-wider"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)" }}
            >
              150+
            </span>
            <span
              className="text-[22px] tracking-wider"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)" }}
            >
              Universities
            </span>
          </div>

          <div className="flex space-x-[50px]">
            <div className="flex flex-col font-proxon text-white drop-shadow-lg">
              <span className="font-bold text-[50px] tracking-wider">72+</span>
              <span className="text-[22px] tracking-wider">Judges</span>
            </div>
            <div className="flex flex-col font-proxon text-white drop-shadow-lg">
              <span className="font-bold text-[50px] tracking-wider">21</span>
              <span className="text-[22px] tracking-wider">Hackathons</span>
            </div>
            <div className="flex flex-col font-proxon text-white drop-shadow-lg">
              <span className="font-bold text-[50px] tracking-wider">36+</span>
              <span className="text-[22px] tracking-wider">Great Speakers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-[#d9d9d9] flex justify-center items-center mt-[150px] mb-[100px]">
        <img src={frame1} alt="" className="" />
      </div>
      <Footer />
    </div>
  );
}

export default InfoSection;
