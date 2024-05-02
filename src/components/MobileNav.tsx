"use client";
import React, { useState } from "react";
import Button from "./Button";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { navItems } from "./Header";
import { Link as LinkScroll } from "react-scroll";

const MobileNav = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
    document.body.style.overflow = !menu ? 'hidden' : 'auto';
  };

  return (
    <div className="lg:hidden overflow-hidden font-satoshi-Bold">
      <button onClick={toggleMenu} className="z-10" aria-label="Open menu">
        <RiMenu2Fill size={30} />
      </button>
      <div
        className={`fixed top-0 right-0 sm:w-1/2 w-3/5 h-screen transition-transform duration-300 ${
          menu ? "translate-x-0" : "translate-x-full"
        } bg-black pl-5 py-5 z-20`}
      >
        <div className="flex justify-between gap-2 sm:gap-5 sm:pr-5 pr-3">
          <Button className="sm:w-32 sm:h-11 h-9 w-28 sm:text-[18px] text-[13px]">
            Connect
          </Button>
          <button
            onClick={toggleMenu}
            className="bg-[#3D8BFF] rounded-md flex items-center justify-center px-2 sm:px-2"
            aria-label="Close menu"
          >
            <IoMdClose className="text-[30px]" />
          </button>
        </div>
        <div className="bg-[#13171D] w-full h-[1px] mt-10 mb-[15px]" />
        {navItems.map((item) => {
          if (item.title === "Creon Pass") {
            return (
              <LinkScroll
                key={item.title}
                to={item.href}
                smooth={true}
                duration={500}
                className="text-lg cursor-pointer"
              >
                <p
                  className={`${
                    item.isNew
                      ? ""
                      : "hover:text-[#3D8BFF] delay-75 transition-all"
                  }`}
                >
                  {item.title}
                  {item.isNew && (
                    <span className="bg-black text-[#AB23FF] px-1 py-[2px] uppercase ml-1 rounded-full text-[10px] relative bottom-[6px]">
                      Soon
                    </span>
                  )}
                </p>
                <div className="bg-[#13171D] w-full h-[1px] my-[15px]" />
              </LinkScroll>
            );
          } else {
            return (
              <Link key={item.title} href={item.href} className="text-lg">
                <p
                  className={`${
                    item.isNew
                      ? ""
                      : "hover:text-[#3D8BFF] delay-75 transition-all"
                  }`}
                >
                  {item.title}
                  {item.isNew && (
                    <span className="bg-black text-[#AB23FF] px-1 py-[2px] uppercase ml-1 rounded-full text-[10px] relative bottom-2">
                      Soon
                    </span>
                  )}
                </p>
                <div className="bg-[#13171D] w-full h-[1px] my-[15px]" />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MobileNav;
