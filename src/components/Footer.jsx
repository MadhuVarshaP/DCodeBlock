import React from "react";

function Footer() {
  return (
    <footer className="w-full py-4 md:py-6 px-4 md:px-10 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white font-proxon text-sm md:text-[16px] tracking-wider">
            <p>Copyright © 2024 DcodeBlock</p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
            <div className="flex items-center space-x-3 md:space-x-6 text-white font-proxon text-sm md:text-[16px]">
              <button className="tracking-wider hover:text-gray-300 transition-colors">
                Help Center
              </button>
              <span className="hidden md:inline text-gray-400">|</span>
              <button className="tracking-wider hover:text-gray-300 transition-colors">
                Terms and Conditions
              </button>
              <span className="hidden md:inline text-gray-400">|</span>
              <button className="tracking-wider hover:text-gray-300 transition-colors">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
