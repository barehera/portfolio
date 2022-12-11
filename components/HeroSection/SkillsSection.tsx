import React, { useEffect, useState } from "react";

import BackgroundSpinningAnimation from "../UI/BackgroundSpinningAnimation";
import nextIcon from "../../assets/next.png";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/node.png";
import tailwindIcon from "../../assets/tailwind.png";
import javascriptIcon from "../../assets/javascript.png";
import typescriptIcon from "../../assets/typescript.png";
import mongodbIcon from "../../assets/mongodb.png";
import firebaseIcon from "../../assets/firebase.png";
import Hexagon from "./Hexagon";
import useMouseAnimation from "../../hooks/useMouseAnimation";

const SkillsSection = () => {
  const { mouseDirectionX, mouseDirectionY, rotateDirection } =
    useMouseAnimation();

  return (
    <div className=" relative flex lg:items-center lg:justify-center h-full lg:col-span-7 ">
      <div
        className={`${mouseDirectionX} ${mouseDirectionY} ${rotateDirection} relative lg:absolute  transition-all duration-[7s] ease-out`}
      >
        <div className="relative flex  flex-wrap lg:flex-nowrap gap-2 lg:gap-1 ">
          <Hexagon image={reactIcon.src} absolute={false} />
          <Hexagon image={nodeIcon.src} absolute={false} />
          <Hexagon image={typescriptIcon.src} absolute={false} />
          <Hexagon image={javascriptIcon.src} absolute={false} />
          <Hexagon image={firebaseIcon.src} absolute={false} />

          <Hexagon
            image={nextIcon.src}
            position="top-20 left-12"
            absolute={true}
          />

          <Hexagon
            image={tailwindIcon.src}
            absolute={true}
            position="-top-20 left-[8.8rem]"
          />
          <Hexagon
            image={mongodbIcon.src}
            absolute={true}
            position="top-20 -right-12"
          />
        </div>
      </div>

      <BackgroundSpinningAnimation />
    </div>
  );
};

export default SkillsSection;
