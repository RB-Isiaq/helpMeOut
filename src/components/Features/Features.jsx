import React from "react";
import FeatureHeader from "./FeatureHeader";
import { features } from "./constants";
import FeatureInfo from "./FeatureInfo";
import { Dashboard } from "../../assets";

const Features = () => {
  return (
    <div
      className="w-full flex flex-col gap-[64px] bg-white pt-[80px] lg:px-[100px] md:px-8 px-[10px]"
      id="features"
    >
      <FeatureHeader />
      <div className="w-full flex flex-wrap gap-20 md:gap-8 justify-center">
        <div className="flex flex-col gap-[48px]">
          {features.map((feature) => (
            <FeatureInfo
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              info={feature.info}
            />
          ))}
        </div>
        <div>
          <img src={Dashboard} alt="dashboard" />
        </div>
      </div>
    </div>
  );
};

export default Features;
