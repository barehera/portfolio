import Link from "next/link";
import React from "react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const index = () => {
  return (
    <footer className="flex items-center h-12 ">
      <div className="flex items-center pl-6 h-full  text-lables text-secondary-gray border-t border-r px-6 border-primary-border ">
        find me in:
      </div>
      <nav className="h-full">
        <Link
          href="https://www.linkedin.com/in/cagan-buyukavcilar/"
          target="_blank"
          rel="noopener noreferrer"
          className={` flex items-center gap-2 text-sm text-secondary-gray px-3 border-r border-t border-primary-border h-full hover:text-white hover:border-b-2 hover:border-b-accent-orange transition-all duration-300 ease-out cursor-pointer`}
        >
          <AiFillLinkedin className="text-xl" />
        </Link>
      </nav>
      <div className="flex-1 border-t border-primary-border h-full"></div>

      <Link
        href="https://github.com/barehera"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 list-none text-sm text-secondary-gray px-3 border-l border-t border-primary-border h-full hover:text-white hover:border-b-2 hover:border-b-accent-orange transition-all duration-300 ease-out cursor-pointer`}
      >
        @barehera <AiFillGithub className="text-xl" />
      </Link>
    </footer>
  );
};

export default index;
