import Link from "next/link";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import BackgroundSpinningAnimation from "../BackgroundSpinningAnimation";
import CodeSnippetPersonClass from "./CodeSnippetPersonClass";
import nextIcon from "../../assets/next.png";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/node.png";
import tailwindIcon from "../../assets/tailwind.png";
import javascriptIcon from "../../assets/javascript.png";
import typescriptIcon from "../../assets/typescript.png";
import mongodbIcon from "../../assets/mongodb.png";
import firebaseIcon from "../../assets/firebase.png";
import Hexagon from "./Hexagon";

const index = () => {
  const [mouseDirectionX, setMouseDirectionX] = useState("");
  const [mouseDirectionY, setMouseDirectionY] = useState("");
  const [rotateDirection, setRotateDirection] = useState("");

  let rotated = false;
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const { movementX, movementY }: any = event;

      if (movementX < 0 && movementY < 0) {
        setMouseDirectionY(`lg:-translate-y-[40px]`);
        setMouseDirectionX(`lg:-translate-x-[40px] `);
      } else if (movementX > 0 && movementY < 0) {
        setMouseDirectionY(`lg:-translate-y-[40px] `);
        setMouseDirectionX(`lg:translate-x-[40px]`);
      } else if (movementX > 0 && movementY > 0) {
        setMouseDirectionY(`lg:translate-y-[40px]`);
        setMouseDirectionX(`lg:translate-x-[40px]`);
      } else if (movementX < 0 && movementY > 0) {
        setMouseDirectionY(`lg:translate-y-[40px] `);
        setMouseDirectionX(`lg:-translate-x-[40px] `);
      }
      if (rotated === false) {
        setRotateDirection((prev) =>
          prev === "lg:-rotate-12" ? "lg:rotate-12" : "lg:-rotate-12"
        );
        rotated = true;
        setTimeout(() => {
          rotated = false;
        }, 2000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className=" px-6  lg:px-24 grid lg:grid-cols-12 items-center lg:gap-12">
      <div className="flex flex-col lg:col-span-5">
        <article className="mb-6">
          <p className="text-base lg:text-lg text-[#E5E9F0]">Hi, I am</p>
          <h1 className="text-3xl lg:text-5xl mb-2">Çağan Büyükavcılar</h1>
          <h2 className="flex items-center gap-1 text-secondary-blue text-lg  lg:text-2xl">
            {`>`}
            <Typewriter
              options={{
                cursor: "",
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(100)
                  .typeString("Front-end developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Back-end developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Full-stack developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </h2>

          <p className="text-sm lg:text-base mt-6 text-gray-300 ">
            A developer with expertise and a love for developing intuitive and
            user-friendly web applications. Proficient in modern front-end
            technologies. Strong ability to translate design concepts into
            elegant and functional user interfaces. Seeking a challenging
            position at a forward-thinking company where I can continue to grow
            and develop my skills.
          </p>
        </article>
      </div>
      <div className=" relative flex lg:items-center lg:justify-center h-full lg:col-span-7 ">
        <div
          className={`${mouseDirectionX} ${mouseDirectionY} ${rotateDirection} relative lg:absolute  transition-all duration-[7s] ease-out`}
        >
          <div className="relative flex  flex-wrap lg:flex-nowrap gap-2 lg:gap-1 ">
            <div className="lg:absolute top-20 left-12">
              <Hexagon image={nextIcon.src} />
            </div>
            <Hexagon image={reactIcon.src} />
            <Hexagon image={nodeIcon.src} />
            <div className="lg:absolute -top-20 left-[8.8rem]">
              <Hexagon image={tailwindIcon.src} />
            </div>
            <Hexagon image={typescriptIcon.src} />

            <Hexagon image={javascriptIcon.src} />
            <div className="lg:absolute top-20 -right-12">
              <Hexagon image={mongodbIcon.src} />
            </div>
            <Hexagon image={firebaseIcon.src} />
          </div>
        </div>

        <BackgroundSpinningAnimation />
      </div>
    </section>
  );
};

export default index;
