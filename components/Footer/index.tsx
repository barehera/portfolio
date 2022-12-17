import Link from "next/link";
import React from "react";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineDownload,
} from "react-icons/ai";
import { SiUpwork } from "react-icons/si";

const index = () => {
  return (
    <footer className="flex items-center h-12 z-10">
      <div className="hidden lg:flex items-center pl-6 h-full  text-lables text-secondary-gray border-t border-r px-6 border-primary-border ">
        find me in:
      </div>
      <nav className="h-full flex">
        <Link
          data-tip="LinkedIn"
          href="https://www.linkedin.com/in/cagan-buyukavcilar/"
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-2 text-sm text-secondary-gray px-3 border-r border-t border-primary-border h-full border-b-2 border-b-transparent hover:text-white  hover:border-b-accent-orange transition-all duration-300 ease-out cursor-pointer`}
        >
          <AiFillLinkedin className="text-xl group-hover:scale-110 transition-all duration-300 ease-out" />
        </Link>
        <Link
          data-tip="GitHub"
          href="https://github.com/barehera"
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-2 text-sm text-secondary-gray px-3 border-r border-t border-primary-border h-full border-b-2 border-b-transparent hover:text-white   hover:border-b-accent-orange transition-all duration-300 ease-out cursor-pointer`}
        >
          <AiFillGithub className="text-xl group-hover:scale-110 transition-all duration-300 ease-out" />
        </Link>

        <Link
          data-tip="Upwork"
          href="https://www.upwork.com/freelancers/~01b4590684fa777f31"
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-2 text-sm text-secondary-gray px-3 border-r border-t border-primary-border h-full border-b-2 border-b-transparent hover:text-white   hover:border-b-accent-orange transition-all duration-300 ease-out cursor-pointer`}
        >
          <SiUpwork className="text-xl group-hover:scale-110 transition-all duration-300 ease-out" />
        </Link>
      </nav>
      <div className="flex-1 border-t  border-primary-border h-full "></div>
      <Link
        data-tip="E-Mail"
        href="mailto:buyukavcilar.cagan@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`lg:hidden group flex items-center gap-2 text-sm text-secondary-gray px-3 border-l border-t border-primary-border h-full border-b-2 border-b-transparent hover:text-white   hover:border-b-accent-orange transition-all duration-300 ease-out cursor-pointer`}
      >
        _contact-me
      </Link>
    </footer>
  );
};

export default index;
