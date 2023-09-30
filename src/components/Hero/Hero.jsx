import React from "react";
import HeroImages from "./HeroImages";
import HeroDescription from "./HeroDescription";

const Hero = () => {
  return (
    <div className="w-full h-full lg:h-screen flex flex-col lg:flex-row justify-center items-center bg-white gap-[100px] lg:gap-10 py-14 lg:py-4 lg:px-[100px] md:px-8 px-[10px]">
      <HeroDescription />
      <HeroImages />
    </div>
  );
};

export default Hero;
