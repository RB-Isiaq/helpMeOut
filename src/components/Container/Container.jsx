import React from "react";

const Container = ({ children }) => {
  return (
    <div className="lg:px-[100px] md:px-8 px-[10px]  pb-[74px] w-full  ">
      {children}
    </div>
  );
};

export default Container;
