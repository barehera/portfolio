import Link from "next/link";
import React from "react";

interface IProps {
  image: any;
}

const Hexagon = ({ image }: IProps) => {
  return (
    <div className="w-14 h-14 rounded-full lg:rounded-none bg-white lg:hexagon relative flex items-center justify-center hover:scale-90  duration-[2s] hover:duration-300 ease-out  ">
      <img
        className=" w-8 h-8 lg:w-12 lg:h-12 object-contain rounded lg:rounded-lg "
        src={image}
      />
    </div>
  );
};

export default Hexagon;
