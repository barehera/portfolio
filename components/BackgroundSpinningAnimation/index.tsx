import React from "react";

const BackgroundSpinningAnimation = () => {
  return (
    <div className="absolute   h-full w-full -z-10">
      <div className="flex items-center justify-center relative h-full w-full animate-spin-slow">
        <div className="-mr-24 bg-accent-green w-[35rem] h-[35rem]  blur-[150px] rounded-full  opacity-40 "></div>
        <div className=" w-[35rem] h-[35rem] bg-accent-purple  blur-[150px] rounded-full  opacity-40 "></div>
      </div>
    </div>
  );
};

export default BackgroundSpinningAnimation;
