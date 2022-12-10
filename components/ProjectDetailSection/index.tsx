import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { IProject } from "../../types";
import Lottie from "lottie-react";
import loadingLottie from "../../assets/lottie/loading.json";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";

import { AiFillEye } from "react-icons/ai";

import Slider from "react-slick";

import ImageDetailModal from "./ImageDetailModal";
import Link from "next/link";

const index = () => {
  const router = useRouter();

  const [project, setProject] = useState<IProject | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const projectSlug = router.query.id;

  const [imageDetailModalOpen, setImageDetailModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

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

  const NextBtn = ({ onClick }: any) => {
    return (
      <button
        className="text-brand-color absolute top-1/2 right-3 -translate-y-1/2 z-10 bg-black rounded-full p-1 bg-opacity-30 hover:scale-105 transition-all duration-300 ease-out"
        onClick={onClick}
      >
        <IoIosArrowForward size={32}></IoIosArrowForward>
      </button>
    );
  };

  const PrevBtn = ({ onClick }: any) => {
    return (
      <button
        className="text-brand-color absolute top-1/2 left-3 -translate-y-1/2 z-10 bg-black rounded-full p-1 bg-opacity-30 hover:scale-105 transition-all duration-300 ease-out"
        onClick={onClick}
      >
        <IoIosArrowBack size={32}></IoIosArrowBack>
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    // nextArrow: <NextBtn></NextBtn>,
    // prevArrow: <PrevBtn></PrevBtn>,
    customPaging: (i: any) => (
      <div className="w-3 h-3  rounded-full bg-white bg-opacity-50 mt-2 hover:scale-105 hover:bg-opacity-70 transition-all duration-300 ease-out"></div>
    ),
  };

  const handleImageFullScreenClick = (image: string) => {
    setSelectedImage(image);
    setImageDetailModalOpen(true);
  };

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
            <div className="flex items-center justify-center">
              <div className=" w-[80vw] lg:w-full relative ">
                <Slider {...settings}>
                  {project?.images?.map((image) => (
                    <div
                      className="flex items-center justify-center group relative "
                      key={image}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-[24rem] lg:h-[40vh] object-contain "
                      />
                      <div
                        onClick={() => handleImageFullScreenClick(image)}
                        className="flex items-center justify-center absolute top-0 w-full h-full opacity-0 hover:opacity-100 transition-all duration-300 ease-out cursor-pointer"
                      >
                        <AiOutlineFullscreen className="text-7xl  z-50" />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

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
                  <button className="flex items-center justify-center w-full gap-1 bg-primary-dark bg-opacity-30 px-6 py-2 rounded-lg text-sm hover:bg-opacity-50 hover:-translate-y-[2px] hover:shadow-xl transition-all duration-300 ease-out">
                    <AiFillEye className="text-lg" /> Live Preview
                  </button>
                </Link>
              ) : null}
            </div>
          </article>
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
