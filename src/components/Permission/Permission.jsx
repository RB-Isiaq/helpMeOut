import React from "react";
import { Camera, Close, Mic } from "../../assets";

const Permission = () => {
  return (
    <div className="absolute top-0 left-10 w-[400px] h-[200px] shadow-xl flex flex-col justify-between p-4 z-[10] bg-white">
      <div className="w-full flex justify-between">
        <h1 className="text-[18px] font-inter text-[#141414]">
          HelpMeOut wants to
        </h1>
        <img src={Close} alt="close" className="cursor-pointer" />
      </div>
      <div className="flex gap-4">
        <img src={Camera} alt="camera" />
        <h1 className="text-[14px] font-inter text-[#141414]">
          Use your camera
        </h1>
      </div>
      <div className="flex gap-4">
        <img src={Mic} alt="mic" />
        <h1 className="text-[14px] font-inter text-[#141414]">
          Use your microphone
        </h1>
      </div>
      <div className="w-full justify-end flex">
        <button className="w-[64px] h-8 flex justify-center items-center border-[0.5px]   border-[#141414]">
          Allow
        </button>
        <button
          className="w-[64px] h-8 flex justify-center items-center 
          border-[0.5px]  border-[#141414] ml-4"
        >
          Block
        </button>
      </div>
    </div>
  );
};

export default Permission;
