import React from "react";
import NavLink from "./NavLink";

const index = () => {
  return (
    <header className="flex items-center h-12 ">
      <div className="flex items-center pl-6 h-full  text-lables text-secondary-gray border-b border-r pr-24 border-primary-border rounded-tl-lg">
        cagan-buyukavcilar
      </div>
      <nav className="h-full">
        <ul className="flex items-center h-full">
          <NavLink label="_hello" selected={true} />
          <NavLink label="_about-me" selected={false} />
          <NavLink label="_projects" selected={false} />
        </ul>
      </nav>
      <div className="flex-1 border-b border-primary-border h-full"></div>
      <p className="flex items-center text-secondary-gray  px-6 border-l border-b border-primary-border   h-full hover:text-white hover:border-b-2 hover:border-b-accent-orange transition-all duration-300 ease-out cursor-pointer">
        _contact-me
      </p>
    </header>
  );
};

export default index;
