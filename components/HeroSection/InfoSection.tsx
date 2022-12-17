import React from "react";
import Typewriter from "typewriter-effect";

const InfoSection = () => {
  return (
    <div className="flex flex-col lg:col-span-5">
      <article className="mb-6">
        <p className="text-base lg:text-lg text-[#E5E9F0]">Hi, I am</p>
        <h1 className="text-3xl lg:text-5xl mb-2">Çağan Büyükavcılar</h1>
        <h2 className="flex items-center gap-1 text-secondary-blue text-lg  lg:text-2xl">
          {`>`}
          <Typewriter
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(100)
                .typeString("Front-End Developer")
                .start();
            }}
          />
        </h2>

        <p className="text-sm lg:text-base mt-6 text-gray-300 ">
          A developer with expertise and a love for developing intuitive and
          user-friendly web applications. Proficient in modern front-end
          technologies. Strong ability to translate design concepts into elegant
          and functional user interfaces. Seeking a challenging position at a
          forward-thinking company where I can continue to grow and develop my
          skills.
        </p>
      </article>
    </div>
  );
};

export default InfoSection;
