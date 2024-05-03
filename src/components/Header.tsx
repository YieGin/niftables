"use client";
import Image from "next/image";
import React from "react";
import { Logo } from "../../public";
import Button from "./Button";
import MobileNav from "./MobileNav";
import Link from "next/link";

export const navItems = [
  { title: "Creon Pass", href: "", isNew: false },
  { title: "Token", href: "/", isNew: true },
  { title: "AI Revenue", href: "/", isNew: true },
  { title: "AI Launchpad", href: "/", isNew: true },
];

const Header = () => {
  return (
    <div className="flex justify-between items-center sm:px-[45px] px-8 py-[30px] absolute w-full z-30">
      <Link href={"/"}>
        <Image
          className="h-max"
          alt="Logo"
          src={Logo}
          width={140}
          height={39}
        />
      </Link>
      <div className="hidden lg:flex justify-between font-satoshi-Bold">
        <div className="flex items-center gap-x-10">
          {navItems.map((item) => (
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
                  <span className="bg-[#000000] text-[#AB23FF] px-1 py-[2px] uppercase ml-1 rounded-full text-[10px] relative bottom-[6px]">
                    Soon
                  </span>
                )}
              </p>
            </Link>
          ))}
          <Button className="w-[132px] h-11 ml-5 hover:border-none">
            <span>Connect</span>
            <span>Connect</span>
          </Button>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Header;
