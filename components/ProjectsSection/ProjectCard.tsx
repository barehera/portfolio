import Image from "next/image";
import React, { Dispatch } from "react";
import { IProject } from "../../types";

interface IProps {
  setProjectDetailModalOpen: Dispatch<boolean>;
  setSelectedProject: Dispatch<IProject | null>;
  project: IProject;
}

const ProjectCard = ({
  project,
  setSelectedProject,
  setProjectDetailModalOpen,
}: IProps) => {
  const handleClick = () => {
    setSelectedProject(project);
    setProjectDetailModalOpen(true);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col relative w-full bg-primary-dark-blue group rounded-xl overflow-hidden hover:scale-[1.02]  transition-all duration-300 ease-out cursor-pointer"
    >
      <div className="relative w-full h-[15rem] ">
        <Image
          priority
          quality={100}
          alt={project?.title}
          src={project?.image}
          className="object-top group-hover:object-bottom transition-all duration-[4s] ease-in-out object-cover w-full h-full"
          width={10000}
          height={10000}
        />
        <div className="w-full h-full  absolute top-0 bg-primary-dark-blue group-hover:bg-opacity-0 bg-opacity-80 transition-all duration-300 ease-out"></div>
      </div>
      <div className="flex  w-full h-full  bg-gradient-to-t from-primary-dark-blue to-transparent  transition-all duration-300 ease-out">
        <div className="flex flex-col gap-1 p-6">
          <h2 className=" bottom-0 text-white text-2xl font-bold">
            {project?.title}
          </h2>

          <p className="text-gray-300 mb-2  text-sm">
            {project?.description?.slice(0, 140)}...
          </p>
          <div className="flex items-center gap-1 flex-wrap my-2">
            {project?.skills.map((skill) => (
              <div className="text-xs px-2 py-1 rounded bg-secondary-green hover:scale-90 transition-all duration-[3s] hover:duration-300 ease-out">
                {skill}
              </div>
            ))}
          </div>
        </div>
        {/* <button className="text-xs lg:text-sm mt-2 px-6 py-2 rounded-lg bg-primary-border hover:opacity-75 transition-all duration-300 ease-out">
          Details
        </button> */}
      </div>
    </div>
  );
};

export default ProjectCard;
