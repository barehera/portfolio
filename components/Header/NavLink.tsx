import React from "react";

interface IProps {
  selected: boolean;
  label: string;
}

const NavLink = ({ selected, label }: IProps) => {
  const selectedStyle = selected
    ? "border-b-2 border-b-accent-orange !text-white"
    : null;

  return (
    <li
      className={`${selectedStyle} py-6 lg:py-0 flex items-center text-secondary-gray px-6 border-r border-b  border-primary-border h-full hover:text-white  hover:border-b-accent-orange transition-all duration-300 ease-out cursor-pointer whitespace-nowrap`}
    >
      {label}
    </li>
  );
};

export default NavLink;
