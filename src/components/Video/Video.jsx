import React, { useEffect, useState } from "react";
import { Copy, Edit, Fb, Tg, Wa } from "../../assets";
import Transcript from "../Transcript/Transcript";
import { Link } from "react-router-dom";

const Video = ({ src }) => {
  const [copy, setCopy] = useState("Copy");

  const base = `http://hngproject5.onrender.com/uploads/videos/${src}.webm`;
  const whatsappShareUrl = `whatsapp://send?text=Check%20out%20this%20video%20${encodeURIComponent(
    base
  )}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    base
  )}`;
  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
    base
  )}&text=Check%20out%20this%20video`;

  const clickHandler = () => {
    navigator.clipboard.writeText(base);
    setCopy("Copied");
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setCopy("Copy");
    }, 1000);

    return () => {
      clearTimeout(time);
    };
  }, [setCopy, copy]);

  return (
    <div className="w-full flex flex-col gap-[64px] items-center justify-between py-10 lg:px-[100px] md:px-8 px-[10px]">
      <div className="w-full  flex flex-col lg:flex-row justify-between gap-6">
        <div className="w-full max-w-[552px] flex flex-col gap-10">
          <h1 className="font-sora text-[45px] font-bold text-primary">
            Your video is ready!
          </h1>
          <div className="flex flex-col w-full h-[513px] gap-[64px]">
            <div className="w-[385px] h-[61px] flex flex-col justify-between">
              <label
                htmlFor="title"
                className="font-sora font-medium text-[#727272]"
              >
                Name
              </label>
              <div className="w-full h-8 flex justify-between">
                <input
                  type="text"
                  name=""
                  id="title"
                  placeholder="Untitled_Video_20232509 "
                  value="Screen-recording"
                  className="font-sora text-[#413C6D} text-[24px] font-semibold outline-none border-none"
                />
                <button>
                  <img src={Edit} alt="edit" />
                </button>
              </div>
            </div>
            <div className="w-full h-[68px] flex justify-center items-center gap-0 bg-[rgba(182,179,198,0.20)] px-4 border-[0.5px] border-[#E7E7ED] rounded-2xl">
              <input
                type="email"
                className="w-full bg-transparent
                 border-0 outline-none"
                placeholder="enter user email"
              />
              <button className="w-[75px] h-[44px] flex justify-center items-center text-white rounded-lg bg-[#605C84]">
                Send
              </button>
            </div>
            <div className="w-full h-[109px] flex flex-col justify-between">
              <p className="font-sora text-[20px] text-primary font-semibold">
                Video Url
              </p>
              <div className="w-full h-[68px] flex justify-center items-center bg-[#FAFAFA] px-4 border-[0.5px] border-[#929292] rounded-2xl">
                <input
                  type="url"
                  className="w-full bg-transparent
                 border-0 outline-none"
                  value={base}
                />
                <button
                  className="w-[104px] h-[44px] flex justify-center gap-2 items-center text-primary rounded-lg border border-primary"
                  onClick={clickHandler}
                >
                  <img src={Copy} alt="copy" />
                  <p>{copy}</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full h-[83px]">
              <p className="text-[#08051E] font-sora font-semibold">
                Share your video
              </p>
              <div className="flex gap-3">
                <a
                  href={facebookShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-[141px] h-[48px] border-[#0A0628] border rounded-md gap-2 flex justify-center items-center">
                    <img src={Fb} alt="Facebook" />
                    <p className="font-inter text-[08051E] font-medium">
                      Facebook
                    </p>
                  </button>
                </a>
                <a
                  href={whatsappShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-[141px] h-[48px] border-[#0A0628] border rounded-md gap-2 flex justify-center items-center">
                    <img src={Wa} alt="WhatsApp" />
                    <p className="font-inter text-[08051E] font-medium">
                      WhatsApp
                    </p>
                  </button>
                </a>
                <a
                  href={telegramShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-[141px] h-[48px] border-[#0A0628] border rounded-md gap-2 flex justify-center items-center">
                    <img src={Tg} alt="tg" />
                    <p className="font-inter text-[08051E] font-medium">
                      Telegram
                    </p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[552px] flex flex-col gap-[70px]">
          <video autoplay controls width={"100%"} height={"473px"}>
            <source src={base} type="video/webm" />
          </video>
          <div className="w-full h-[377px] flex flex-col gap-10">
            <div className="w-full h-[81px] flex flex-col justify-between">
              <h1 className="font-sora text-[24px] font-semibold text-black">
                Transcript
              </h1>
              <select name="" id="" className="w-[169px] h-[35px">
                <option value="english">English</option>
              </select>
            </div>
            <div>
              <Transcript />
              <Transcript />
              <Transcript />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 bg-[rgba(231,231,237,0.20)] flex justify-center items-center">
        <div className="w-full max-w-[747px] flex flex-col justify-center items-center gap-10">
          <h1 className="font-sora text-[24px] text-primary text-center font-semibold max-w-[653px] ">
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </h1>
          <button className="w-[150px] h-[51px] flex flex-col justify-center items-center bg-[#120B48] text-white border rounded-lg font-work_sans">
            Save video
          </button>
          <p className="text-[#7E7E7E] font-sora text-2xl">
            Don’t have an account?{" "}
            <Link to="/" className="text-[#120B48] font-semibold underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
