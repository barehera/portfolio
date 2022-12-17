import Link from "next/link";
import React from "react";

interface IProps {
  image: any;
  absolute: boolean;
  position?: string;
}

const Hexagon = ({ image, absolute, position }: IProps) => {
  return (
    <>
      {absolute ? (
        <div className={`lg:absolute ${position}`}>
          <div className="w-14 h-14 rounded-xl lg:rounded-none bg-white lg:hexagon relative flex items-center justify-center hover:scale-90  duration-[2s] hover:duration-300 ease-out  ">
            <img
              draggable="false"
              className=" w-8 h-8 lg:w-12 lg:h-12 object-contain rounded lg:rounded-lg "
              src={image}
            />
          </div>
        </div>
      ) : (
        <div className="w-14 h-14 rounded-xl lg:rounded-none bg-white lg:hexagon relative flex items-center justify-center hover:scale-90  duration-[2s] hover:duration-300 ease-out  ">
          <img
            draggable="false"
            className=" w-8 h-8 lg:w-12 lg:h-12 object-contain rounded lg:rounded-lg "
            src={image}
          />
        </div>
      )}
    </>
  );
};

export default Hexagon;
