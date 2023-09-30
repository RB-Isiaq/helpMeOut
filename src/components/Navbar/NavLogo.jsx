import React from "react";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/">
      <div className="flex w-[137px] justify-between h-[40px] items-center">
        <img src={Logo} alt="logo" />
        <h1 className="font-inter font-bold text-[#100A42]">HelpMeOut</h1>
      </div>
    </Link>
  );
};

export default NavLogo;
