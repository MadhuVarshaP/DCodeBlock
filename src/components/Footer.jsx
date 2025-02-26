import React from "react";

function Footer() {
  return (
    <div className="flex justify-around px-10 text-white font-proxon text-[16px] ">
      <p className="tracking-wider">Copyright © 2024 DcodeBlock</p>
      <div className="flex space-x-10">
        <p className="tracking-wider">Help Center</p>
        <p>|</p>
        <p className="tracking-wider">Terms and Conditions</p>
        <p>|</p>
        <p className="tracking-wider">Privacy policy</p>
      </div>
    </div>
  );
}

export default Footer;
