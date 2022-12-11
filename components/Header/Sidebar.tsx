import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import MenuIcon from "./MenuIcon";
import NavLink from "./NavLink";

const Sidebar = ({ setShowSidebar, showSidebar }: any) => {
  const handleClose = () => {
    setShowSidebar(false);
  };

  return (
    <aside
      className={`${
        showSidebar
          ? "w-full opacity-100 visible z-[999]"
          : "w-0 opacity-0 invisible"
      } fixed top-0 right-0 bg-primary-dark-blue  h-screen transition-all duration-500 ease-out`}
    >
      {showSidebar ? (
        <>
          <div className="flex items-center h-12">
            <div className="flex items-center pl-6 h-full  text-lables text-secondary-gray border-b lg:border-r pr-6 lg:pr-24 border-primary-border rounded-tl-lg whitespace-nowrap">
              cagan-buyukavcilar
            </div>

            <div className="flex items-center px-6 justify-end flex-1 border-b border-primary-border h-full">
              <AiOutlineClose
                onClick={handleClose}
                className="text-xl text-secondary-gray hover:rotate-12 transition-all duration-500 ease-out"
              />
            </div>
          </div>
          <div className="">
            <ul className="flex flex-col w-full  ">
              <NavLink label="_about-me" link="/" />
              <NavLink label="_projects" link="/projects" />
              {/* <NavLink label="_contact-me" link="/contact-me" /> */}
            </ul>
          </div>
        </>
      ) : null}
    </aside>
  );
};

export default Sidebar;
