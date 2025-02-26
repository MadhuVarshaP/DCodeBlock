import React from "react";

const FuturisticButton = ({ text, isActive = false }) => {
  return (
    <div className="relative">
      {isActive &&
        <div className="absolute -left-4 top-0 h-full w-2 bg-purple-500" />}

      <div
        className={`
            relative
            min-w-[150px]
            min-h-[50px]
            flex
            items-center
            justify-center
            ${isActive ? "bg-purple-600" : "bg-purple-900/40"}
            hover:bg-purple-700
            transition-colors
            duration-300
          `}
        style={{
          clipPath:
            "polygon(10px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 10px)"
        }}
      >
        <span className="text-xl font-medium text-white px-8">
          {text}
        </span>
      </div>
    </div>
  );
};

export default FuturisticButton;
