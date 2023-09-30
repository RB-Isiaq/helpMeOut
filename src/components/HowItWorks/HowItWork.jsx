import React from "react";
import { Rec } from "../../assets";

const HowItWork = ({ id, title, info }) => {
  return (
    <div className="flex flex-col justify-between items-center w-full max-w-[358px] h-[567px]">
      <div className="w-full flex flex-col justify-between items-center  h-[269px]">
        <div
          className="bg-[#120B48] w-[68px] h-[67px]  
        flex justify-center items-center rounded-[60px]"
        >
          <h1 className="font-inter font-bold text-[32px] text-white">{id}</h1>
        </div>
        <h1 className="text-[#1B233D] font-inter text-[28px] font-semibold">
          {title}
        </h1>
        <p className="w-full text-center font-work_sans text-[20px] leading-[151%]">
          {info}
        </p>
      </div>
      <div>
        <img src={Rec} alt="recorder" className="shadow-lg rounded-2xl" />
      </div>
    </div>
  );
};

export default HowItWork;
