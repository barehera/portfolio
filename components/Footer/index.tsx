import Link from "next/link";
import React from "react";

import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const index = () => {
  return (
    <footer className="flex items-center h-12 ">
      <div className="flex items-center pl-6 h-full  text-lables text-secondary-gray border-t border-r px-6 border-primary-border ">
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
          data-tip="E-Mail"
          href="mailto:buyukavcilar.cagan@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-2 text-sm text-secondary-gray px-3 border-r border-t border-primary-border h-full border-b-2 border-b-transparent hover:text-white   hover:border-b-accent-orange transition-all duration-300 ease-out cursor-pointer`}
        >
          <AiFillMail className="text-xl group-hover:scale-110 transition-all duration-300 ease-out" />
        </Link>
      </nav>
      <div className="flex-1 border-t border-primary-border h-full "></div>
      <p className="flex items-center text-secondary-gray  px-6 border-l border-t border-primary-border   h-full hover:text-white border-b-transparent border-b-2 hover:border-b-accent-orange transition-all duration-300 ease-out cursor-pointer">
        _contact-me
      </p>
    </footer>
  );
};

export default index;
