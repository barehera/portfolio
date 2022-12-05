import React from "react";
import ProjectCard from "./ProjectCard";

import sportHouse from "../../assets/projects/sporthouse.png";

const index = () => {
  return (
    <section className=" px-6 lg:px-24 py-6 lg:py-12 h-full overflow-auto scrollbar-thin scrollbar-track-primary-light-blue scrollbar-thumb-primary-dark-blue">
      <header className="w-full flex flex-col gap-1 items-center justify-center mb-12 mt-6">
        <h1 className="text-secondary-green font-bold text-xl lg:text-3xl">
          PROJECTS
        </h1>
        <p className="text-secondary-gray text-base lg:text-lg">
          // Selected projects I've worked on in the past.
        </p>
      </header>
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
        <ProjectCard
          image={sportHouse.src}
          title="SportHouse"
          description="Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past. Selected projects I've worked on in the past."
          skills={["JavaScript", "TypeScript", "Next.js", "React.js"]}
        />
      </div>
    </section>
  );
};

export default index;
