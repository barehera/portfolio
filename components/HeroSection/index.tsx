import Link from "next/link";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import BackgroundSpinningAnimation from "./BackgroundSpinningAnimation";
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
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const { movementX, movementY }: any = event;

      if (movementX < 0 && !movementY) {
        setMouseDirectionX(`translate-x-[60px]  `);
      } else if (movementX > 0 && !movementY) {
        setMouseDirectionX(`translate-x-[-60px] `);
      } else if (!movementX && movementY > 0) {
        setMouseDirectionY(`translate-y-[-60px] `);
      } else if (!movementX && movementY < 0) {
        setMouseDirectionY(`translate-y-[60px] `);
      } else if (movementX < 0 && movementY < 0) {
        setMouseDirectionY(`translate-y-[60px] `);
        setMouseDirectionX(`translate-x-[60px] `);
      } else if (movementX > 0 && movementY < 0) {
        setMouseDirectionY(`translate-y-[60px] `);
        setMouseDirectionX(`-translate-x-[60px]`);
      } else if (movementX > 0 && movementY > 0) {
        setMouseDirectionY(`-translate-y-[60px] `);
        setMouseDirectionX(`-translate-x-[60px]`);
      } else if (movementX < 0 && movementY > 0) {
        setMouseDirectionY(`-translate-y-[60px] `);
        setMouseDirectionX(`translate-x-[60px] `);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="px-40 grid grid-cols-12 items-center  gap-20 ">
      <div className="flex flex-col col-span-5">
        <article className="mb-6 z-50">
          <p className="text-lg text-[#E5E9F0]">Hi, I am</p>
          <h1 className="text-5xl mb-2">Çağan Büyükavcılar</h1>
          <h2 className="flex items-center gap-1 text-secondary-blue  text-2xl">
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

          <p className="mt-6 text-secondary-gray">
            I am a developer with years of industry experience building
            responsive and mobile-first websites and web applications for local
            businesses and start-up companies. I specialize in JavaScript and
            have professional experience working with React.js, Next.js and
            Tailwind CSS.
          </p>
        </article>
        {/* <button className="px-6 py-3 rounded-2xl bg-secondary-gray bg-opacity-10 hover:bg-opacity-30 transition-all duration-300 ease-out">
          Projects
        </button> */}
      </div>
      <div className="relative flex items-center justify-center  h-full col-span-7">
        <div
          className={`${mouseDirectionX} ${mouseDirectionY} absolute z-10  transition-all duration-[5s] ease-out`}
        >
          <div className="relative flex gap-1">
            <div className="absolute top-20 left-12">
              <Hexagon image={nextIcon.src} />
            </div>
            <Hexagon image={reactIcon.src} />
            <Hexagon image={nodeIcon.src} />
            <div className="absolute -top-20 left-[8.8rem]">
              <Hexagon image={tailwindIcon.src} />
            </div>
            <Hexagon image={typescriptIcon.src} />

            <Hexagon image={javascriptIcon.src} />
            <div className="absolute top-20 -right-12">
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
