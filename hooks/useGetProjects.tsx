import React, { useEffect, useState } from "react";
import { IProject } from "../types";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";

const useGetProjects = () => {
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
    }, 200);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return { loading, projects };
};

export default useGetProjects;
