import React from "react";
import { links } from "./constants";
import { Link } from "react-router-dom";
import { Logo2 } from "../../assets";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between flex-wrap py-[98px] bg-[#120B48] lg:px-[100px] md:px-8 px-[10px]">
      <Link to={"/"}>
        <div className="flex w-[137px] justify-between h-[40px] items-center">
          <img src={Logo2} alt="logo" />
          <h1 className="font-inter font-bold text-white">HelpMeOut</h1>
        </div>
      </Link>
      <div className="flex flex-col gap-[26px]">
        {links[0].map((link, i) => (
          <Link
            className={
              i === 0
                ? "text-white font-sora font-semibold"
                : "text-white font-work_sans font-normal"
            }
            key={i}
            to={link.to}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-[26px]">
        {links[1].map((link, i) => (
          <Link
            className={
              i === 0
                ? "text-white font-sora font-semibold"
                : "text-white font-work_sans font-normal"
            }
            key={i}
            to={link.to}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-[26px]">
        {links[2].map((link, i) => (
          <Link
            className={
              i === 0
                ? "text-white font-sora font-semibold"
                : "text-white font-work_sans font-normal"
            }
            key={i}
            to={link.to}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
