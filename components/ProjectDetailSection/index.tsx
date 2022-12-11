import React, { useState } from "react";

import ImageDetailModal from "./ImageDetailModal";
import { IProject } from "../../types";
import ImageSlider from "./ImageSlider";
import ProjectDetails from "./ProjectDetails";

import LoadingLottie from "../UI/LoadingLottie";

interface IProps {
  project: IProject | null;
  loading: boolean;
}

const index = ({ project, loading }: IProps) => {
  const [imageDetailModalOpen, setImageDetailModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  return (
    <>
      <ImageDetailModal
        open={imageDetailModalOpen}
        setOpen={setImageDetailModalOpen}
        selectedImage={selectedImage}
      />

      <section className="lg:flex lg:items-center lg:justify-center px-6  py-12 lg:py-6  h-full overflow-auto scrollbar-thin scrollbar-track-primary-dark-blue scrollbar-thumb-secondary-green">
        {!loading ? (
          <article className="grid lg:grid-cols-2 gap-6 items-center">
            <ImageSlider
              project={project}
              setImageDetailModalOpen={setImageDetailModalOpen}
              setSelectedImage={setSelectedImage}
            />
            <ProjectDetails project={project} />
          </article>
        ) : (
          <LoadingLottie />
        )}
      </section>
    </>
  );
};

export default index;
