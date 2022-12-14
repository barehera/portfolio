import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import { useEffect, useState } from "react";
import useFirstAnimation from "../hooks/useFirstAnimation";

const Home: NextPage = () => {
  const showScreen = useFirstAnimation();

  return (
    <>
      <Head>
        <title>Front-End Developer - Cagan Buyukavcilar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4 bg-primary-dark min-h-screen text-white select-none overflow-hidden">
        <div
          className={`${
            showScreen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } flex flex-col overflow-hidden  justify-between max-w-[120rem] mx-auto bg-primary-light-blue rounded-lg h-[calc(100vh_-_2rem)] border border-primary-border transition-all duration-500 ease-out`}
        >
          <Header />
          <HeroSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
