import React from "react";
import Link from "next/link";
import { SocialLinks } from "@/lib/constant";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-5 md:px-20 2xl:px-60 py-8 pb-10 flex md:justify-between flex-col md:flex-row font-satoshi-Regular bg-opacity-5 z-10 relative">
      <div className="flex items-center gap-10 lg:gap-x-[90px]">
        <p className="md:text-[16px] text-[14px]">
          © Creon 2023. All rights reserved.
        </p>
        <div className="flex gap-[10px]">
          {SocialLinks.map((item, index) => (
            <Link className="hover:bg-[#3d8bff] cursor-pointer delay-75 rounded-full" target="_blank" href={item.link} key={index}>
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
      <div className="flex gap-[6px] mt-5 items-center group cursor-pointer">
        <p className="text-[16px]">Powered by</p>
        <span className="font-satoshi-Bold text-[18px] tracking-wide group-hover:text-[#3D8BFF] delay-75 transition-all">
          NIFTABLES
        </span>
      </div>
    </footer>
  );
};

export default Footer;
