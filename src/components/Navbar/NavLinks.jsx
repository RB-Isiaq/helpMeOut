import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <div className="hidden sm:flex px-5 py-10 justify-between items-center gap-[39px] text-black">
      <HashLink
        smooth
        to={{ pathname: "/", hash: "#features" }}
        className="font-medium"
      >
        Features
      </HashLink>
      <HashLink
        smooth
        to={{ pathname: "/", hash: "#how" }}
        className="font-medium"
      >
        How It Works
      </HashLink>
    </div>
  );
};

export default NavLinks;
