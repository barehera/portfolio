import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const InfoSection = () => {
  return (
    <div className="flex flex-col lg:col-span-5">
      <article className="mb-6">
        <h1 className="text-3xl lg:text-5xl ">Çağan Büyükavcılar</h1>
        <h2 className="flex items-center gap-1 text-secondary-blue text-lg lg:mt-2 lg:text-2xl">
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

        <p className="text-sm lg:text-base mt-2 lg:mt-6 text-gray-300 ">
          A developer with expertise and a love for developing intuitive and
          user-friendly web applications. Proficient in modern front-end
          technologies. Strong ability to translate design concepts into elegant
          and functional user interfaces.
        </p>
        <Link
          href="mailto:buyukavcilar.cagan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hidden lg:block mt-6 border max-w-max border-primary-border hover:border-accent-orange hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out text-secondary-gray hover:text-white px-12 py-2 rounded">
            _contact-me
          </div>
        </Link>
      </article>
    </div>
  );
};

export default InfoSection;
