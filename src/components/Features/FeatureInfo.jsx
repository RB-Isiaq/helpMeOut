import React from "react";

const FeatureInfo = ({ icon, title, info }) => {
  return (
    <div className="w-full max-w-[548px] h-[102px] flex gap-2 md:gap-4 mx-2 my-4">
      <div className="flex justify-center items-center bg-[#120B48] w-[67px] h-[40px] rounded-[30px]">
        <img
          className="w-[30px] h-[30px] object-contain"
          src={icon}
          alt="icon"
        />
      </div>
      <div className=" flex flex-col justify-between">
        <h1 className="font-inter text-[#1B233D] text-[18px] sm:text-[20px] font-semibold">
          {title}
        </h1>
        <p className="font-work_sans text-[#616163] text-[17px] sm:text-[20px]  leading-[151%]">
          {info}
        </p>
      </div>
    </div>
  );
};

export default FeatureInfo;
