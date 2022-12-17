import Link from "next/link";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { IProject } from "../../types";

interface IProps {
  project: IProject | null;
}

const ProjectDetails = ({ project }: IProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl lg:text-4xl text-accent-green font-bold">
        {project?.title}
      </h1>
      <div className="flex items-center gap-1 flex-wrap ">
        {project?.skills.map((skill) => (
          <div className="text-sm px-6 py-1 rounded bg-secondary-green hover:scale-90 transition-all duration-[3s] hover:duration-300 ease-out">
            {skill}
          </div>
        ))}
      </div>
      <p className="text-sm  text-gray-300">{project?.description}</p>
      {project?.link ? (
        <Link
          className="w-full"
          href={project?.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="max-w-max flex items-center justify-center w-full gap-1 bg-primary-dark bg-opacity-30 px-6 py-2 rounded-lg text-sm hover:bg-opacity-50 hover:-translate-y-[2px] hover:shadow-xl transition-all duration-300 ease-out">
            <AiFillEye className="text-lg" /> Live Preview
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default ProjectDetails;
