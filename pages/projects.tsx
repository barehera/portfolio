import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import BackgroundSpinningAnimation from "../components/BackgroundSpinningAnimation";

const projects = () => {
  const [showScreen, setShowScreen] = useState(false);
  useEffect(() => {
    setShowScreen(true);

    return () => {
      setShowScreen(false);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 py-10 bg-primary-dark min-h-screen text-white select-none overflow-hidden">
        <div
          className={`${
            showScreen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } flex flex-col overflow-hidden justify-between max-w-[120rem] mx-auto bg-primary-light-blue rounded-lg h-[calc(100vh_-_5rem)] border border-primary-border transition-all duration-500 ease-out`}
        >
          <Header />
          <ProjectsSection />
          <BackgroundSpinningAnimation />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default projects;
