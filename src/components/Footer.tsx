import React from "react";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { BsDiscord } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";

const Icons = [
  {
    icon: BiLogoTelegram,
  },
  {
    icon: BsDiscord,
  },
  {
    icon: FaTwitter,
  },
];

const Footer = () => {
  return (
    <footer className="px-5 md:px-20 2xl:px-60 py-8 pb-10 flex md:justify-between flex-col md:flex-row font-satoshi-Regular bg-opacity-5 z-10 relative">
      <div className="flex items-center gap-10 lg:gap-x-[90px]">
        <p className="md:text-[16px] text-[14px]">
          © Creon 2023. All rights reserved.
        </p>
        <div className="flex gap-[10px]">
          {Icons.map((item, index) => (
            <div
              key={index}
              className="rounded-full border-2 border-white bg-black hover:bg-[#3d8bff] cursor-pointer delay-75 w-[34px] h-[34px] flex items-center justify-center"
            >
              <item.icon className="text-white text-[17px]" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-[6px] mt-5 items-center">
        <p className="text-[16px]">Powered by</p>
        <Image
          width={100}
          height={100}
          className="w-[101px] mt-1"
          src="/images/Frame.webp"
          alt="Frame text"
        />
      </div>
    </footer>
  );
};

export default Footer;
