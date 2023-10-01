import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <Link to="/login">
      <div className="text-[18px] flex justify-center items-center font-semibold">
        <h1>Get Started</h1>
      </div>
    </Link>
  );
};

export default GetStarted;
