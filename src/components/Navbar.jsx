import React, { useState } from "react";
import logo from "../images/logo.png";
import { Button } from "./Button";
import FuturisticButton from "./FuturisticButton";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white h-[60px] md:h-[75px] flex items-center justify-between px-4 md:px-10 opacity-100">
      <img
        src={logo}
        className="w-[180px] md:w-[240px] h-[30px] md:h-[40px]"
        alt="Logo"
      />

      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen
              ? <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              : <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />}
          </svg>
        </button>
      </div>

      <div className="hidden md:block">
        <FuturisticButton text="Sign in" isActive={true} />
      </div>

      {isMenuOpen &&
        <div className="absolute top-[60px] left-0 right-0 bg-black md:hidden">
          <div className="px-4 py-2">
            <FuturisticButton text="Sign in" isActive={true} />
          </div>
        </div>}
    </div>
  );
}

export default Navbar;
