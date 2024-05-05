"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { navItems } from "@/lib/constant";
import Button from "../Button";
import { Logo } from "../../../public";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <div className="flex justify-between items-center sm:px-[50px] px-8 py-[30px] absolute w-full z-30">
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
        <div className="flex items-center gap-5 xl:gap-x-10">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
            >
              <div
                className={`flex text-[18px] ${
                  item.isNew
                    ? ""
                    : "hover:text-[#3D8BFF] delay-75 transition-all"
                }`}
              >
                <p>{item.title}</p>
                {item.isNew && (
                  <Image
                    className="ml-1 w-[38px] h-[14px] mt-[2px]"
                    width={38}
                    height={14}
                    src="/svgs/Frame_soon.svg"
                    alt="Soon Frame"
                  />
                )}
              </div>
            </Link>
          ))}
          <Button className="w-[132px] h-11 ml-5 hover:border-none text-[18px] font-satoshi-Regular">
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
