import React, { useRef, useEffect, useState } from "react";

const Button = ({ text, className = "" }) => {
  const textRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(150);
  const baseWidth = 150;
  const minPadding = 40;

  useEffect(
    () => {
      if (textRef.current) {
        const textWidth = textRef.current.getBoundingClientRect().width;
        const newWidth = Math.max(baseWidth, textWidth + minPadding * 2);
        setButtonWidth(newWidth);
      }
    },
    [text]
  );

  return (
    <div className={`relative inline-block group cursor-pointer ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={buttonWidth}
        height="53"
        viewBox={`0 0 ${buttonWidth} 53`}
        fill="none"
        className="transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(176,38,255,0.3)]"
      >
        <defs>
          <linearGradient
            id="glassyGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#B026FF" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#B026FF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#B026FF" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glassBlur">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        <path
          d={`M55.2183 5.79534L55.3456 5.88201H55.4997H${buttonWidth -
            0.5}V45.0939L${buttonWidth -
            11.229} 51.7824H8.93774V0.5H47.4392L55.2183 5.79534Z`}
          fill="url(#glassyGradient)"
          stroke="#B026FF"
          className="transition-all duration-300 group-hover:stroke-[1.5px] opacity-0 group-hover:opacity-100"
          filter="url(#glassBlur)"
        />

        <path
          d={`M55.2183 5.79534L55.3456 5.88201H55.4997H${buttonWidth -
            0.5}V45.0939L${buttonWidth -
            11.229} 51.7824H8.93774V0.5H47.4392L55.2183 5.79534Z`}
          fill="transparent"
          stroke="#B026FF"
          className="transition-all duration-300 group-hover:stroke-[1.5px]"
        />

        {/* Small rectangle */}
        <path
          d="M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z"
          stroke="#B026FF"
          strokeWidth="0.7"
          className="transition-all duration-300 
            group-hover:stroke-[1.2px]
            group-hover:fill-[#B026FF] 
            group-hover:fill-opacity-20"
        />

        <rect
          x="0"
          y="0"
          width={buttonWidth}
          height="53"
          fill="url(#glassyGradient)"
          className="transition-all duration-300 opacity-0 group-hover:opacity-10"
          filter="url(#glassBlur)"
        />
      </svg>
      <span
        ref={textRef}
        className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 
          text-white font-medium whitespace-nowrap
          transition-all duration-300 
          group-hover:text-white group-hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]
          pointer-events-none select-none"
      >
        {text}
      </span>
    </div>
  );
};

export default Button;
