import React from "react";

interface IProps {
  image: any;
}

const Hexagon = ({ image }: IProps) => {
  return (
    <div className="hexagon relative flex items-center justify-center hover:scale-90   duration-[3s] hover:duration-300 ease-out  ">
      <img
        className="absolute text-black w-12 h-12 object-contain rounded-lg "
        src={image}
      />
    </div>
  );
};

export default Hexagon;
