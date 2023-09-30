import React from "react";
import Header from "./Header";
import { how } from "./constants";
import HowItWork from "./HowItWork";

const HowItWorks = () => {
  return (
    <div className="w-full pt-[80px] pb-[136px] flex flex-col gap-[59px] justify-center items-center bg-white lg:px-[100px] md:px-8 px-[10px]">
      <Header />
      <div className="w-full flex justify-center lg:justify-between flex-wrap">
        {how.map((h) => (
          <HowItWork title={h.title} info={h.info} key={h.id} id={h.id} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
