import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4 bg-primary-dark min-h-screen text-white select-none overflow-hidden">
        <div className="flex flex-col overflow-hidden  justify-between max-w-[120rem] mx-auto bg-primary-light-blue rounded-lg h-[calc(100vh_-_2rem)] border border-primary-border">
          <Header />
          <HeroSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
