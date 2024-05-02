'use client'
import Image from "next/image";
import React from "react";
import { Logo } from "../../public";
import Button from "./Button";
import MobileNav from "./MobileNav";
import { Link as LinkScroll } from 'react-scroll';
import Link from "next/link";

export const navItems = [
  { title: "Creon Pass", href: "creon-pass", isNew: false },
  { title: "Token", href: "/token", isNew: true },
  { title: "AI Revenue", href: "/ai-revenue", isNew: true },
  { title: "AI Launchpad", href: "/ai-launchpad", isNew: true },
];

const Header = () => {
  return (
    <div className="flex justify-between items-center sm:px-[45px] px-8 py-[30px] absolute w-full z-30">
      <Image className="h-max" alt="Logo" src={Logo} width={140} height={39} />
      <div className="hidden lg:flex justify-between font-satoshi-Bold">
        <div className="flex items-center gap-x-10">
          {navItems.map((item) => {
            if (item.title === "Creon Pass") {
              return (
                <LinkScroll key={item.title} to={item.href} smooth={true} duration={500} className="text-lg cursor-pointer">
                  <p className={`${item.isNew ? "" : "hover:text-[#3D8BFF] delay-75 transition-all"}`}>
                    {item.title}
                    {item.isNew && (
                      <span className="bg-black text-[#AB23FF] px-1 py-[2px] uppercase ml-1 rounded-full text-[10px] relative bottom-[6px]">
                        Soon
                      </span>
                    )}
                  </p>
                </LinkScroll>
              );
            } else {
              return (
                <Link key={item.title} href={item.href} className="text-lg">
                  <p className={`${item.isNew ? "" : "hover:text-[#3D8BFF] delay-75 transition-all"}`}>
                    {item.title}
                    {item.isNew && (
                      <span className="bg-black text-[#AB23FF] px-1 py-[2px] uppercase ml-1 rounded-full text-[10px] relative bottom-[6px]">
                        Soon
                      </span>
                    )}
                  </p>
                </Link>
              );
            }
          })}
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
