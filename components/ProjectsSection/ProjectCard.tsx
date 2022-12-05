import React from "react";

interface IProps {
  image: any;
  title: string;
  description: string;
  skills: string[];
}

const ProjectCard = ({ image, title, description, skills }: IProps) => {
  return (
    <div className="relative w-full h-[24rem] lg:h-[30rem] bg-primary-dark-blue group rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 ease-out cursor-pointer">
      <img
        src={image}
        className="object-top group-hover:object-bottom transition-all duration-[4s] ease-in-out object-cover w-full h-full"
      />
      <div className="w-full h-full  absolute top-0 bg-primary-dark-blue group-hover:bg-opacity-0 bg-opacity-50 transition-all duration-300 ease-out"></div>
      <div className="flex items-end justify-start w-full h-full absolute bottom-0 bg-gradient-to-t from-primary-dark-blue to-transparent group-hover:opacity-100 hover:bg-opacity-50 bg-opacity-0 opacity-0 transition-all duration-300 ease-out">
        <div className="flex flex-col gap-1 p-6">
          <h2 className=" bottom-0 text-white text-lg lg:text-3xl font-bold">
            {title}
          </h2>
          <div className="flex items-center gap-1 flex-wrap my-2">
            {skills.map((skill) => (
              <div className="text-[10px] lg:text-xs px-6 py-1 rounded-full bg-secondary-green hover:scale-90 transition-all duration-[3s] hover:duration-300 ease-out">
                {skill}
              </div>
            ))}
          </div>
          <p className="text-gray-300 mb-2 text-xs lg:text-sm">
            {description.slice(0, 200)}...
          </p>

          <button className="text-xs lg:text-sm mt-2 px-6 py-2 rounded-lg bg-primary-border hover:opacity-75 transition-all duration-300 ease-out">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
