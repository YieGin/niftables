"use client";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import NavLinks from "./NavLinks";
import SocialLinksComponent from "./SocialLinksComponent";
import Button from "@/components/Button";

type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const MenuButton: React.FC<ButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className="z-10" aria-label="Toggle menu">
    <RiMenu2Fill size={30} />
  </button>
);

const CloseButton: React.FC<ButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-[#3D8BFF] rounded-md flex items-center justify-center px-2 sm:px-2"
    aria-label="Close menu"
  >
    <IoMdClose className="text-[30px]" />
  </button>
);

const MobileNav = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
    document.body.style.overflow = !menu ? "hidden" : "auto";
  };

  return (
    <div className="lg:hidden overflow-hidden font-satoshi-Bold">
      <div
        className={`absolute left-0 top-0 right-0 backdrop-blur-sm w-full h-screen z-50 ${
          menu ? "block" : "hidden"
        }`}
      />
      <MenuButton onClick={toggleMenu} />
      <div
        className={`fixed top-0 right-0 sm:w-1/2 w-3/5 h-full transition-transform duration-300 z-50 flex flex-col ${
          menu ? "translate-x-0" : "translate-x-full"
        } bg-black pl-5 py-5 z-20`}
        style={{ overflowY: "auto" }}
      >
        <div className="flex justify-between gap-2 sm:gap-5 sm:pr-5 pr-3">
          <Button className="sm:w-32 sm:h-11 h-9 w-28 sm:text-[18px] text-[13px]">
            Connect
          </Button>
          <CloseButton onClick={toggleMenu} />
        </div>
        <div className="bg-[#13171D] w-full h-[1px] mt-10 mb-[15px]" />
        <NavLinks />
        <SocialLinksComponent />
      </div>
    </div>
  );
};

export default MobileNav;
