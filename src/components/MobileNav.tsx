"use client";
import React, { useState } from "react";
import Button from "./Button";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { navItems } from "./Header";
import { SocialLinks } from "@/lib/constant";
import Image from "next/image";

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
      <button onClick={toggleMenu} className="z-10" aria-label="Open menu">
        <RiMenu2Fill size={30} />
      </button>
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
          <button
            onClick={toggleMenu}
            className="bg-[#3D8BFF] rounded-md flex items-center justify-center px-2 sm:px-2"
            aria-label="Close menu"
          >
            <IoMdClose className="text-[30px]" />
          </button>
        </div>
        <div className="bg-[#13171D] w-full h-[1px] mt-10 mb-[15px]" />
        {navItems.map((item) => (
          <Link key={item.title} href={item.href} className="text-lg">
            <p
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
            </p>
            <div className="bg-[#13171D] w-full h-[1px] my-[15px]" />
          </Link>
        ))}
        <div className="flex justify-center gap-5 mt-auto">
          {SocialLinks.map((item, index) => (
            <Link
              target="_blank"
              href={item.link}
              key={index}
              className="hover:bg-[#3d8bff] cursor-pointer delay-75 rounded-full"
            >
              <Image
                className="h-max"
                alt="Logo"
                src={item.icon}
                width={34}
                height={34}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
