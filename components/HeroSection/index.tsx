import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <section className="px-60 grid grid-cols-2 items-center gap-6">
      <div className="flex flex-col ">
        <article className="mb-12">
          <p className="text-lg text-[#E5E9F0]">Hi all. I am</p>
          <h1 className="text-5xl mb-2">Cagan Buyukavcilar</h1>
          <h2 className="text-secondary-blue  text-2xl">
            {`>`} Front-end developer
          </h2>
        </article>
        <article className="flex flex-col gap-1">
          <p className="text-secondary-gray">
            // complete the game to continue
          </p>
          <p className="text-secondary-gray">
            // you can also see it on my Github Page
          </p>
          <p>
            <span className="text-secondary-blue">const</span>{" "}
            <span className="text-accent-green">githubLink</span> ={" "}
            <Link
              href="https://github.com/barehera/discord-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-orange cursor-pointer hover:underline "
            >
              "https://github.com/barehera/discord-clone"
            </Link>
          </p>
        </article>
      </div>
      <div className="relative ">
        <div className="flex items-center justify-center text-4xl bg-white bg-opacity-10 h-96  p-6 rounded-2xl ">
          GAME HERE
        </div>
        <div className="absolute -top-48 -left-20 bg-accent-green w-96 h-96 blur-[190px]"></div>
        <div className="absolute -bottom-48 right-0 w-96 h-96 bg-accent-purple blur-[190px]"></div>
      </div>
    </section>
  );
};

export default index;
