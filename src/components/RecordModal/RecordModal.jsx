import React, { useState } from "react";
import NavLogo from "../Navbar/NavLogo";
import { Ball, Camera, Close, Mic, Monitor, Setting, Tab } from "../../assets";
import Recorder from "../Recorder/Recorder";

const RecordModal = () => {
  const [activateCamera, setActivateCamera] = useState(true);
  const [activateMic, setActivateMic] = useState(true);

  return (
    <>
      <div className="w-[300px] h-[439px] py-8 px-6 absolute top-0 right-8 z-[10] bg-white shadow-2xl flex flex-col justify-between">
        <div className="w-full flex justify-between">
          <NavLogo />
          <div className="flex gap-2">
            <img src={Setting} alt="setting" />
            <img src={Close} alt="close" className="cursor-pointer" />
          </div>
        </div>
        <h1 className="text-[14px] font-work_sans w-[225px] text-[#413C6D]">
          This extension helps you record and share help videos with ease.
        </h1>
        <div className="flex justify-around">
          <div className="flex flex-col gap-2  items-center">
            <img src={Monitor} alt="monitor" className="w-[32px] h-[32px]" />
            <h1 className="text-[14px] font-work_sans text-[#413C6D]">
              Full screen
            </h1>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img src={Tab} alt="tab" className="w-[32px] h-[32px]" />
            <h1 className="text-[14px] font-work_sans text-[#413c6d] font-bold">
              Current Tab
            </h1>
          </div>
        </div>
        <div className="w-full rounded-xl flex justify-between items-center border border-[#100A42] h-[48px] px-4">
          <div className="flex justify-between gap-2 items-center">
            <img src={Camera} alt="camera" />
            <h1 className="text-[14px] font-work_sans text-[#413C6D]">
              Camera
            </h1>
          </div>
          <div>
            <div
              className="relative w-[36px] h-[20px] bg-[#120B48] rounded-2xl cursor-pointer"
              onClick={() => setActivateCamera((prev) => !prev)}
            >
              <img
                src={Ball}
                alt="ball"
                className={`absolute ${activateCamera ? "right-0" : "left-0"} `}
              />
            </div>
          </div>
        </div>
        <div className="w-full rounded-xl flex justify-between items-center border border-[#100A42] h-[48px] px-4">
          <div className="flex gap-2  justify-between items-center">
            <img src={Mic} alt="mic" />
            <h1 className="text-[14px] font-work_sans text-[#413C6D]">Audio</h1>
          </div>
          <div>
            <div
              className="relative w-[36px] h-[20px] bg-[#120B48] rounded-2xl cursor-pointer"
              onClick={() => setActivateMic((prev) => !prev)}
            >
              <img
                src={Ball}
                alt="ball"
                className={`absolute ${activateMic ? "right-0" : "left-0"} `}
              />
            </div>
          </div>
        </div>

        <button className="w-full h-[51px] text-center bg-[#120B48] text-white rounded-lg">
          Start Recording
        </button>
      </div>
      <Recorder />
    </>
  );
};

export default RecordModal;
