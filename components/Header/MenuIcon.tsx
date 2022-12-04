import React from "react";

const MenuIcon = ({ setShowSidebar }: any) => {
  const handleClick = () => {
    setShowSidebar(true);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col gap-1 group z-[60] lg:hidden"
    >
      <div className="w-6 h-[2px] bg-secondary-gray"></div>
      <div className="w-6 h-[2px] bg-secondary-gray group-hover:w-5 transition-all duration-300 ease-out"></div>
      <div className="w-6 h-[2px] bg-secondary-gray group-hover:w-4 transition-all duration-300 ease-out"></div>
    </div>
  );
};

export default MenuIcon;
