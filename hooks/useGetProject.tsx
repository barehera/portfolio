import React, { useEffect, useState } from "react";
import { IProject } from "../types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";

const useGetProject = (projectSlug: string | string[] | undefined) => {
  const [project, setProject] = useState<IProject | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getProjects = async () => {
    const q = query(
      collection(db, "projects"),
      where("slug", "==", projectSlug)
    );

    const querySnapshot = await getDocs(q);
    const selectedProject: any = querySnapshot.docs[0];

    setProject({ ...selectedProject.data(), id: selectedProject.id });

    setTimeout(() => {
      setLoading(false);
    }, 200);
  };
  useEffect(() => {
    if (projectSlug && !project) {
      getProjects();
    }
  }, [projectSlug]);

  return { loading, project };
};

export default useGetProject;
