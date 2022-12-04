import React from "react";

const BackgroundSpinningAnimation = () => {
  return (
    <div className="absolute  h-full w-full -z-10">
      <div className="relative h-full w-full animate-spin-slow">
        <div className="absolute -top-0 left-12 bg-accent-green w-[34rem] h-[34rem] blur-[210px] opacity-20 lg:opacity-60"></div>
        <div className="absolute -bottom-0 right-12 w-[34rem] h-[34rem] bg-accent-purple blur-[210px] opacity-20 lg:opacity-60"></div>
      </div>
    </div>
  );
};

export default BackgroundSpinningAnimation;
