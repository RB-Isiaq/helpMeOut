import React from "react";
import { Close, Sent } from "../../assets";
import { Link } from "react-router-dom";

const SentModal = ({ email, closeHandler, close }) => {
  return (
    <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] px-4">
      <div class="relative w-full max-w-[598px] max-h-[676px] bg-[#F2F4F7] shadow-lg z-[1000] rounded-[24px] p-6 flex flex-col justify-center items-center px-4">
        <img
          src={Close}
          alt="close"
          className="absolute top-[64px] right-[64px] cursor-pointer"
          onClick={() => closeHandler(!close)}
        />
        <img src={Sent} alt="close" />
        <p className="w-full md:w-[348px] text-[#08051E] text-center text-[24px] font-work_sans mb-[30px]">
          Your video link has been sent to {email}
        </p>
        <div
          className="flex
        flex-col justify-between items-center w-full sm:w-[370px] h-full sm:h-[117px]"
        >
          <p className="w-full text-primary text-center text-[18px] font-work_sans">
            Would you need to view this video later? Save to your account now!
          </p>
          <button className="w-[150px] h-[51px] flex flex-col justify-center items-center bg-[#120B48] text-white border rounded-lg font-work_sans">
            Save video
          </button>
        </div>
        <p className="text-[#7E7E7E] text-center text-[16px] font-work_sans mt-10">
          Don’t have an account? <Link to="/login">Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default SentModal;
