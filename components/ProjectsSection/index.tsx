import React from "react";
import ProjectCard from "./ProjectCard";

import { IProject } from "../../types";

import loadingLottie from "../../assets/lottie/loading.json";
import useGetProjects from "../../hooks/useGetProjects";
import LoadingLottie from "../UI/LoadingLottie";

const index = () => {
  const { loading, projects } = useGetProjects();

  return (
    <>
      <section className=" px-6 lg:px-24 py-6 lg:py-12 h-full overflow-auto scrollbar-thin scrollbar-track-primary-dark-blue scrollbar-thumb-secondary-green">
        <header className="w-full flex flex-col gap-1 items-center justify-center mb-12 mt-6">
          <h1 className="text-secondary-green font-bold text-2xl lg:text-3xl">
            PROJECTS
          </h1>
          <p className="text-secondary-gray text-base lg:text-lg">
            // Selected projects I've worked on in the past.
          </p>
        </header>

        {!loading ? (
          <div className="flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-3 gap-y-12 gap-x-6">
            {projects.map((project: IProject) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <LoadingLottie />
        )}
      </section>
    </>
  );
};

export default index;
