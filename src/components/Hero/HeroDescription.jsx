import React from "react";
import { Continue } from "../../assets";

const HeroDescription = () => {
  return (
    <div className="w-full max-w-[548px] h-[317px] flex flex-col justify-between items-start">
      <h1 className="font-sora text-[44px] sm:text-[64px] leading-[100%] font-bold max-w-[469px] h-[128px]">
        Show Them Don't Just Tell
      </h1>
      <p
        className="w-full text-[] h-[56px] text-[20px] leading-[28px] 
      text-black text-opacity-75"
      >
        Help your friends and loved ones by creating and sending videos on how
        to get things done on a website.
      </p>
      <a href="https://help-me-out-ext.vercel.app/popup.html">
        <button className="w-[239px] h-[65px] flex justify-center items-center gap-3 bg-[#120B48] text-white text-[18px] rounded-lg mt-6 lg:mt-0">
          <span>Install HelpMeOut</span>
          <img src={Continue} alt="" />
        </button>
      </a>
    </div>
  );
};

export default HeroDescription;
