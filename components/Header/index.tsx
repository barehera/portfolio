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
          <NavLink label="_about-me" selected={true} />
          <NavLink label="_projects" selected={false} />
        </ul>
      </nav>
      <div className="flex-1 border-b border-primary-border h-full"></div>
    </header>
  );
};

export default index;
