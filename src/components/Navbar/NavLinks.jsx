import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex px-5 py-10 justify-between items-center gap-[39px] text-black">
      <Link to="/" className="font-medium">
        Features
      </Link>
      <Link to="/" className="font-medium">
        How It Works
      </Link>
    </div>
  );
};

export default NavLinks;
