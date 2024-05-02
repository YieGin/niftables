"use client";
import React, { useState } from "react";
import Button from "./Button";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { navItems } from "./Header";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="lg:hidden overflow-hidden font-satoshi-Bold">
      <button onClick={toggleMenu} className="z-10">
        <RiMenu2Fill size={30} />
      </button>
      <div
        className={`fixed top-0 right-0 sm:w-1/2 w-3/5 h-screen transition-transform duration-300 ${
          menu ? "translate-x-0" : "translate-x-full"
        } bg-blue-950 pl-5 py-5 z-20`}
      >
        <div className="flex justify-between gap-2 sm:gap-5 sm:pr-5 pr-3">
          <Button className="sm:w-32 sm:h-11 h-9 w-28 sm:text-[18px] text-[13px]">
            Connect
          </Button>
          <button
            onClick={toggleMenu}
            className="bg-[#3D8BFF] rounded-md flex items-center justify-center px-2 sm:px-2"
          >
            <IoMdClose className="text-[30px]" />
          </button>
        </div>
        <div className="bg-[#13171D] w-full h-[1px] mt-10 mb-[15px]" />
        {navItems.map((item) => (
          <Link key={item.title} href={item.href} className="text-[16px]">
            <div
              className={`${
                item.isNew ? "" : "hover:text-[#3D8BFF] delay-75 transition-all"
              }`}
            >
              {item.title}
              {item.isNew && (
                <span className="bg-black text-[#AB23FF] px-1 py-[2px] uppercase ml-1 rounded-full text-[10px] relative bottom-2">
                  Soon
                </span>
              )}
              <div className="bg-[#13171D] w-full h-[1px] my-[15px]" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;