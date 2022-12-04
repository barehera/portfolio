import React, { useState } from "react";
import MenuIcon from "./MenuIcon";
import NavLink from "./NavLink";
import Sidebar from "./Sidebar";

const index = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className="flex items-center h-12 ">
      <div className="flex items-center pl-6 h-full  text-lables text-secondary-gray border-b lg:border-r pr-6 lg:pr-24 border-primary-border rounded-tl-lg whitespace-nowrap">
        cagan-buyukavcilar
      </div>
      <nav className="h-full hidden lg:block">
        <ul className="flex items-center h-full">
          <NavLink label="_about-me" selected={true} />
          <NavLink label="_projects" selected={false} />
          <NavLink label="_contact-me" selected={false} />
        </ul>
      </nav>
      <div className="flex items-center px-6 justify-end flex-1 border-b border-primary-border h-full">
        <MenuIcon setShowSidebar={setShowSidebar} />
      </div>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </header>
  );
};

export default index;
