import Head from "next/head";
import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BackgroundSpinningAnimation from "../../components/UI/BackgroundSpinningAnimation";
import ProjectDetailSection from "../../components/ProjectDetailSection";
import useFirstAnimation from "../../hooks/useFirstAnimation";
import useGetProject from "../../hooks/useGetProject";
import { useRouter } from "next/router";

const SingleProject = () => {
  const router = useRouter();

  const showScreen = useFirstAnimation();
  const { project, loading } = useGetProject(router.query.id);

  return (
    <>
      <Head>
        <title>{project?.title} - Cagan Buyukavcilar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 py-10 bg-primary-dark min-h-screen text-white select-none overflow-hidden">
        <div
          className={`${
            showScreen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } flex flex-col overflow-hidden justify-between max-w-[120rem] mx-auto bg-primary-light-blue rounded-lg h-[calc(100vh_-_5rem)] border border-primary-border transition-all duration-500 ease-out`}
        >
          <Header />
          <ProjectDetailSection project={project} loading={loading} />
          <BackgroundSpinningAnimation />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default SingleProject;
