import { Camera, Delete, Man, Mic, Pause, Stop } from "../../assets";

const Recorder = () => {
  return (
    <div className="fixed bottom-20 left-20 z-[30] flex gap-10 justify-center items-center">
      <div>
        <img src={Man} alt="" />
      </div>
      <div className="w-[551px] h-[86px] rounded-[200px] bg-[#141414] flex justify-center items-center gap-5 px-10">
        <div className="flex gap-3 justify-center items-center">
          <p className="font-inter text-xl text-white">00:00:03</p>
          <div className="w-[10px] h-[10px] rounded-[17px] bg-[#C00404]" />
        </div>
        <div className="w-[1px] h-[48px] bg-[#E8E8E8]" />
        <div className="flex flex-col justify-center items-center">
          <div className="w-[44px] h-[44px] rounded-[32px] border border-white bg-white flex justify-center items-center cursor-pointer gap-1">
            <img src={Pause} alt="pause" />
            <img src={Pause} alt="pause" />
          </div>
          <p className="text-white font-work_sans text-[12px] font-medium">
            Pause
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[44px] h-[44px] rounded-[32px] border border-white bg-white flex justify-center items-center cursor-pointer">
            <img src={Stop} alt="stop" />
          </div>
          <p className="text-white font-work_sans text-[12px] font-medium">
            Stop
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[44px] h-[44px] rounded-[32px] border border-white bg-white flex justify-center items-center cursor-pointer">
            <img src={Camera} alt="camera" />
          </div>
          <p className="text-white font-work_sans text-[12px] font-medium">
            Camera
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[44px] h-[44px] rounded-[32px] border border-white bg-white flex justify-center items-center cursor-pointer">
            <img src={Mic} alt="mic" />
          </div>
          <p className="text-white font-work_sans text-[12px] font-medium">
            Mic
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[44px] h-[44px] rounded-[32px] border border-black bg-[#4B4B4B] flex justify-center items-center cursor-pointer">
            <img src={Delete} alt="delete" />
          </div>
          <p className="text-[12px]">del</p>
        </div>
      </div>
    </div>
  );
};

export default Recorder;
