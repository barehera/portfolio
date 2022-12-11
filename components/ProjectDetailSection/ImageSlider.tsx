import React, { Dispatch, useState } from "react";
import Slider from "react-slick";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IProject } from "../../types";
import Image from "next/image";

interface IProps {
  project: IProject | null;
  setImageDetailModalOpen: Dispatch<boolean>;
  setSelectedImage: Dispatch<string>;
}

const ImageSlider = ({
  project,
  setImageDetailModalOpen,
  setSelectedImage,
}: IProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const NextBtn = ({ onClick }: any) => {
    return (
      <button
        className="text-brand-color absolute top-1/2 right-6 -translate-y-1/2 z-50 bg-black rounded-full p-1 bg-opacity-30 hover:scale-125 transition-all duration-300 ease-out"
        onClick={onClick}
      >
        <IoIosArrowForward size={32}></IoIosArrowForward>
      </button>
    );
  };

  const PrevBtn = ({ onClick }: any) => {
    return (
      <button
        className="text-brand-color absolute top-1/2 left-6 -translate-y-1/2 z-50 bg-black rounded-full p-1 bg-opacity-30 hover:scale-125 transition-all duration-300 ease-out"
        onClick={onClick}
      >
        <IoIosArrowBack size={32}></IoIosArrowBack>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn></NextBtn>,
    prevArrow: <PrevBtn></PrevBtn>,
    beforeChange: (prev: any, next: any) => {
      setActiveImageIndex(next);
    },

    customPaging: (i: any) => {
      return (
        <div
          className={`${
            i === activeImageIndex ? "bg-opacity-100" : "bg-opacity-50"
          } w-3 h-3  rounded-full bg-white bg-opacity-50 mt-2 hover:scale-105 hover:bg-opacity-70 transition-all duration-300 ease-out`}
        ></div>
      );
    },
  };

  const handleImageFullScreenClick = (image: string) => {
    setSelectedImage(image);
    setImageDetailModalOpen(true);
  };

  return (
    <div className="flex items-center justify-center">
      <div className=" w-[80vw] lg:w-full relative ">
        <Slider {...settings}>
          {project?.images?.map((image) => (
            <div
              className="flex items-center justify-center group relative "
              key={image}
            >
              <Image
                src={image}
                width={10000}
                height={10000}
                alt={project?.title}
                className="w-full h-[24rem] lg:h-[40vh] object-contain "
              />
              <div
                onClick={() => handleImageFullScreenClick(image)}
                className="flex items-center justify-center absolute top-0 w-full h-full opacity-0 hover:opacity-100 transition-all duration-300 ease-out cursor-pointer"
              >
                <AiOutlineFullscreen className="text-7xl  z-50" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
