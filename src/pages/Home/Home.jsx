import React from "react";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-[56px] bg-[#F4F6F8] ">
      <Hero />
      <Features />
      <HowItWorks />
    </div>
  );
};

export default Home;
