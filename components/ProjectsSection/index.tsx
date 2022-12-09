import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";

import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { IProject } from "../../types";
import Lottie from "lottie-react";

import loadingLottie from "../../assets/lottie/loading.json";

const index = () => {
  const [projectDetailModalOpen, setProjectDetailModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);

  const [projects, setProjects] = useState<IProject[] | []>([]);
  const [loading, setLoading] = useState(false);

  const getProjects = async () => {
    setLoading(true);
    const q = query(collection(db, "projects"), orderBy("sort", "asc"));

    const querySnapshot = await getDocs(q);
    setProjects([]);

    querySnapshot.forEach((doc) => {
      setProjects((projects: any) => [
        ...projects,
        { id: doc.id, ...doc.data() },
      ]);
    });
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {/* <ProjectDetailModal
        open={projectDetailModalOpen}
        setOpen={setProjectDetailModalOpen}
        selectedProject={selectedProject}
      /> */}
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
              <ProjectCard
                setSelectedProject={setSelectedProject}
                setProjectDetailModalOpen={setProjectDetailModalOpen}
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center ">
            <Lottie
              animationData={loadingLottie}
              loop={true}
              className="w-full h-40 object-contain"
            />
          </div>
        )}
      </section>
    </>
  );
};

export default index;
