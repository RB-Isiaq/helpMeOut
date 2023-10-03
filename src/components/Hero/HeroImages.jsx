import React from "react";
import { Dots, Dots2, Family, Lady, Old } from "../../assets";

const HeroImages = () => {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col justify-between max-h-[448px] z-[1]">
        <img src={Old} alt="Old woman" />
        <img src={Family} alt="Family" />
      </div>
      <div className="max-h-[448px] z-[1]">
        <img src={Lady} alt="Lady" />
      </div>
      <div className="absolute top-[-58px] right-[-48px]  hidden sm:block">
        <img src={Dots} alt="icons" className="object-contain" />
      </div>
      <div className="absolute bottom-[-86px] left-[-50px]  hidden sm:block">
        <img src={Dots2} alt="icons" className="object-contain" />
      </div>
    </div>
  );
};

export default HeroImages;
