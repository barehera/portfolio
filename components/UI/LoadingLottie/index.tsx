import React from "react";
import Lottie from "lottie-react";
import loadingLottie from "../../../assets/lottie/loading.json";

const index = () => {
  return (
    <div className="flex items-center justify-center ">
      <Lottie
        animationData={loadingLottie}
        loop={true}
        className="w-full h-40 object-contain"
      />
    </div>
  );
};

export default index;
