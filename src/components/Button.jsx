import React, { useRef, useEffect, useState } from "react";

const Button = ({ text, className = "" }) => {
  const textRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState(150);
  const [buttonHeight, setButtonHeight] = useState(53);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1920
  );

  // Base values for different screen sizes
  const getBaseDimensions = width => {
    if (width < 640) {
      return { baseWidth: 100, minPadding: 20, height: 40 }; // Mobile
    } else if (width < 768) {
      return { baseWidth: 120, minPadding: 25, height: 44 }; // Small tablets
    } else if (width < 1024) {
      return { baseWidth: 130, minPadding: 30, height: 48 }; // Tablets
    } else if (width < 1300) {
      return { baseWidth: 140, minPadding: 35, height: 50 }; // Small desktops
    } else if (width < 1450) {
      return { baseWidth: 130, minPadding: 30, height: 48 }; // Target range (1300-1450px)
    } else if (width < 1536) {
      return { baseWidth: 140, minPadding: 35, height: 50 }; // Large desktops
    } else {
      return { baseWidth: 150, minPadding: 40, height: 53 }; // XL desktops
    }
  };

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate button dimensions based on text width and screen size
  useEffect(
    () => {
      if (textRef.current) {
        const { baseWidth, minPadding, height } = getBaseDimensions(
          screenWidth
        );
        const textWidth = textRef.current.getBoundingClientRect().width;
        const newWidth = Math.max(baseWidth, textWidth + minPadding * 2);

        setButtonWidth(newWidth);
        setButtonHeight(height);
      }
    },
    [text, screenWidth]
  );

  // Calculate svg path dimensions based on button width
  const getPathData = (width, height) => {
    const mainPathEndX = width - 0.5;
    const cornerX = width - 11.229;
    const cornerY = height - 1.21;
    const rectHeight = height;

    return {
      mainPath: `M55.2183 5.79534L55.3456 5.88201H55.4997H${mainPathEndX}V${height -
        7.9}L${cornerX} ${cornerY}H8.93774V0.5H47.4392L55.2183 5.79534Z`,
      smallRect: `M2.35937 ${height - 5.2}H0.35V${height -
        0.35}H5.54843V0.349998H0.35V${height - 17.4}L2.61222 ${height -
        15}L2.70937 ${height - 14.9}V${height - 14.8}V${height -
        5.55}V${height - 5.2}H2.35937Z`
    };
  };

  const { mainPath, smallRect } = getPathData(buttonWidth, buttonHeight);

  return (
    <div className={`relative inline-block group cursor-pointer ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={buttonWidth}
        height={buttonHeight}
        viewBox={`0 0 ${buttonWidth} ${buttonHeight}`}
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
          d={mainPath}
          fill="url(#glassyGradient)"
          stroke="#B026FF"
          className="transition-all duration-300 group-hover:stroke-[1.5px] opacity-0 group-hover:opacity-100"
          filter="url(#glassBlur)"
        />

        <path
          d={mainPath}
          fill="transparent"
          stroke="#B026FF"
          className="transition-all duration-300 group-hover:stroke-[1.5px]"
        />

        {/* Small rectangle */}
        <path
          d={smallRect}
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
          height={buttonHeight}
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
