import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface IProps {
  label: string;
  link: string;
}

const NavLink = ({ label, link }: IProps) => {
  const router = useRouter();

  const isSelected = router.pathname === link;

  const selectedStyle = "border-b-2 border-b-accent-orange !text-white";

  return (
    <Link
      className={`${
        isSelected && selectedStyle
      } py-6 lg:py-0 flex items-center text-secondary-gray px-6 border-r border-b  border-primary-border h-full hover:text-white  hover:border-b-accent-orange transition-all duration-300 ease-out cursor-pointer whitespace-nowrap`}
      href={link}
    >
      {label}
    </Link>
  );
};

export default NavLink;
