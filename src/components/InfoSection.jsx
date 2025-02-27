import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import thunder from "../images/thunder.png";
import bgimage from "../images/bg1.png";
import youtube from "../images/youtube.png";
import frame1 from "../images/frame1.png";
import Footer from "./Footer";

function InfoSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(
    () => {
      if (inView) {
        controls.start("visible");
      }
    },
    [controls, inView]
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const statsData = [
    { number: "72+", text: "Judges" },
    { number: "21", text: "Hackathons" },
    { number: "36+", text: "Great Speakers" }
  ];

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="block md:hidden w-full pt-6">
        <div className="flex flex-col space-y-6">
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={thunder}
            alt="Thunder"
            className="w-[200px] h-[60px] object-cover"
          />
          <div className="flex flex-col items-center">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src={youtube}
              alt="youtube"
              className="w-[280px] h-[155px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block relative w-full">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src={thunder}
          alt="Thunder"
          className="absolute left-0 top-10 w-[300px] h-[90px] object-cover"
        />
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src={youtube}
          alt="youtube"
          className="absolute right-[100px] top-[100px] w-[320px] h-[175px] lg:w-[640px] lg:h-[350px] object-cover"
        />
      </div>

      <div className="container mx-auto px-4 pt-[100px] md:pt-32 flex-grow">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="flex flex-col items-center md:items-start ml-0 md:ml-4"
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col font-proxon text-white drop-shadow-lg my-10 text-center md:text-left"
          >
            <motion.span
              className="font-bold text-[40px] md:text-[50px] tracking-wider"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              150+
            </motion.span>
            <motion.span
              className="text-[18px] md:text-[22px] tracking-wider"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)" }}
            >
              Universities
            </motion.span>
          </motion.div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-[50px] mb-10">
            {statsData.map((stat, index) =>
              <motion.div
                key={stat.text}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col font-proxon text-white drop-shadow-lg text-center md:text-left cursor-pointer"
              >
                <motion.span
                  className="font-bold text-[40px] md:text-[50px] tracking-wider"
                  style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  {stat.number}
                </motion.span>
                <motion.span
                  className="text-[18px] md:text-[22px] tracking-wider"
                  style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)" }}
                >
                  {stat.text}
                </motion.span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full bg-[#d9d9d9] mt-auto h-[90px] flex items-center justify-center" // Added flex and relative
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute transform -translate-y-1/2"
        >
          <img src={frame1} alt="Frame" className="w-full  h-auto" />
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default InfoSection;
