import React from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import GetStarted from "./GetStarted";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center font-work_sans text-black h-[84px] lg:px-[100px] md:px-8 px-[10px] shadow-sm">
      <NavLogo />
      <NavLinks />
      <GetStarted />
    </div>
  );
};

export default Navbar;
