import React from "react";
import logo from "../images/logo.png";
import { Button } from "./Button";
function Navbar() {
  return (
    <div className="bg-black text-white h-[75px] flex items-center justify-between px-10 opacity-100">
      <img src={logo} className="w-[240px] h-[40px] " />

      <div>
        <Button>Sign in</Button>
      </div>
    </div>
  );
}

export default Navbar;
